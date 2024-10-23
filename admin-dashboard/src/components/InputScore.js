import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./InputScore.css"; // Import file CSS
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";

const InputScore = () => {
    const navigate = useNavigate();
    const { maCTHP } = useParams();
    const [scoreInput, setScoreInput] = useState({
        masv: "",
        hoten: "",
        maloaidiem: "",
        diemquatrinh: "",
        diemketthuc: "",
        chuyencan: "Đạt",
    });
    const [showModal, setShowModal] = useState(false);
    const [selectedScoreDetail, setSelectedScoreDetail] = useState(null);
    const [ketQuaData, setKetQuaData] = useState([]);
    const [studentDetailsMap, setStudentDetailsMap] = useState({});

    useEffect(() => {
        if (maCTHP) {
            fetchKetQuaData(maCTHP);
        }
    }, [maCTHP]);
    

    const fetchKetQuaData = async (maCTHP) => {
        try {
            const response = await fetch(`http://localhost:8080/ketqua/${maCTHP}`);
            const data = await response.json();
            console.log("Dữ liệu Kết Quả:", data);
            setKetQuaData(data);

            const detailsPromises = data.map(
                (student) =>
                    axios
                        .get(`http://localhost:8080/chitietlop/${student.masv}`)
                        .then((res) => ({ masv: student.masv, malop: res.data.malop }))
                        .catch(() => ({ masv: student.masv, malop: "N/A" }))
            );

            const malopData = await Promise.all(detailsPromises);
            const malopMap = malopData.reduce((acc, detail) => {
                acc[detail.masv] = detail.malop;
                return acc;
            }, {});

            const studentDetailsPromises = data.map((student) =>
                fetchStudentDetails(student.masv)
            );
            const studentDetails = await Promise.all(studentDetailsPromises);
            const detailsMap = studentDetails.reduce((acc, detail) => {
                acc[detail.masv] = detail;
                acc[detail.masv].malop = malopMap[detail.masv];
                return acc;
            }, {});
            setStudentDetailsMap(detailsMap);
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
        }
    };

    const fetchStudentDetails = async (masv) => {
        try {
            const response = await axios.get(`http://localhost:8080/sinhvien/${masv}`);
            return response.data;
        } catch (error) {
            console.error(`Lỗi khi lấy thông tin sinh viên ${masv}:`, error);
            return { masv, hoten: "N/A", ngaysinh: "N/A", gioitinh: "N/A" };
        }
    };

    // Hàm tính toán maloaidiem dựa trên điểm
    const calculateMaloaiDiem = () => {
        const diemThi = parseFloat(scoreInput.diemketthuc) || 0;
        const diemQuatrinh = parseFloat(scoreInput.diemquatrinh) || 0;

        
         // Tính điểm chuyên cần: nếu chuyencan là "Đạt", cộng thêm 0.1 * diemQuatrinh, ngược lại thì cộng 0
    const chuyencanDiem = scoreInput.chuyencan === "Đạt" ? diemQuatrinh * 0.1 : 0;

    // Tổng điểm
    const diemTong = diemThi * 0.5 + diemQuatrinh * 0.4 + chuyencanDiem;
        console.log(diemTong);
        console.log(scoreInput.chuyencan);
        // Xác định maloaidiem dựa trên điểm
        if (diemTong >= 8.5) {
            return 1;
        } else if (diemTong >= 7) {
            return 2;
        } else if (diemTong >= 5) {
            return 3;
        } else if (diemTong < 5) {
            return 4;
        } else {
            return "";
        }
        
    };

    const handleInputChange = (name, value) => {
        const newScoreInput = { ...scoreInput, [name]: value };
        const maloaidiem = calculateMaloaiDiem(); // Tính toán maloaidiem mỗi khi có thay đổi
        setScoreInput({ ...newScoreInput, maloaidiem });
    };

    const handleUpdateScore = async () => {
        try {
            // Cập nhật maloaidiem
            const maloaidiem = calculateMaloaiDiem();
            const diemquatrinh = parseFloat(scoreInput.diemquatrinh);
            const diemthi = parseFloat(scoreInput.diemketthuc);
            const thoigiancapnhat = new Date().toISOString();
            
            const scoreToUpdate = {
                masv: scoreInput.masv,
                maCTHP: maCTHP,
                diemquatrinh: diemquatrinh,
                diemthi: diemthi,
                thoigiancapnhat: thoigiancapnhat,
                chuyencan: scoreInput.chuyencan,
                maloaidiem: maloaidiem, // Thêm maloaidiem vào object cập nhật
            };

            const response = await axios.put("http://localhost:8080/ketqua/update-score", scoreToUpdate);
            alert(response.data);
            fetchKetQuaData(maCTHP);
        } catch (error) {
            console.error("Lỗi khi cập nhật điểm:", error);
            alert("Cập nhật điểm không thành công.");
        }
    };
    // const handleUpdateScore = async () => {
    //     try {
    //         const diemquatrinh = parseFloat(scoreInput.diemquatrinh);
    //         const diemthi = parseFloat(scoreInput.diemketthuc);
    //         const thoigiancapnhat = new Date().toISOString();
            
    //         const scoreToUpdate = {
    //             masv: scoreInput.masv,
    //             maCTHP: maCTHP,
    //             diemquatrinh: diemquatrinh,
    //             diemthi: diemthi,
    //             thoigiancapnhat: thoigiancapnhat,
    //             chuyencan: scoreInput.chuyencan,
    //         };

    //         const response = await axios.put("http://localhost:8080/ketqua/update-score", scoreToUpdate);
    //         alert(response.data);
    //         fetchKetQuaData(maCTHP);
    //     } catch (error) {
    //         console.error("Lỗi khi cập nhật điểm:", error);
    //         alert("Cập nhật điểm không thành công.");
    //     }
    // };

    const handleRowClick = (student) => {
        setScoreInput({
            masv: student.masv,
            hoten: studentDetailsMap[student.masv]?.hoten || "N/A",
            maloaidiem: student.maloaidiem,
            diemquatrinh: student.diemquatrinh || "",
            diemketthuc: student.diemthi || "",
            chuyencan: student.chuyencan || "Đạt",
        });
    };

    const handleOpenModal = (student) => {
        setSelectedScoreDetail({
            diemquatrinh: student.diemquatrinh,
            diemthi: student.diemthi,
        });
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <h2>Cập nhật điểm sinh viên</h2>
            <form className="score-form" onSubmit={(e) => { e.preventDefault(); handleUpdateScore(); }}>
                <div className="form-group">
                    <label>Mã sinh viên:</label>
                    <input
                        name="masv"
                        value={scoreInput.masv}
                        onChange={(e) => setScoreInput({ ...scoreInput, masv: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Họ tên:</label>
                    <input
                        name="hoten"
                        value={studentDetailsMap[scoreInput.masv]?.hoten || scoreInput.hoten}
                        readOnly
                    />
                </div>

                <div className="form-group">
                    <label>Mã loại điểm:</label>
                    <input
                        name="maloaidiem"
                        value={scoreInput.maloaidiem}
                        readOnly // Trường này nên chỉ đọc
                    />
                </div>

                <div className="form-group">
                    <label>Điểm quá trình:</label>
                    <input
                        type="number"
                        name="diemquatrinh"
                        value={scoreInput.diemquatrinh}
                        onChange={(e) => handleInputChange("diemquatrinh", e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Điểm kết thúc:</label>
                    <input
                        type="number"
                        name="diemketthuc"
                        value={scoreInput.diemketthuc}
                        onChange={(e) => handleInputChange("diemketthuc", e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Chuyên cần:</label>
                    <select
                        name="chuyencan"
                        value={scoreInput.chuyencan}
                        onChange={(e) => handleInputChange("chuyencan", e.target.value)}
                    >
                        <option value="Đạt">Đạt</option>
                        <option value="Không đạt">Không đạt</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">
                    Cập nhật điểm
                </button>
            </form>

            <h2>Bảng kết quả học tập</h2>
            <Button onClick={() => navigate(`/add-student/${maCTHP}`)}>
                Thêm sinh viên
            </Button>

            <table border="1">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Mã SV</th>
                        <th>Họ tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Mã lớp</th>
                        <th>Điểm chữ</th>
                        <th>Điểm số</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    {ketQuaData.map((student, index) => (
                        <tr style={{cursor:"pointer"}} key={student.masv} onClick={() => handleRowClick(student)}>
                            <td className="text-center">{index + 1}</td>
                            <td>{student.masv}</td>
                            <td>{studentDetailsMap[student.masv]?.hoten || "N/A"}</td>
                            <td className="text-center">{studentDetailsMap[student.masv]?.ngaysinh || "N/A"}</td>
                            <td>{studentDetailsMap[student.masv]?.gioitinh || "N/A"}</td>
                            <td>{studentDetailsMap[student.masv]?.malop || "N/A"}</td>
                            <td className="text-center">
                                {(() => {
                                    if (student.maloaidiem == 1) {
                                        return "A";
                                    } else if (student.maloaidiem == 2) {
                                        return "B";
                                    } else if (student.maloaidiem == 3) {
                                        return "C";
                                    } else {
                                        return "D";
                                    }
                                })()}
                            </td>
                            <td className="text-center">{parseFloat(student.diem).toFixed(2)}</td>
                            <td className="text-center">
                                <FaInfoCircle onClick={(e) => { e.stopPropagation(); handleOpenModal(student); }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal hiển thị thông tin chi tiết điểm */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin điểm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedScoreDetail && (
                        <>
                            <p>Điểm quá trình: {selectedScoreDetail.diemquatrinh}</p>
                            <p>Điểm thi: {selectedScoreDetail.diemthi}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default InputScore;

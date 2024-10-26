import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaInfoCircle } from 'react-icons/fa';

const ScoreManagement = () => {
    const [lophocphanData, setLophocphanData] = useState([]);
    
    const navigate = useNavigate(); // Khởi tạo useNavigate

    useEffect(() => {
        const email = localStorage.getItem('email'); // Lấy email từ localStorage

        if (email) {
            // Gửi yêu cầu POST với tiêu đề content-type là JSON
            axios.post('http://localhost:8080/detail-module/by-email', { email }, {
                headers: {
                    'Content-Type': 'application/json',  // Rõ ràng thiết lập content-type là JSON
                }
            })
            .then((response) => {
                // Xử lý phản hồi thành công
                console.log('Dữ liệu đã được lấy:', response.data);
                setLophocphanData(response.data);
            })
            .catch((error) => {
                // Xử lý phản hồi lỗi
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
        }
    }, []);

    return (
        <Container>
            <div>
                <h1>Lớp học phần</h1>

                {lophocphanData.length > 0 ? (
                    <Table>
                        <thead>
                            <tr>
                                <th>Mã CTHP</th>
                                <th>Năm học</th>
                                <th>Học kỳ</th>
                                <th>Mô tả</th>
                                <th>Mã học phần</th>
                                <th>Nhóm học phần</th>
                                <th className='text-center'>Chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lophocphanData.map((lophocphan, index) => (
                                <tr key={index}>
                                    <td>{lophocphan.maCTHP}</td>
                                    <td>{lophocphan.namHoc}</td>
                                    <td>{lophocphan.hocKy}</td>
                                    <td>{lophocphan.moTa}</td>
                                    <td>{lophocphan.maHocPhan}</td>
                                    <td>{lophocphan.nhomHP}</td>
                                    <td className='text-center' style={{cursor:'pointer'}} 
                                        onClick={() => navigate(`/input-score/${lophocphan.maCTHP}`)} // Gọi fetchKetQuaData khi nhấp
                                    >
                                        <FaInfoCircle className="me-2" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p>Không tìm thấy dữ liệu lớp học phần.</p> // Thông báo không tìm thấy dữ liệu
                )}
            </div>
        </Container>
    );
};

export default ScoreManagement;

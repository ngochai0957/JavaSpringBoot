import React, { useEffect, useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddModule = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [course, setCourse] = useState({
        mahocphan: "",
        tenhocphan: "",
        sotinchi: "",
    });

    const [courseDetail, setCourseDetail] = useState({
        maCTHP: "",
        namHoc: "",
        hocKy: 1,
        moTa: "",
        maGV: "",
        nhomHP: "",
    });

    useEffect(() => {
        // Lấy email từ local storage
        const email = localStorage.getItem("email");
        if (email) {
            // Lấy ID giảng viên dựa trên email
            fetch(`http://localhost:8080/giangvien/email/${email}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Phản hồi mạng không hợp lệ.');
                })
                .then((data) => {
                    setCourseDetail((prevState) => ({
                        ...prevState,
                        maGV: data.magv // Giả sử magv là ID được trả về
                    }));
                })
                .catch((error) => console.error('Lỗi khi lấy ID giảng viên:', error));
        }
    }, []);
    
    const handleCourseChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const handleCourseDetailChange = (e) => {
        const { name, value } = e.target;
        setCourseDetail({ ...courseDetail, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Kết hợp dữ liệu khóa học và chi tiết khóa học vào một yêu cầu
        const requestData = { course, courseDetail };

        // Thực hiện yêu cầu POST để lưu dữ liệu
        fetch("http://localhost:8080/hocphan/detail-module", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
        .then((response) => {
            // Ghi log phản hồi thô để gỡ lỗi
            return response.text().then((text) => {
                console.log("Phản hồi thô:", text); // Ghi log phản hồi thô
                navigate("/modules");
                return response.ok ? JSON.parse(text) : Promise.reject(new Error(text));
            });
        })
        .then((data) => console.log("Khóa học đã thêm:", data))
        .catch((error) => console.error("Lỗi:", error));
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
            <Form onSubmit={handleSubmit} className="p-4 bg-light shadow rounded" style={{ maxWidth: '800px', width: '100%' }}>
                <h2 className="text-center mb-4">Thêm Thông Tin Khóa Học</h2>

                {/* Phần Thông Tin Khóa Học */}
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Mã Học Phần</Form.Label>
                            <Form.Control
                                type="text"
                                name="mahocphan"
                                placeholder="Mã Học Phần"
                                value={course.mahocphan}
                                onChange={handleCourseChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Tên Học Phần</Form.Label>
                            <Form.Control
                                type="text"
                                name="tenhocphan"
                                placeholder="Tên Học Phần"
                                value={course.tenhocphan}
                                onChange={handleCourseChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Số Tín Chỉ</Form.Label>
                            <Form.Control
                                type="number"
                                name="sotinchi"
                                placeholder="Số Tín Chỉ"
                                value={course.sotinchi}
                                onChange={handleCourseChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Phần Thông Tin Chi Tiết Khóa Học */}
                <h2 className="text-center mb-4">Thêm Thông Tin Chi Tiết Khóa Học</h2>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Mã Chi Tiết Học Phần</Form.Label>
                            <Form.Control
                                type="text"
                                name="maCTHP"
                                placeholder="Mã Chi Tiết Học Phần"
                                value={courseDetail.maCTHP}
                                onChange={handleCourseDetailChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Năm Học</Form.Label>
                            <Form.Control
                                type="text"
                                name="namHoc"
                                placeholder="Năm Học"
                                value={courseDetail.namHoc}
                                onChange={handleCourseDetailChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Học Kỳ</Form.Label>
                            <Form.Control
                                type="number"
                                name="hocKy"
                                placeholder="Học Kỳ"
                                value={courseDetail.hocKy}
                                onChange={handleCourseDetailChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Mã Giảng Viên</Form.Label>
                            <Form.Control
                                type="text"
                                name="maGV"
                                placeholder="Mã Giảng Viên"
                                value={courseDetail.maGV} // Automatically set
                                onChange={handleCourseDetailChange}
                                required
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Mô Tả</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="moTa"
                                placeholder="Mô Tả"
                                value={courseDetail.moTa}
                                onChange={handleCourseDetailChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Nhóm Học Phần</Form.Label>
                            <Form.Control
                                type="text"
                                name="nhomHP"
                                placeholder="Nhóm Học Phần"
                                value={courseDetail.nhomHP}
                                onChange={handleCourseDetailChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button type="submit" className="w-100" variant="primary">
                    Thêm Khóa Học
                </Button>
            </Form>
        </Container>
    );
};

export default AddModule;

import React, { useEffect, useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const DetailModule = () => {
    const { mahocphan } = useParams(); // Get course code from URL
    const navigate = useNavigate(); // Initialize useNavigate
    const [course, setCourse] = useState({
        mahocphan: "",
        tenhocphan: "",
        sotinchi: "",
    });

    const [courseDetail, setCourseDetail] = useState({
        // maCTHP: "",
        // namHoc: "",
        // hocKy: 1,
        // moTa: "",
        // nhomHP: "",
        // maGV: "",
    });
    

    useEffect(() => {
        const email = localStorage.getItem("email");
        
        if (email) {
            fetch(`http://localhost:8080/giangvien/email/${email}`)
                .then((response) => {
                    if (response.ok) return response.json();
                    throw new Error('Invalid network response.');
                })
                .then((data) => {
                    console.log('Instructor data:', data);
                    setCourseDetail((prevState) => ({
                        ...prevState,
                        maGV: data.magv
                    }));
                })
                .catch((error) => console.error('Error fetching instructor ID:', error));
        }
    
        // Fetch course data
        const fetchCourseData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/hocphan/${mahocphan}`);
                if (!response.ok) throw new Error('Cannot fetch course data');
                const data = await response.json();
                setCourse({
                    mahocphan: data.mahocphan || "",
                    tenhocphan: data.tenhocphan || "",
                    sotinchi: data.sotinchi || "",
                });
                fetchCourseDetailData(); // Fetch course detail after setting course
            } catch (error) {
                console.error('Error fetching course info:', error);
            }
        };
    
        const fetchCourseDetailData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/detail-module/${mahocphan}`);
                if (!response.ok) throw new Error('Cannot fetch course detail data');
                const data = await response.json();
                console.log('Course detail data:', data); // Kiểm tra dữ liệu lấy được
        
                setCourseDetail({
                    maCTHP: data.maCTHP || "",  // Gán giá trị từ dữ liệu lấy được
                    namHoc: data.namHoc || "",
                    hocKy: data.hocKy || 1,
                    moTa: data.moTa || "",
                    nhomHP: data.nhomHP || "",
                    maGV: courseDetail.maGV, // Giữ nguyên maGV đã được lấy từ email
                });
            } catch (error) {
                console.error('Error fetching course detail info:', error);
            }
        };
        
    
        fetchCourseData();
    }, [mahocphan]); // Make sure to include dependencies as needed
    

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

        // Perform data update
        fetch(`http://localhost:8080/hocphan/update-module/${mahocphan}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ course, courseDetail }),
        })
        .then((response) => {
            if (response.ok) {
                navigate("/modules"); // Redirect to the list of modules
            } else {
                throw new Error('Cannot update course');
            }
        })
        .catch((error) => console.error("Error:", error));
    };

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Form onSubmit={handleSubmit} className="p-4 bg-light shadow rounded" style={{width: '100%' }}>
                <h2 className="text-center mb-4">Cập Nhật Thông Tin Học Phần</h2>

                {/* Course Information */}
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Mã Học Phần</Form.Label>
                            <Form.Control
                                type="text"
                                name="mahocphan"
                                value={course.mahocphan}
                                readOnly // Prevent editing
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Tên Học Phần</Form.Label>
                            <Form.Control
                                type="text"
                                name="tenhocphan"
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
                                value={course.sotinchi}
                                onChange={handleCourseChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Detailed Course Information */}
                <h2 className="text-center mb-4">Cập Nhật Thông Tin Chi Tiết Học Phần</h2>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Mã Chi Tiết Học Phần</Form.Label>
                            <Form.Control
                                type="text"
                                name="maCTHP"
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
                                value={courseDetail.maGV} // Ensure a default empty string
                                readOnly // Prevent editing
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
                                value={courseDetail.moTa} // Ensure a default empty string
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
                                value={courseDetail.nhomHP} // Ensure a default empty string
                                onChange={handleCourseDetailChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button type="submit" className="w-100" variant="primary">
                    Cập Nhật Học Phần
                </Button>
            </Form>
        </Container>
    );
};

export default DetailModule;

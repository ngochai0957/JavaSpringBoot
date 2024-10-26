import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const EditStudent = () => {
  const { masv } = useParams(); // Lấy mã sinh viên từ URL
  const navigate = useNavigate(); // Hook để điều hướng
  const [student, setStudent] = useState({
    masv: '',
    hoten: '',
    ngaysinh: '',
    gioitinh: '',
    email: '',
    malop: ''
  });

  const [successMessage, setSuccessMessage] = useState(''); // Trạng thái cho thông báo thành công

  useEffect(() => {
    axios.get(`http://localhost:8080/sinhvien/${masv}`)
      .then(response => {
        console.log(response.data); // Kiểm tra dữ liệu phản hồi
        if (response.data) {
          setStudent({
            ...response.data,
            gioitinh: response.data.gioitinh || ''
          });
        }
      })
      .catch(error => {
        console.error('Lỗi khi lấy dữ liệu sinh viên:', error);
      });
  }, [masv]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent(prevStudent => ({
      ...prevStudent,
      [name]: value || '' // Đảm bảo giá trị không undefined
    }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    // Gọi API để cập nhật sinh viên
    axios.put(`http://localhost:8080/sinhvien/update/${masv}`, student)
      .then(() => {
        // Thiết lập thông báo thành công và điều hướng về trang danh sách sinh viên
        setSuccessMessage('Thông tin sinh viên đã được cập nhật thành công!');
        setTimeout(() => {
          navigate('/students');
        }, 2000); // Chờ 2 giây trước khi điều hướng
      })
      .catch(error => {
        console.error('Lỗi khi cập nhật sinh viên:', error);
      });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
      <div className="w-100" style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4">Cập nhật thông tin sinh viên</h2>
        
        {successMessage && (
          <Alert variant="success" onClose={() => setSuccessMessage('')} dismissible>
            {successMessage}
          </Alert>
        )}

        <Form onSubmit={handleUpdate}>
          <Form.Group controlId="formStudentID" className="mb-3">
            <Form.Label style={{display:"flex", justifyContent:"start"}}>Mã Sinh Viên</Form.Label>
            <Form.Control
              type="text"
              name="masv"
              value={student.masv}
              onChange={handleInputChange}
              placeholder="Nhập mã sinh viên"
              required
              readOnly // Làm cho mã sinh viên chỉ đọc
              disabled
            />
          </Form.Group>

          <Form.Group controlId="formStudentName" className="mb-3">
            <Form.Label style={{display:"flex", justifyContent:"start"}}>Tên Sinh Viên</Form.Label>
            <Form.Control
              type="text"
              name="hoten"
              value={student.hoten}
              onChange={handleInputChange}
              placeholder="Nhập tên sinh viên"
              required
            />
          </Form.Group>

          <Form.Group controlId="formStudentDob" className="mb-3">
            <Form.Label style={{display:"flex", justifyContent:"start"}}>Ngày Sinh</Form.Label>
            <Form.Control
              type="date"
              name="ngaysinh"
              value={student.ngaysinh}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formStudentGender" className="mb-3">
            <Form.Label style={{display:"flex", justifyContent:"start"}}>Giới Tính</Form.Label>
            <Form.Control
              as="select"
              name="gioitinh"
              value={student.gioitinh}
              onChange={handleInputChange}
              required
            >
              <option value="">Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formStudentEmail" className="mb-3">
            <Form.Label style={{display:"flex", justifyContent:"start"}}>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={student.email}
              onChange={handleInputChange}
              placeholder="Nhập email"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mb-2">
            Cập nhật
          </Button>
          <Button variant="secondary" className="w-100" onClick={() => navigate('/students')}>
            Hủy
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default EditStudent;

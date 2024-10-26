import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Spinner } from 'react-bootstrap';

const ProfileGV = () => {
  const [lecturer, setLecturer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLecturerProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8080/giangvien/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Giả sử bạn lưu token trong localStorage
          }
        });
        setLecturer(response.data);
      } catch (err) {
        setError('Lỗi khi lấy thông tin hồ sơ giảng viên');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLecturerProfile();
  }, []);

  if (loading) return <Spinner animation="border" />; // Chờ tải
  if (error) return <div>{error}</div>; // Hiển thị lỗi nếu có

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Hồ Sơ Giảng Viên</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {lecturer.email}<br />
            <strong>Tên:</strong> {lecturer.hoten}<br />
            <strong>Số Điện Thoại:</strong> {lecturer.sdt}<br />
            <strong>Các Khóa Học:</strong> {lecturer.courses.join(', ')}<br />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfileGV;

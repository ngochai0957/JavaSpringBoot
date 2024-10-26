//Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './Home.css'

const Home = () => {
  const [history, setHistory] = useState([]); // Khai báo state để lưu lịch sử đăng nhập

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:8080/history/all'); // Gọi API để lấy lịch sử
        setHistory(response.data); // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Lỗi khi lấy lịch sử:", error);
      }
    };

    fetchHistory();
  }, []); // Chỉ gọi khi component được mount

  return (
    <div className="home-container">
      {/* Phần trên: 3 card thống kê */}
      <div className="stats-container">
        <div className="stat-card bg-primary">
          <h3>Sinh viên</h3>
          <p>100</p>
        </div>
        <div className="stat-card bg-danger">
          <h3>Giảng viên</h3>
          <p>100</p>
        </div>
        <div className="stat-card bg-success">
          <h3>Khóa học</h3>
          <p>100</p>
        </div>
      </div>

      {/* Phần dưới: bảng lịch sử truy cập */}
      <div className="history-container">
        <h3>Lịch sử đăng nhập</h3>
        <Table striped bordered hover className="text-center align-middle">
          <thead>
            <tr>
              <th>Trạng Thái</th>
              <th>Email</th>
              <th>Thời Gian Đăng Nhập</th>
              <th>Thời Gian Đăng Xuất</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td className='text-center'>{index + 1}</td>
                <td className='text-center'>{entry.email}</td>
                <td className='text-center'>{new Date(entry.thoigiandangnhap).toLocaleString()}</td>
                <td className='text-center'>{entry.thoigiandangxuat ? new Date(entry.thoigiandangxuat).toLocaleString() : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home; 









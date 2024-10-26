import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const Lecturers = () => {
  const [lecturers, setLecturers] = useState([]);

  useEffect(() => {
    // Fetch lecturer data from the backend API
    axios.get('http://localhost:8080/giangvien/all')
      .then(response => {
        setLecturers(response.data);
      })
      .catch(error => {
        console.error('Lỗi khi lấy thông tin giảng viên:', error);
      });
  }, []);

  return (
    <div className="lecturers">
      <h2 className="mb-4">Danh sách Giảng viên</h2>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Trạng thái</th>
            <th>Mã Giảng viên</th>
            <th>Tên Giảng viên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Môn học quản lý</th>
          </tr>
        </thead>
        <tbody>
          {lecturers.length > 0 ? (
            lecturers.map((lecturer, index) => (
              <tr key={index}>
                <td className='text-center'>{index + 1}</td>
                <td className='text-center'>{lecturer.magv}</td>
                <td>{lecturer.hoten}</td>
                <td>{lecturer.email}</td>
                <td className='text-center'>{lecturer.sdt}</td>
                <td className='text-center'>{lecturer.hocphan}</td> {/* Giả sử hocphan là một chuỗi, bạn có thể cần định dạng nếu nó là một mảng */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Không tìm thấy giảng viên nào</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Lecturers;

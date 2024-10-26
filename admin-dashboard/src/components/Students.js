import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Pagination } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(10);
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [studentDetails, setStudentDetails] = useState({});

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('http://localhost:8080/sinhvien/all');
      setStudents(response.data);
      
      // Lấy thông tin malop cho từng sinh viên
      const detailsPromises = response.data.map(student => 
        axios.get(`http://localhost:8080/chitietlop/${student.masv}`)
          .then(res => ({ masv: student.masv, malop: res.data.malop }))
          .catch(() => ({ masv: student.masv, malop: 'N/A' })) // Nếu không tìm thấy malop
      );

      // Chờ tất cả các promise hoàn thành
      const details = await Promise.all(detailsPromises);
      const detailsMap = details.reduce((acc, detail) => {
        acc[detail.masv] = detail.malop;
        return acc;
      }, {});
      setStudentDetails(detailsMap);
    };

    fetchStudents();
  }, []);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="students">
      <h2 className="mb-4">Quản lý Sinh Viên</h2>
      <Table striped bordered hover className="text-center align-middle">
        <thead>
          <tr>
            <th>Trạng Thái</th>
            <th>Mã Sinh Viên</th>
            <th>Tên Sinh Viên</th>
            <th>Ngày Sinh</th>
            <th>Giới Tính</th>
            <th>Mã Lớp</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.length > 0 ? (
            currentStudents.map((student, index) => (
              <tr key={student.masv} className="align-middle">
                <td className='text-center'>{index + 1 + indexOfFirstStudent}</td>
                <td className='text-center'>{student.masv}</td>
                <td>{student.hoten}</td>
                <td className='text-center'>{student.ngaysinh}</td>
                <td className='text-center'>{student.gioitinh}</td>
                <td className='text-center'>
                  {studentDetails[student.masv] || 'N/A'} {/* Hiển thị malop */}
                </td>
                <td className="text-center">
                  <Dropdown>
                    <Dropdown.Toggle as="a" className="three-dots" id="dropdown-custom-components">
                      ...
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => navigate(`/edit-student/${student.masv}`)}>Chỉnh Sửa</Dropdown.Item>
                      <Dropdown.Item href="#/details">Xóa</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">Không tìm thấy sinh viên nào</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Điều Khiển Phân Trang */}
      <Pagination className="justify-content-center my-4 pagination-lg">
        <Pagination.First onClick={() => paginate(1)} />
        <Pagination.Prev onClick={() => currentPage > 1 && paginate(currentPage - 1)} />
        {[...Array(Math.ceil(students.length / studentsPerPage))].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => currentPage < Math.ceil(students.length / studentsPerPage) && paginate(currentPage + 1)} />
        <Pagination.Last onClick={() => paginate(Math.ceil(students.length / studentsPerPage))} />
      </Pagination>
    </div>
  );
};

export default Students;

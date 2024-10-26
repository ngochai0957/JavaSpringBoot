import React, { useEffect, useState } from "react";
import { Button, Table, Pagination } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaInfoCircle } from "react-icons/fa";

const Modules = () => {
  const [modules, setModules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modulesPerPage] = useState(5); // Thay đổi theo nhu cầu
  const navigate = useNavigate(); // Khởi tạo useNavigate

  // Fetch modules from the Spring Boot API
  useEffect(() => {
    axios
      .get("http://localhost:8080/hocphan/all")
      .then((response) => {
        setModules(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy thông tin các học phần:", error);
      });
  }, []);

  // Pagination Logic
  const indexOfLastModule = currentPage * modulesPerPage;
  const indexOfFirstModule = indexOfLastModule - modulesPerPage;
  const currentModules = modules.slice(indexOfFirstModule, indexOfLastModule);
  const totalPages = Math.ceil(modules.length / modulesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="modules">
      <h2 className="mb-4">Quản Lý Học Phần</h2>

      <Button
        variant="primary"
        className="mb-3"
        onClick={() => navigate("/add-module")}
      >
        Thêm Học Phần Mới
      </Button>

      <Table striped bordered hover className="text-center align-middle">
        <thead>
          <tr>
            <th>Trạng Thái</th>
            <th>Mã Học Phần</th>
            <th>Tên Học Phần</th>
            <th>Số Tín Chỉ</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {currentModules.length > 0 ? (
            currentModules.map((module, index) => (
              <tr key={module.mahocphan} className="align-middle">
                <td className="text-center">
                  {index + 1 + indexOfFirstModule}
                </td>
                <td className="text-center">{module.mahocphan}</td>
                <td className="text-center">{module.tenhocphan}</td>
                <td className="text-center">{module.sotinchi}</td>
                <td
                  className="text-center" style={{cursor:"pointer"}}
                  onClick={() => navigate(`/detail-module/${module.mahocphan}`)}
                >
                  <FaInfoCircle className="me-2" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Không tìm thấy học phần nào</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <Pagination className="justify-content-center my-4 pagination-lg">
        <Pagination.First onClick={() => paginate(1)} />
        <Pagination.Prev
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        />
        <Pagination.Last onClick={() => paginate(totalPages)} />
      </Pagination>
    </div>
  );
};

export default Modules;

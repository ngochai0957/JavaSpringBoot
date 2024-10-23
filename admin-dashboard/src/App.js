import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login"; // Nhập component Đăng nhập
import Home from "./components/Home"; // Đảm bảo đường dẫn chính xác
import Students from "./components/Students"; // Đảm bảo đường dẫn chính xác
import Lecturers from "./components/Lecturers"; // Đảm bảo đường dẫn chính xác
import Modules from "./components/Modules"; // Đảm bảo đường dẫn chính xác
import ScoreManagement from "./components/ScoreManagement"; // Đảm bảo đường dẫn chính xác
import './App.css';
import axios from 'axios';
import EditStudent from "./components/EditStudent";
//import AddStudent from "./components/AddModule";
import AddModule from "./components/AddModule";
import DetailModule from './components/DetailModule'; // Điều chỉnh nhập dựa trên cấu trúc của bạn
import InputScore from "./components/InputScore";
import AddStudent from "./components/AddStudent";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hàm xử lý đăng nhập
  const handleLogin = (email) => {
    setIsAuthenticated(true);
    localStorage.setItem('email', email);
  };

  const handleLogout = async () => {
    const email = localStorage.getItem('email'); // Lấy email từ localStorage
    try {
        const response = await axios.post('http://localhost:8080/giangvien/logout', null, {
            params: {
                email: email, // Gửi email như một tham số query
            },
        });
        console.log(response.data); // In ra phản hồi từ server
        localStorage.removeItem('email'); // Xóa email từ localStorage khi đăng xuất thành công
        window.location.reload();
    } catch (error) {
        console.error("Lỗi đăng xuất:", error);
        // Xử lý lỗi nếu có
    }
};

  return (
    <Router>
      <Routes>
        {/* Tuyến đường cho Đăng nhập */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* Các tuyến đường được bảo vệ kèm theo sidebar */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <div className="d-flex">
                <nav className="sidebar bg-dark p-3 shadow">
                  <h2 className="text-light">Bảng điều khiển Admin</h2>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/home">
                        <i className="bi bi-house"></i> Trang chủ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/students">
                        <i className="bi bi-person-lines-fill"></i> Sinh viên
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/lecturers">
                        <i className="bi bi-person-check-fill"></i> Giảng viên
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/modules">
                        <i className="bi bi-book"></i> Môn học
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/score-management">
                        <i className="bi bi-file-earmark-spreadsheet"></i> Quản lý điểm
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link text-light btn" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-right"></i> Đăng xuất
                      </button>
                    </li>
                  </ul>
                </nav>
                <div className="content p-4">
                  <Routes>
                    <Route path="/edit-student/:masv" element={<EditStudent />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/lecturers" element={<Lecturers />} />
                    <Route path="/modules" element={<Modules />} />
                    <Route path="/add-module" element={<AddModule />} />
                    <Route path="/score-management" element={<ScoreManagement />} />
                    <Route path="/detail-module/:mahocphan" element={<DetailModule />} />
                    <Route path="/input-score/:maCTHP" element={<InputScore />} />
                    <Route path="/add-student/:maCTHP" element={<AddStudent />} />
                  </Routes>
                </div>
              </div>
            ) : (
              <Login onLogin={handleLogin} /> // Truyền hàm vào Đăng nhập
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

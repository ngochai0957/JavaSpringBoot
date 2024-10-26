package com.example.demo.service;

import com.example.demo.entity.LichSuDangNhap;
import com.example.demo.repository.LichSuDangNhapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class LichSuDangNhapService {

    @Autowired
    private LichSuDangNhapRepository lichSuDangNhapRepository;

    public void logLogin(String email) {
        LichSuDangNhap loginRecord = new LichSuDangNhap();
        loginRecord.setEmail(email);
        loginRecord.setThoigiandangnhap(LocalDateTime.now());
        lichSuDangNhapRepository.save(loginRecord);
    }

    public List<LichSuDangNhap> getAll() {
        return (List<LichSuDangNhap>)  lichSuDangNhapRepository.findAll();
    }
    public void logLogout(String email) {
        LichSuDangNhap loginRecord = lichSuDangNhapRepository.findTopByEmailOrderByThoigiandangnhapDesc(email);
        if (loginRecord != null) {
            loginRecord.setThoigiandangxuat(LocalDateTime.now());
            lichSuDangNhapRepository.save(loginRecord);
            System.out.println("Thời gian đăng xuất đã được cập nhật cho email: " + email);
        } else {
            System.out.println("Không tìm thấy bản ghi đăng nhập cho email: " + email);
        }
    }
}

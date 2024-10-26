package com.example.demo.service;

import com.example.demo.entity.Giangvien;
import com.example.demo.repository.GiangvienRepository;
import com.example.demo.repository.LichSuDangNhapRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GiangvienService {

    private static final Logger logger = LoggerFactory.getLogger(GiangvienService.class);


    @Autowired
    private GiangvienRepository giangvienRepository;

    @Autowired
    private LichSuDangNhapRepository lichSuDangNhapRepository;

    public boolean login(String email, String matkhau) {
        Giangvien giangvien = giangvienRepository.findByEmail(email);
        if (giangvien != null) {

            // So sánh mật khẩu trực tiếp
            return matkhau.equals(giangvien.getMatkhau());
        }
        return false;
    }
    public Giangvien getGiangvien(String email) {
        return giangvienRepository.findByEmail(email);
    }

    public List<Giangvien> getGiangvien() {
        return (List<Giangvien>) giangvienRepository.findAll();
    }

}



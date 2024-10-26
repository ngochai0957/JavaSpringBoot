package com.example.demo.service;

import com.example.demo.DTO.StudentWithClassDTO;
import com.example.demo.entity.Chitietlop;
import com.example.demo.entity.Chitietlophoc;
import com.example.demo.entity.Sinhvien;
import com.example.demo.repository.ChitietlopRepository;
import com.example.demo.repository.ChitietlophocRepository;
import com.example.demo.repository.KetquaRepository;
import com.example.demo.repository.SinhvienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SinhvienService {

    @Autowired
    private SinhvienRepository sinhvienRepository;



    // Lấy tất cả sinh viên
    public List<Sinhvien> getAllSinhviens() {
        return (List<Sinhvien>) sinhvienRepository.findAll();
    }

    // Thêm sinh viên
    public Sinhvien addSinhvien(Sinhvien sinhvien) {
        return sinhvienRepository.save(sinhvien);
    }

    // Sửa sinh viên
    public Optional<Sinhvien> updateSinhvien(String masv, Sinhvien sinhvienDetails) {
        Optional<Sinhvien> optionalSinhvien = sinhvienRepository.findById(masv);
        if (optionalSinhvien.isPresent()) {
            Sinhvien existingSinhvien = optionalSinhvien.get();
            existingSinhvien.setHoten(sinhvienDetails.getHoten());
            existingSinhvien.setNgaysinh(sinhvienDetails.getNgaysinh());
            existingSinhvien.setGioitinh(sinhvienDetails.getGioitinh());
            existingSinhvien.setEmail(sinhvienDetails.getEmail());
            sinhvienRepository.save(existingSinhvien);
            return Optional.of(existingSinhvien);
        } else {
            return Optional.empty();
        }
    }
}

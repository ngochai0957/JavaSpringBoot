package com.example.demo.controller;

import com.example.demo.DTO.StudentWithClassDTO;
import com.example.demo.entity.Chitietlop;
import com.example.demo.entity.Ketqua;
import com.example.demo.entity.Sinhvien;
import com.example.demo.repository.ChitietlopRepository;
import com.example.demo.repository.SinhvienRepository;
import com.example.demo.service.ChitietlopService;
import com.example.demo.service.ChitietlophocService;
import com.example.demo.service.KetquaService;
import com.example.demo.service.SinhvienService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/sinhvien")
public class SinhvienController {

    @Autowired
    private  SinhvienService sinhvienService;


    @Autowired
    private SinhvienRepository sinhvienRepository;

    public SinhvienController(SinhvienService sinhvienService) {
        this.sinhvienService = sinhvienService;
    }



    // Lấy tất cả sinh viên
    @GetMapping(path = "/all")
    public List<Sinhvien> getSinhvien() {
        return sinhvienService.getAllSinhviens();
    }
    @GetMapping(path = "/{masv}")
    public Optional<Sinhvien> getSinhvienById(@PathVariable("masv") String masv) {
        return sinhvienRepository.findById(masv);
    }



    // Thêm sinh viên
    @PostMapping(path = "/add")
    public Sinhvien addSinhvien(@RequestBody Sinhvien sinhvien) {
        return sinhvienService.addSinhvien(sinhvien);
    }

    // Sửa sinh viên
    @PutMapping(path = "/update/{masv}")
    public ResponseEntity<Sinhvien> updateSinhvien(@PathVariable String masv, @RequestBody Sinhvien sinhvienDetails) {
        Optional<Sinhvien> updatedSinhvien = sinhvienService.updateSinhvien(masv, sinhvienDetails);
        return updatedSinhvien.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }






}

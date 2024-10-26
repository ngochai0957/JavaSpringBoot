package com.example.demo.controller;

import com.example.demo.DTO.GiangvienDTO;
import com.example.demo.entity.Chitietlophoc;
import com.example.demo.entity.Giangvien;
import com.example.demo.entity.LichSuDangNhap;
import com.example.demo.entity.Sinhvien;
import com.example.demo.repository.ChitietlophocRepository;
import com.example.demo.repository.GiangvienRepository;
import com.example.demo.service.GiangvienService;
import com.example.demo.service.HocPhanService;
import com.example.demo.service.LichSuDangNhapService;
import com.example.demo.service.SinhvienService;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/giangvien")
public class GiangvienController {
    @Autowired
    private GiangvienService giangvienService;

    @Autowired
    private LichSuDangNhapService lichSuDangNhapService;
    private static final Logger logger = LoggerFactory.getLogger(GiangvienService.class);


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody GiangvienDTO giangvienDTO) {
        boolean isAuthenticated = giangvienService.login(giangvienDTO.getEmail(), giangvienDTO.getPassword());
        if (isAuthenticated) {
            lichSuDangNhapService.logLogin(giangvienDTO.getEmail());
            return ResponseEntity.ok().body("Login successful");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }

    @PostMapping("/logout")
    public String logout(@RequestParam String email) {
        // Log the logout event
        lichSuDangNhapService.logLogout(email);

        return "Logged out successfully";
    }

    @GetMapping(path = "/all")
    public List<Giangvien> getAllGiangvien() {
        return giangvienService.getGiangvien();
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<Giangvien> getGiangVienByEmail(@PathVariable String email) {
        Giangvien giangVien = giangvienService.getGiangvien(email);
        if (giangVien != null) {
            return ResponseEntity.ok(giangVien);
        } else {
            return ResponseEntity.notFound().build();
        }
    }




}


package com.example.demo.controller;

import com.example.demo.entity.LichSuDangNhap;
import com.example.demo.entity.Sinhvien;
import com.example.demo.service.LichSuDangNhapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/history")
public class AuthController {

    @Autowired
    private LichSuDangNhapService lichSuDangNhapService;

//    @PostMapping("/login")
//    public String login(@RequestParam String email) {
//        // Handle user authentication here (omitted for brevity)
//
//        // Log the login event
//        lichSuDangNhapService.logLogin(email);
//
//        return "Logged in successfully";
//    }

    @GetMapping(path = "/all")
    public List<LichSuDangNhap> getSinhvien() {
        return lichSuDangNhapService.getAll();
    }
}


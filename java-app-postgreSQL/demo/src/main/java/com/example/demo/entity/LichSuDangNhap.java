package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="lichsudangnhap")
public class LichSuDangNhap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private LocalDateTime thoigiandangnhap;

    private LocalDateTime thoigiandangxuat;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getThoigiandangnhap() {
        return thoigiandangnhap;
    }

    public void setThoigiandangnhap(LocalDateTime thoigiandangnhap) {
        this.thoigiandangnhap = thoigiandangnhap;
    }

    public LocalDateTime getThoigiandangxuat() {
        return thoigiandangxuat;
    }

    public void setThoigiandangxuat(LocalDateTime thoigiandangxuat) {
        this.thoigiandangxuat = thoigiandangxuat;
    }

}


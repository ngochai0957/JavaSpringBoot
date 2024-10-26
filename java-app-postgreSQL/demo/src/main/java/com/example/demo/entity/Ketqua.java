package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@Entity
public class Ketqua {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Hoặc một chiến lược khác phù hợp
    private Long maketqua; // Đảm bảo có thuộc tính ID
    private String macthp;
    private String masv;
    private int maloaidiem;
    private Double diemquatrinh;
    private Double diemthi;
    private LocalDateTime Thoigiantao;
    private LocalDateTime Thoigiancapnhat;
    public Double getDiemquatrinh() {
        return diemquatrinh;
    }

    public Long getId() {
        return maketqua;
    }

    public void setId(Long id) {
        this.maketqua = id;
    }

    public LocalDateTime getThoigiantao() {
        return Thoigiantao;
    }

    public void setThoigiantao(LocalDateTime thoigiantao) {
        Thoigiantao = thoigiantao;
    }

    public LocalDateTime getThoigiancapnhat() {
        return Thoigiancapnhat;
    }

    public void setThoigiancapnhat(LocalDateTime thoigiancapnhat) {
        Thoigiancapnhat = thoigiancapnhat;
    }

    public void setDiemquatrinh(Double diemquatrinh) {
        this.diemquatrinh = diemquatrinh;
    }

    public Double getDiemthi() {
        return diemthi;
    }

    public void setDiemthi(Double diemthi) {
        this.diemthi = diemthi;
    }

    private Double diem;



    public String getMacthp() {
        return macthp;
    }

    public void setMacthp(String macthp) {
        this.macthp = macthp;
    }

    public String getMasv() {
        return masv;
    }

    public void setMasv(String masv) {
        this.masv = masv;
    }

    public int getMaloaidiem() {
        return maloaidiem;
    }

    public void setMaloaidiem(int maloaidiem) {
        this.maloaidiem = maloaidiem;
    }

    public Double getDiem() {
        return diem;
    }

    public void setDiem(Double diem) {
        this.diem = diem;
    }
}

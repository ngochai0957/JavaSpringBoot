package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.*;
import java.sql.Timestamp;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.Locale;

@Entity
@Table(name = "lophocphan")  // Make sure this matches the actual table name in your database
public class Lophocphan {

    @Id
    @Column(name = "macthp", nullable = false, length = 255)
    private String maCTHP;

    @Column(name = "namhoc", length = 255)
    private String namHoc;

    @Column(name = "hocky")
    private Integer hocKy;

    @Column(name = "mota")
    private String moTa;

    @Column(name = "thoigiantao", columnDefinition = "timestamp default current_timestamp")
    private LocalDateTime thoiGianTao;

    @Column(name = "thoigiancapnhat", columnDefinition = "timestamp default current_timestamp")
    private LocalDateTime thoiGianCapNhat;

    @Column(name = "mahocphan", length = 255)
    private String maHocPhan;

    @Column(name = "magv", length = 255)
    private String maGV;

    @Column(name = "nhomhp", length = 255)
    private String nhomHP;

    // Relationships
    @ManyToOne
    @JoinColumn(name = "mahocphan", insertable = false, updatable = false)
    private HocPhan hocPhan;

    @ManyToOne
    @JoinColumn(name = "magv", insertable = false, updatable = false)
    private Giangvien magv;

    public Giangvien getMagv() {
        return magv;
    }

    public void setMagv(Giangvien magv) {
        this.magv = magv;
    }

    // Getters and Setters
    public String getMaCTHP() {
        return maCTHP;
    }

    public void setMaCTHP(String maCTHP) {
        this.maCTHP = maCTHP;
    }

    public String getNamHoc() {
        return namHoc;
    }

    public void setNamHoc(String namHoc) {
        this.namHoc = namHoc;
    }

    public Integer getHocKy() {
        return hocKy;
    }

    public void setHocKy(Integer hocKy) {
        this.hocKy = hocKy;
    }

    public String getMoTa() {
        return moTa;
    }

    public void setMoTa(String moTa) {
        this.moTa = moTa;
    }

    public LocalDateTime getThoiGianTao() {
        return thoiGianTao;
    }

    public void setThoiGianTao(LocalDateTime thoiGianTao) {
        this.thoiGianTao = thoiGianTao;
    }

    public LocalDateTime getThoiGianCapNhat() {
        return thoiGianCapNhat;
    }

    public void setThoiGianCapNhat(LocalDateTime thoiGianCapNhat) {
        this.thoiGianCapNhat = thoiGianCapNhat;
    }

    public String getMaHocPhan() {
        return maHocPhan;
    }

    public void setMaHocPhan(String maHocPhan) {
        this.maHocPhan = maHocPhan;
    }

    public String getMaGV() {
        return maGV;
    }

    public void setMaGV(String maGV) {
        this.maGV = maGV;
    }

    public String getNhomHP() {
        return nhomHP;
    }

    public void setNhomHP(String nhomHP) {
        this.nhomHP = nhomHP;
    }
}
package com.example.demo.DTO;

public class ScoreUpdateRequest {
    private String masv;
    private String maCTHP;
    private double diemquatrinh;
    private double diemthi;
    private String chuyencan;

    public String getChuyencan() {
        return chuyencan;
    }

    public void setChuyencan(String chuyencan) {
        this.chuyencan = chuyencan;
    }

    public double getDiemthi() {
        return diemthi;
    }

    public void setDiemthi(double diemthi) {
        this.diemthi = diemthi;
    }

    public double getDiemquatrinh() {
        return diemquatrinh;
    }

    public void setDiemquatrinh(double diemquatrinh) {
        this.diemquatrinh = diemquatrinh;
    }

    public String getMaCTHP() {
        return maCTHP;
    }

    public void setMaCTHP(String maCTHP) {
        this.maCTHP = maCTHP;
    }

    public String getMasv() {
        return masv;
    }

    public void setMasv(String masv) {
        this.masv = masv;
    }
}

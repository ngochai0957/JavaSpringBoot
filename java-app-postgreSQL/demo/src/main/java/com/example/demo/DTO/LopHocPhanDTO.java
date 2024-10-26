package com.example.demo.DTO;

public class LopHocPhanDTO {

    private String maCTHP;
    private String maHocPhan;
    private String namHoc;
    private Integer hocKy;
    private String moTa;
    private String maGV; // Lecturer ID
    private String nhomHP;

    public String getMaCTHP() {
        return maCTHP;
    }

    public void setMaCTHP(String maCTHP) {
        this.maCTHP = maCTHP;
    }

    public String getMaHocPhan() {
        return maHocPhan;
    }

    public void setMaHocPhan(String maHocPhan) {
        this.maHocPhan = maHocPhan;
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

package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class Diem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int maloaidiem;
    private String tenloaidiem;
    private String chitiet;

    public int getMaloaidiem() {
        return maloaidiem;
    }

    public void setMaloaidiem(int maloaidiem) {
        this.maloaidiem = maloaidiem;
    }

    public String getTenloaidiem() {
        return tenloaidiem;
    }

    public void setTenloaidiem(String tenloaidiem) {
        this.tenloaidiem = tenloaidiem;
    }

    public String getChitiet() {
        return chitiet;
    }

    public void setChitiet(String chitiet) {
        this.chitiet = chitiet;
    }
}

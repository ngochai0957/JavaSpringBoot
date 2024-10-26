package com.example.demo.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "hocphan")
public class HocPhan {

    @Id

    private String mahocphan;  // Mã học phần


    public String getMahocphan() {
        return mahocphan;
    }

    public void setMahocphan(String mahocphan) {
        this.mahocphan = mahocphan;
    }

    public String getTenhocphan() {
        return tenhocphan;
    }

    public void setTenhocphan(String tenhocphan) {
        this.tenhocphan = tenhocphan;
    }

    private String tenhocphan;  // Tên học phần

    public int getSotinchi() {
        return sotinchi;
    }

    public void setSotinchi(int sotinchi) {
        this.sotinchi = sotinchi;
    }

    private int sotinchi;


}

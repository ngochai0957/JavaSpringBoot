package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "chitietlop")
public class Chitietlop {
    @Id
    private String machitiet;


    private String  masv;

    public String getMasv() {
        return masv;
    }

    public void setMasv(String masv) {
        this.masv = masv;
    }

    private String malop;

    // Getters and Setters
    public String getMachitiet() {
        return machitiet;
    }

    public void setMachitiet(String machitiet) {
        this.machitiet = machitiet;
    }



    public String getMalop() {
        return malop;
    }

    public void setMalop(String malop) {
        this.malop = malop;
    }
}

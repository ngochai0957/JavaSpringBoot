package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Chitietlophoc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mactlh;
    private String macthp;
    private String masv;

    public int getMactlh() {
        return mactlh;
    }

    public void setMactlh(int mactlh) {
        this.mactlh = mactlh;
    }

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
}

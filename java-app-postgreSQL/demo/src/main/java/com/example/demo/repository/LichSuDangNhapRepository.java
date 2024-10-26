package com.example.demo.repository;

import com.example.demo.entity.LichSuDangNhap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LichSuDangNhapRepository extends CrudRepository<LichSuDangNhap, Long> {

    // Find the latest login record for a given email
    LichSuDangNhap findTopByEmailOrderByThoigiandangnhapDesc(String email);
}
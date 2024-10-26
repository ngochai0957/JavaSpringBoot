package com.example.demo.repository;

import com.example.demo.entity.Giangvien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GiangvienRepository extends CrudRepository<Giangvien, String> {
    Giangvien findByEmail(String email);
}
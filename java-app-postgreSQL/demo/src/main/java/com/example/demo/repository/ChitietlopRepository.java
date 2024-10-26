package com.example.demo.repository;

import com.example.demo.entity.Chitietlop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChitietlopRepository extends JpaRepository<Chitietlop, String> {
    Optional<Chitietlop> findByMasv(String masv);
}

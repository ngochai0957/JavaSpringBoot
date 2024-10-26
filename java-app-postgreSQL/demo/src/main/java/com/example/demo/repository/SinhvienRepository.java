package com.example.demo.repository;

import com.example.demo.entity.Giangvien;
import com.example.demo.entity.Sinhvien;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface SinhvienRepository extends CrudRepository<Sinhvien, String> {

}

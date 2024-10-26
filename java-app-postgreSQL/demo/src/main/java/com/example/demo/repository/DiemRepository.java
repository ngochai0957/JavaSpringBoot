package com.example.demo.repository;

import com.example.demo.entity.Diem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiemRepository extends CrudRepository<Diem, Long> {
}

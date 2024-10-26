package com.example.demo.repository;

import com.example.demo.entity.HocPhan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HocPhanRepository extends CrudRepository<HocPhan, String> {
}

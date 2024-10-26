package com.example.demo.repository;

import com.example.demo.entity.Chitietlophoc;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChitietlophocRepository extends CrudRepository<Chitietlophoc, String> {
    @Query("SELECT c.masv FROM Chitietlophoc c WHERE c.macthp = :macthp")
    List<Chitietlophoc> findByMacthp(@Param("macthp") String macthp);


}

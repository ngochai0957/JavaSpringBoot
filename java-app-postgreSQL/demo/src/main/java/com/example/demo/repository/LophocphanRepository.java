package com.example.demo.repository;

import com.example.demo.entity.Chitietlophoc;
import com.example.demo.entity.Lop;
import com.example.demo.entity.Lophocphan;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface LophocphanRepository extends CrudRepository<Lophocphan, Long> {
    @Query("SELECT l.maCTHP FROM Lophocphan l WHERE l.maHocPhan = :mahp")
    String findMacthpByMahp(@Param("mahp") String mahp);


    List<Lophocphan> findByMaGV(String maGV);
    Lophocphan findByMaHocPhan(String mahocphan);
}

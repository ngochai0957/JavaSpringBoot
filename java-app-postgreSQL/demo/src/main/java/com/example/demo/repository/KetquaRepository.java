package com.example.demo.repository;

import com.example.demo.entity.Ketqua;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface KetquaRepository extends CrudRepository<Ketqua, String> {

    List<Ketqua> findByMacthp(String macthp);

    // Thêm phương thức tìm kiếm theo masv và macthp
    Optional<Ketqua> findByMasvAndMacthp(String masv, String macthp);
    @Modifying
    @Query("UPDATE Ketqua k SET k.diemquatrinh = :diemquatrinh, k.diemthi = :diemthi, k.Thoigiancapnhat = :thoigiancapnhat WHERE k.masv = :masv AND k.macthp = :maCTHP")
    void updateScore(@Param("masv") String masv, @Param("maCTHP") String maCTHP,
                     @Param("diemquatrinh") double diemquatrinh, @Param("diemthi") double diemthi,
                     @Param("thoigiancapnhat") LocalDateTime thoigiancapnhat);
}

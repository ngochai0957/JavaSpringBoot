package com.example.demo.service;

import com.example.demo.entity.Giangvien;
import com.example.demo.entity.Lophocphan;
import com.example.demo.repository.GiangvienRepository;
import com.example.demo.repository.LophocphanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LophocphanService {
    @Autowired
    private LophocphanRepository lophocphanRepository;

    @Autowired
    private GiangvienRepository giangvienRepository;

    public Lophocphan addLophocphan(Lophocphan lophocphan) {
        return lophocphanRepository.save(lophocphan);
    }
    public String getMacthpByMahp(String mahp) {
        return lophocphanRepository.findMacthpByMahp(mahp);
    }
    public List<Lophocphan> getByEmailGV(String email) {
        // Fetch Giangvien by email
        Giangvien giangvien = giangvienRepository.findByEmail(email);

        // Check if Giangvien exists
        if (giangvien != null) {
            // Get maGV from Giangvien
            String maGV = giangvien.getMagv();

            // Fetch Lophocphan records based on maGV
            return lophocphanRepository.findByMaGV(maGV);
        }

        // If no Giangvien found, return an empty list
        return new ArrayList<>();
    }
    public Lophocphan getLophocphanByMahp(String mahp) {
        return lophocphanRepository.findByMaHocPhan(mahp); // Tìm kiếm chi tiết học phần theo mã học phần
    }


    public Lophocphan updateLophocphan(Lophocphan lopHocPhan) {
        return lophocphanRepository.save(lopHocPhan);
    }


}

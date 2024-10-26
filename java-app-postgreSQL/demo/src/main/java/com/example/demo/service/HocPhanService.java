package com.example.demo.service;

import com.example.demo.entity.HocPhan;
import com.example.demo.entity.Lop;
import com.example.demo.entity.Lophocphan;
import com.example.demo.entity.Sinhvien;
import com.example.demo.repository.HocPhanRepository;
import com.example.demo.repository.LophocphanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HocPhanService {

    @Autowired
    private HocPhanRepository hocPhanRepository;

    @Autowired
    private LophocphanRepository lophocphanRepository;

    public List<HocPhan> getAllHocPhan() {
        return (List<HocPhan>) hocPhanRepository.findAll();
    }
    public HocPhan addHocphan(HocPhan hocphan) {
        return hocPhanRepository.save(hocphan);
    }

    public String getMacthpByMahp(String mahp) {
        return lophocphanRepository.findMacthpByMahp(mahp);
    }
    public HocPhan findByMahocphan(String mahocphan) {
        return hocPhanRepository.findById(mahocphan).orElse(null);
    }

    // Lấy thông tin học phần theo mã học phần
    public Optional<HocPhan> getCourseByMahocphan(String mahocphan) {
        return hocPhanRepository.findById(mahocphan);
    }

    // Cập nhật thông tin học phần
    public HocPhan updateHocPhan(HocPhan course) {

        return hocPhanRepository.save(course);
    }

    // Cập nhật thông tin chi tiết học phần
    public Lophocphan updateCourseDetail(String maCTHP, Lophocphan courseDetail) {
        courseDetail.setMaCTHP(maCTHP);
        return lophocphanRepository.save(courseDetail);
    }




}

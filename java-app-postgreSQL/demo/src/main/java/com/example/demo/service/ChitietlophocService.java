package com.example.demo.service;

import com.example.demo.entity.Chitietlophoc;
import com.example.demo.entity.Giangvien;
import com.example.demo.entity.Sinhvien;
import com.example.demo.repository.ChitietlophocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChitietlophocService {
    @Autowired
    private ChitietlophocRepository chitietlophocRepository;

    public List<Chitietlophoc> getStudentsByMacthp(String macthp) {
        return chitietlophocRepository.findByMacthp(macthp);
    }
    public Optional<Chitietlophoc> getSVbyID(String mahocphan) {
        return chitietlophocRepository.findById(mahocphan);
    }
}

package com.example.demo.service;

import com.example.demo.DTO.ScoreUpdateRequest;
import com.example.demo.DTO.SelectedStudentsDTO;
import com.example.demo.DTO.StudentWithClassDTO;
import com.example.demo.entity.*;
import com.example.demo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class KetquaService {

    @Autowired
    private SinhvienRepository sinhvienRepository;

    @Autowired
    private ChitietlophocRepository chitietlophocRepository;

    @Autowired
    private DiemRepository diemRepository;

    @Autowired
    private KetquaRepository ketquaRepository;

    public List<Ketqua> getAllKetqua(){
        List<Ketqua> ketquaList = new ArrayList<>();
        ketquaRepository.findAll().forEach(ketquaList::add);
        return ketquaList;
    }
    public void addScore(Ketqua ketqua) {
        ketquaRepository.save(ketqua);
    }

    public Optional<Diem> getKetquaById(Long maloai) {
        return diemRepository.findById(maloai); // Tìm kiếm theo maloai
    }
    public List<Ketqua> getKetquaByMacthp(String macthp) {
        return ketquaRepository.findByMacthp(macthp);
    }
    public void addStudents(SelectedStudentsDTO dto) {
        // Check if selected student IDs exist
        List<String> selectedStudentIds = dto.getSelectedStudentIds();
        if (selectedStudentIds == null || selectedStudentIds.isEmpty()) {
            throw new IllegalArgumentException("Selected student IDs cannot be null or empty");
        }

        // Get current time for the creation date
        LocalDateTime now = LocalDateTime.now();

        // Iterate through selected student IDs and add entries to Ketqua and Chitietlophoc tables
        for (String masv : selectedStudentIds) {
            // Add entry to Ketqua table
            Ketqua ketqua = new Ketqua();
            ketqua.setMasv(masv);
            ketqua.setMacthp(dto.getMacthp());
            ketqua.setThoigiantao(now); // Setting the creation time
            ketqua.setMaloaidiem(1);
            ketquaRepository.save(ketqua);

            // Add entry to Chitietlophoc table
            Chitietlophoc chitietlophoc = new Chitietlophoc();
            chitietlophoc.setMasv(masv);
            chitietlophoc.setMacthp(dto.getMacthp());
            chitietlophocRepository.save(chitietlophoc);
        }
    }

    public void updateScore(ScoreUpdateRequest scoreRequest) throws Exception {
        // Tìm kiếm bản ghi cần cập nhật
        Optional<Ketqua> ketQuaOptional = ketquaRepository.findByMasvAndMacthp(scoreRequest.getMasv(), scoreRequest.getMaCTHP());

        if (ketQuaOptional.isEmpty()) {
            throw new Exception("Không tìm thấy bản ghi để cập nhật");
        }

        Ketqua ketQua = ketQuaOptional.get(); // Lấy bản ghi từ Optional

        // Tính toán điểm
        double diemquatrinh = scoreRequest.getDiemquatrinh();
        double diemthi = scoreRequest.getDiemthi();
        double diemTong = (diemthi * 0.5 + diemquatrinh * 0.4);
        double diemchuyencan = diemquatrinh * 0.1;
        double diemTong2 = 0;
        if ("Đạt".equals(scoreRequest.getChuyencan())) {
            diemTong2 = diemTong + diemchuyencan  ; // Cộng 10% nếu chuyên cần đạt
        }else{
            diemTong2 = diemTong;
        }
        if(diemTong2 >= 8.5){
            ketQua.setMaloaidiem(1);
        }else if(diemTong2 >= 7){
            ketQua.setMaloaidiem(2);
        }else if(diemTong2 >= 5){
            ketQua.setMaloaidiem(3);
        }else {
            ketQua.setMaloaidiem(4);
        }

        // Cập nhật các trường cần thiết
        ketQua.setDiemquatrinh(diemquatrinh);
        ketQua.setDiemthi(diemthi);
        ketQua.setDiem(diemTong2); // Cập nhật điểm tổng
        ketQua.setThoigiancapnhat(LocalDateTime.now()); // Cập nhật thời gian hiện tại

        // Lưu thay đổi
        ketquaRepository.save(ketQua);
    }






}


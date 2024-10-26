package com.example.demo.controller;

import com.example.demo.DTO.ScoreUpdateRequest;
import com.example.demo.DTO.SelectedStudentsDTO;
import com.example.demo.DTO.StudentWithClassDTO;
import com.example.demo.entity.*;
import com.example.demo.repository.KetquaRepository;
import com.example.demo.service.KetquaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/ketqua")
public class KetquaController {
    @Autowired
    private KetquaService ketquaService;

    @Autowired
    private KetquaRepository ketquaRepository;

    @GetMapping("/all")
    public List<Ketqua> getAllKetqua(){
        return ketquaService.getAllKetqua();
    }

    @GetMapping("/{macthp}")
    public ResponseEntity<List<Ketqua>> getKetqua(@PathVariable String macthp) {
        List<Ketqua> ketquaList = ketquaService.getKetquaByMacthp(macthp);
        return ResponseEntity.ok(ketquaList);
    }

    @PostMapping("/add-students")
    public ResponseEntity<?> addStudentsToKetquaAndChitietlophoc(@RequestBody SelectedStudentsDTO dto) {
        ketquaService.addStudents(dto);
        return ResponseEntity.ok("Students added successfully");
    }
    @GetMapping(path = "/diem/{maloai}")
    public Optional<Diem> getStudentWithClass(@PathVariable Long maloai) {
        return ketquaService.getKetquaById(maloai);
    }
    @PostMapping("/add-score")
    public ResponseEntity<?> addScore(@RequestBody Ketqua ketqua) {
        ketquaService.addScore(ketqua);
        return ResponseEntity.ok("Điểm đã được thêm thành công");
    }
    @PutMapping("/update-score")
    public ResponseEntity<String> updateScore(@RequestBody ScoreUpdateRequest scoreRequest) {
        try {
            ketquaService.updateScore(scoreRequest);
            return ResponseEntity.ok("Cập nhật điểm thành công");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Có lỗi xảy ra khi cập nhật điểm: " + e.getMessage());
        }
    }


}

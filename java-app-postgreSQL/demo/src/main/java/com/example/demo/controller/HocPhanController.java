package com.example.demo.controller;

import com.example.demo.DTO.AddCourseRequest;
import com.example.demo.DTO.LopHocPhanDTO;
import com.example.demo.entity.Chitietlophoc;
import com.example.demo.entity.HocPhan;
import com.example.demo.entity.Lophocphan;
import com.example.demo.entity.Sinhvien;
import com.example.demo.repository.HocPhanRepository;
import com.example.demo.service.HocPhanService;
import com.example.demo.service.LophocphanService;
import com.example.demo.service.SinhvienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")  // For React Frontend
@RestController
@RequestMapping("/hocphan")
public class HocPhanController {

    @Autowired
    private HocPhanService hocPhanService;

    @Autowired
    private LophocphanService lophocphanService;
    @Autowired
    private HocPhanRepository hocPhanRepository;


    @GetMapping("{mahp}")
    public Optional<HocPhan> getHocPhan(@PathVariable String mahp) {
        return hocPhanRepository.findById(mahp);
    }
    @GetMapping("/all")
    public ResponseEntity<List<HocPhan>> getAllHocPhan() {
        List<HocPhan> hocPhans = hocPhanService.getAllHocPhan();
        return ResponseEntity.ok(hocPhans);
    }
    @PostMapping(path = "add-module")
    public HocPhan addHocphan(@RequestBody HocPhan hocphan) {
        return hocPhanService.addHocphan(hocphan);
    }

    @PostMapping("/detail-module")
    public ResponseEntity<String> addCourseAndDetail(@RequestBody AddCourseRequest request) {
        try {
            // Create and save HocPhan
            HocPhan hocPhan = new HocPhan();
            hocPhan.setMahocphan(request.getCourse().getMahocphan());
            hocPhan.setTenhocphan(request.getCourse().getTenhocphan());
            hocPhan.setSotinchi(request.getCourse().getSotinchi());
            hocPhanService.addHocphan(hocPhan);

            // Create and save LopHocPhan
            Lophocphan lopHocPhan = new Lophocphan();
            lopHocPhan.setMaCTHP(request.getCourseDetail().getMaCTHP());
            lopHocPhan.setNamHoc(request.getCourseDetail().getNamHoc());
            lopHocPhan.setHocKy(request.getCourseDetail().getHocKy());
            lopHocPhan.setMoTa(request.getCourseDetail().getMoTa());
            lopHocPhan.setMaGV(request.getCourseDetail().getMaGV()); // Set the lecturer ID
            lopHocPhan.setNhomHP(request.getCourseDetail().getNhomHP());
            lopHocPhan.setMaHocPhan(hocPhan.getMahocphan()); // Establish relationship between Lophocphan and HocPhan

            // Set creation and update times
            LocalDateTime now = LocalDateTime.now();
            lopHocPhan.setThoiGianTao(now);
            lopHocPhan.setThoiGianCapNhat(now); // Initially, both createdAt and updatedAt can be set to the same time

            lophocphanService.addLophocphan(lopHocPhan); // Save Lophocphan

            return ResponseEntity.ok("Course and Details Added Successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while adding course: " + e.getMessage());
        }
    }



    @PutMapping("/update-module/{mahocphan}")
    public ResponseEntity<String> updateHocPhan(@PathVariable String mahocphan, @RequestBody AddCourseRequest request) {
        try {
            // Find the existing HocPhan
            HocPhan existingHocPhan = hocPhanService.findByMahocphan(mahocphan);
            if (existingHocPhan == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Course not found");
            }

            // Update existing HocPhan details
            existingHocPhan.setTenhocphan(request.getCourse().getTenhocphan());
            existingHocPhan.setSotinchi(request.getCourse().getSotinchi());
            hocPhanService.updateHocPhan(existingHocPhan);

            // Update existing LopHocPhan if necessary
            Lophocphan existingLopHocPhan = lophocphanService.getLophocphanByMahp(mahocphan);
            if (existingLopHocPhan != null) {
                existingLopHocPhan.setNamHoc(request.getCourseDetail().getNamHoc());
                existingLopHocPhan.setHocKy(request.getCourseDetail().getHocKy());
                existingLopHocPhan.setMoTa(request.getCourseDetail().getMoTa());
                existingLopHocPhan.setNhomHP(request.getCourseDetail().getNhomHP());
                existingLopHocPhan.setThoiGianCapNhat(LocalDateTime.now()); // Update time
                lophocphanService.updateLophocphan(existingLopHocPhan);
            }

            return ResponseEntity.ok("Course updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while updating course: " + e.getMessage());
        }
    }



}

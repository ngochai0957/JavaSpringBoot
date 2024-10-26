package com.example.demo.controller;

import com.example.demo.entity.Chitietlophoc;
import com.example.demo.entity.Lop;
import com.example.demo.entity.Lophocphan;
import com.example.demo.service.ChitietlophocService;
import com.example.demo.service.HocPhanService;
import com.example.demo.service.LophocphanService;
import com.example.demo.service.SinhvienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhos:3000")
@RestController
@RequestMapping(path = "/detail-module")
public class ChitiethocphanController {
    @Autowired
    private HocPhanService hocPhanService;

    @Autowired
    private LophocphanService lophocphanService;


    @Autowired
    private ChitietlophocService chitietlophocService;

    @GetMapping("/{mahocphan}")
    public ResponseEntity<Lophocphan> getLophocphanByMahp(@PathVariable String mahocphan) {
        Lophocphan lophocphan = lophocphanService.getLophocphanByMahp(mahocphan);

        if (lophocphan == null) {
            return ResponseEntity.notFound().build(); // Trả về 404 nếu không tìm thấy học phần
        }

        return ResponseEntity.ok(lophocphan); // Trả về thông tin chi tiết học phần
    }
    @PostMapping("/by-email")
    public ResponseEntity<List<Lophocphan>> getByEmail(@RequestBody Map<String, String> requestBody) {
        // Extract the email from the request body
        String email = requestBody.get("email");

        // Fetch the list of Lophocphan based on the email
        List<Lophocphan> lophocphans = lophocphanService.getByEmailGV(email);

        // Return no content if the list is empty
        if (lophocphans.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        // Return the list of Lophocphan
        return ResponseEntity.ok(lophocphans);
    }







}

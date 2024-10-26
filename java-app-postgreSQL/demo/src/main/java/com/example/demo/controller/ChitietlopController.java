package com.example.demo.controller;

import com.example.demo.entity.Chitietlop;
import com.example.demo.repository.ChitietlopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")  // For React Frontend
@RestController
@RequestMapping("/chitietlop")
public class ChitietlopController {

    @Autowired
    private ChitietlopRepository chitietlopRepository;

    @GetMapping("/{masv}")
    public ResponseEntity<Chitietlop> getChitietlopByMasv(@PathVariable("masv") String masv) {
        Optional<Chitietlop> chitietlop = chitietlopRepository.findByMasv(masv);
        return chitietlop.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}


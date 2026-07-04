package com.booking.controller;

import com.booking.entity.Details;
import com.booking.repository.DetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class BookingController {

    @Autowired
    private DetailsRepository detailsRepository;

    @PostMapping("/bookings")
    public ResponseEntity<Details> createBooking(@RequestBody Details details) {
        Details savedDetails = detailsRepository.save(details);
        return ResponseEntity.ok(savedDetails);
    }
}

package com.booking.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "details")
public class Details {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("halls")
    @Column(name = "halls", nullable = false)
    private String hall;

    @Column(name = "food")
    private String food;

    @JsonProperty("numberofpeople")
    @Column(name = "numberofpeople", nullable = false)
    private Integer people;

    @Column(name = "total_cost", nullable = false)
    private Double totalCost;

    @CreationTimestamp
    @Column(name = "timestamp")
    private LocalDateTime timestamp;

    // Constructors
    public Details() {}

    public Details(String hall, String food, Integer people, Double totalCost) {
        this.hall = hall;
        this.food = food;
        this.people = people;
        this.totalCost = totalCost;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHall() {
        return hall;
    }

    public void setHall(String hall) {
        this.hall = hall;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public Integer getPeople() {
        return people;
    }

    public void setPeople(Integer people) {
        this.people = people;
    }

    public Double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Double totalCost) {
        this.totalCost = totalCost;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}

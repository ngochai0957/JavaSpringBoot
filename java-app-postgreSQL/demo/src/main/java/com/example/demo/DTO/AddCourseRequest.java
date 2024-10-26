package com.example.demo.DTO;

import com.example.demo.entity.HocPhan;

public class AddCourseRequest {

    private HocPhan course;
    private LopHocPhanDTO courseDetail;

    // Getters and Setters

    public HocPhan getCourse() {
        return course;
    }

    public void setCourse(HocPhan course) {
        this.course = course;
    }

    public LopHocPhanDTO getCourseDetail() {
        return courseDetail;
    }

    public void setCourseDetail(LopHocPhanDTO courseDetail) {
        this.courseDetail = courseDetail;
    }
}


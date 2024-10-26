package com.example.demo.DTO;

import java.util.List;

public class SelectedStudentsDTO {
    private List<String> selectedStudentIds;
    private String macthp;  // Course ID

    // Getters and setters
    public List<String> getSelectedStudentIds() {
        return selectedStudentIds;
    }

    public void setSelectedStudentIds(List<String> selectedStudentIds) {
        this.selectedStudentIds = selectedStudentIds;
    }

    public String getMacthp() {
        return macthp;
    }

    public void setMacthp(String macthp) {
        this.macthp = macthp;
    }


}

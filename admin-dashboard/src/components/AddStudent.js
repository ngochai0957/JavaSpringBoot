import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import to retrieve maCTHP from the URL

const AddStudent = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const { maCTHP } = useParams(); // Extract maCTHP from the URL
    const [students, setStudents] = useState([]);
    const [studentDetails, setStudentDetails] = useState({}); // Store malop details
    const [selectedStudents, setSelectedStudents] = useState(new Set()); // To store selected student IDs
    const [selectAll, setSelectAll] = useState(false); // State for select all checkbox

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/sinhvien/all');
                setStudents(response.data);

                // Fetch malop for each student
                const detailsPromises = response.data.map(student =>
                    axios.get(`http://localhost:8080/chitietlop/${student.masv}`)
                        .then(res => ({ masv: student.masv, malop: res.data.malop }))
                        .catch(() => ({ masv: student.masv, malop: 'Không có' })) // Handle missing malop
                );

                // Wait for all promises to resolve
                const details = await Promise.all(detailsPromises);
                const detailsMap = details.reduce((acc, detail) => {
                    acc[detail.masv] = detail.malop;
                    return acc;
                }, {});
                setStudentDetails(detailsMap);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    // Handle checkbox change for individual student
    const handleCheckboxChange = (masv) => {
        const updatedSelectedStudents = new Set(selectedStudents);
        if (updatedSelectedStudents.has(masv)) {
            updatedSelectedStudents.delete(masv); // Remove from selection
        } else {
            updatedSelectedStudents.add(masv); // Add to selection
        }
        setSelectedStudents(updatedSelectedStudents);
    };

    // Handle select all checkbox change
    const handleSelectAllChange = () => {
        const updatedSelectedStudents = new Set(selectAll ? [] : students.map(student => student.masv));
        setSelectAll(!selectAll);
        setSelectedStudents(updatedSelectedStudents);
    };

    const handleAddStudents = async () => {
        const selectedIds = Array.from(selectedStudents);
        
        try {
            // Prepare the data for batch insertions
            const ketquaData = {
                selectedStudentIds: selectedIds,
                macthp: maCTHP // class detail ID from the URL
            };
    
            // Log the data before sending the request
            console.log('Sending data to API:', ketquaData);
    
            // Send POST request to the API
            const response = await axios.post('http://localhost:8080/ketqua/add-students', ketquaData);
            
            alert('Selected students added successfully!');
            navigate(`/input-score/${maCTHP}`);
            setSelectedStudents(new Set()); // Clear the selection after submission
        } catch (error) {
            console.error('Error adding students:', error);
            alert('Failed to add students. Please try again.');
        }
    };
         

    return (
        <div className="students">
            <h2 className="mb-4">Quản Lý Sinh Viên</h2>
            <Table striped bordered hover className="text-center align-middle">
                <thead>
                    <tr>
                        <th>Trạng Thái</th>
                        <th>Mã Sinh Viên</th>
                        <th>Tên Sinh Viên</th>
                        <th>Ngày Sinh</th>
                        <th>Giới Tính</th>
                        <th>Mã Lớp</th>
                        <th className='text-center'>
                            <input 
                                type="checkbox" 
                                checked={selectAll} 
                                onChange={handleSelectAllChange} 
                            /> {/* Select all checkbox */}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, index) => (
                            <tr key={student.masv} className="align-middle">
                                <td className='text-center'>{index + 1}</td>
                                <td className='text-center'>{student.masv}</td>
                                <td>{student.hoten}</td>
                                <td className='text-center'>{student.ngaysinh}</td>
                                <td className='text-center'>{student.gioitinh}</td>
                                <td className='text-center'>
                                    {studentDetails[student.masv] || 'Không có'} {/* Display malop */}
                                </td>
                                <td className="text-center">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedStudents.has(student.masv)} 
                                        onChange={() => handleCheckboxChange(student.masv)} 
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">Không tìm thấy sinh viên nào</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Button to add selected students */}
            <Button variant="primary" onClick={handleAddStudents} disabled={selectedStudents.size === 0}>
                Thêm sinh viên
            </Button>
        </div>
    );
};

export default AddStudent;

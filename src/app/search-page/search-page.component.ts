import { StudentService } from './../student.service';
import { Student } from './../student';
import { Section } from './../../../node_modules/@jridgewell/trace-mapping/dist/types/types.d';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit {
 departments = ['CSE','ISE','ECE','AIML','AIDS'];
 sections = ['A','B','C'];
 selectedDepartment = '';
 selectedSection = '';
 students: Student[] = [];
 filteredStudents: Student[] = [];
 constructor(private studentService: StudentService){}
 ngOnInit(): void{
  this.studentService.getStudentList().subscribe((data)=>{
    this.students = data;
  });
 }
 
 onSearch(){
  // console.log('Selected Department:',this.selectedDepartment);
  // console.log('Selected Section:',this.selectedSection);
  this.filteredStudents = this.students.filter((student)=>{
    const departmentMatch = this.selectedDepartment ? student.department === this.selectedDepartment : true;
    const sectionMatch = this.selectedSection ? student.section === this.selectedSection: true;
    return departmentMatch && sectionMatch;
  });
  console.log('Filtered Students:',this.filteredStudents);
 }
}

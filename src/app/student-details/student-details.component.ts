import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{
  id:number=0;
  student:Student=new Student();
  constructor(private route:ActivatedRoute,private studentService:StudentService, private router: Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentByID(this.id).subscribe(data=>{
      this.student = data;
      
    })
  }
  onSubmit(): void{
    this.studentService.addStudent(this.student);
   this.student = new Student();
  this.router.navigate(['/search']);}
}

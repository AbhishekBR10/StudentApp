import { Route, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from './../student';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {
  student:Student=new Student();
  router: any;
  constructor(private studentService:StudentService,private route:Router){}
  onSubmit(){
    this.insertStudent();
    console.log(this.student);
  }
  insertStudent(){
    this.studentService.createStudent(this.student).subscribe(data =>{
      this.goToStudentList();
      console.log(data);
      // this.router.navigate(['students']);
    });
  }
  goToStudentList(){
    this.route.navigate(['/students']);
  }
}

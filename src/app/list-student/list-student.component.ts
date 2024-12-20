
import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  faCircleXmark = faCircleXmark;
  faPenToSquare = faPenToSquare;
  faEye = faEye;
  students:Student[]=[];
  constructor(private studentService:StudentService, private router:Router){}
  ngOnInit(): void {
    this.getStudents(); 
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.students=[
      {
        "id":1,
        "firstName":"Abhi",
        "lastName":"B R",
        "phoneNumber":9234567890,
        "age":21,
        "department":"CSE",
        "section":"A" 
      },
      {
        "id":2,
        "firstName":"Anki",
        "lastName":"S",
        "phoneNumber":9234567801,
        "age":22,
        "department":"ISE",
        "section":"B" 
      },
      {
        "id":3,
        "firstName":"Puni",
        "lastName":"Roy",
        "phoneNumber":9345670123,
        "age":23,
        "department":"ECE",
        "section":"C" 
      },
      {
        "id":4,
        "firstName":"Avi",
        "lastName":"S",
        "phoneNumber":9468976434,
        "age":24,
        "department":"AIML",
        "section":"A" 
      },
      {
        "id":5,
        "firstName":"Karthi",
        "lastName":"M",
        "phoneNumber":9889768942,
        "age":25,
        "department":"ECE",
        "section":"B" 
      }
    ]
  }
  private getStudents(){
    this.studentService.getStudentList().subscribe(data=>{
      this.students = data;
    })
  }
  updateStudent(id:number){
    this.router.navigate(['update-student',id]);
  }
  viewStudent(id:number){
    this.router.navigate(['student-details',id]);
  }
  deleteStudent(id:number){
    this.studentService.deleteStudentByID(id).subscribe(data=>{
      console.log(data);
      this.getStudents();
    })
  }
}

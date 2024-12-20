import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {
  id:number=0;
  student:Student=new Student();
  constructor(private studentService:StudentService, private route: ActivatedRoute,private  router:Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentByID(this.id).subscribe(data=>{
      this.student = data;
    })
  }
  onSubmit(): void{
    this.studentService.updateStudent(this.id,this.student).subscribe(data =>{
      this.student=data;
      this.goToStudentList();
    });
  }
  goToStudentList(): void{
    this.router.navigate(['/students']);
  }
}

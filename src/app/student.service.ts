import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL = "http://localhost:8080/students";
  constructor(private httpClient:HttpClient) { }

  getStudentList():Observable<Student[]>{
      return this.httpClient.get<Student[]>('${this.baseURL}');
      // return this.studentListSubject.asObservable();
  }

  createStudent(student:Student):Observable<object>{
      return this.httpClient.post('${this.baseURL}',student);
    }

  getStudentByID(id: number):Observable<Student>{
    return this.httpClient.get<Student>('${this.baseURL}/${id}');
  }
  updateStudent(id: number, student:Student):Observable<Student>{
    return this.httpClient.put<Student>('${this.baseURL}/${id}',student);
  }
  deleteStudentByID(id: number):Observable<object>{
  return this.httpClient.delete<Student>('${this.baseURL}/${id}');
  }
   private students: Student[] = [];
   private studentListSubject: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>(this.students);
  
   addStudent(student: Student):
   Observable<Student> {
    return this.httpClient.post<Student>('${this.baseURL}',student);
   }
  //  void{
  //   this.students.push(student);
  //   this.studentListSubject.next([...this.students]);
  //  }

}
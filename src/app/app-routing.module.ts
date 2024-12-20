
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SearchPageComponent } from './search-page/search-page.component';
const routes: Routes = [
  {path:'students',component:ListStudentComponent},
  {path:'create-student',component:CreateStudentComponent},
  {path:'',redirectTo:'students',pathMatch:'full'},
  {path:'update-student/:id',component:UpdateStudentComponent},
  {path:'student-details/:id',component:StudentDetailsComponent},
  {path: 'search', component:SearchPageComponent},
  // {path:'',redirectTo:'/search',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { CourseUpdateComponent } from './course-update/course-update.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: '',component : CoursesComponent},
  {path: 'new',component : CourseCreateComponent},
  {path: 'edit/:id',component : CourseUpdateComponent}
  // {path: 'delete/:id',component : CourseUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }

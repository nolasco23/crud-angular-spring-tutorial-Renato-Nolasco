import { MatSnackBar } from '@angular/material/snack-bar';
import { first, tap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { CoursesService } from './../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss'],
})
export class CourseUpdateComponent implements OnInit {
  currentCourse = null;
  message = '';
  id: string;
  form: FormGroup;
  // course: Course = new Course();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private location: Location,
    private snackBar: MatSnackBar
  ) {
    // this.course = new Course();
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);

    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });

    this.coursesService
      .getCourseById(this.id)
      // .pipe(first(), tap(e => console.log('end', e)))
      .subscribe((x) => {
        this.form.patchValue(x);
        console.log(x);
      });
  }

  ngOnInit() {}

  updateCourse() {
    this.coursesService.updateCourse(this.id, this.form.value).subscribe(
      (data) => {
        console.log(data);
        // this.course = new Course();
        this.gotoList();
        this.onSucess();
      },
      (error) => {
        this.onError();
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.updateCourse();
    // this.gotoList();
  }
  onCancel() {
    this.location.back();
  }

  gotoList() {
    this.router.navigate(['/courses']);
  }

  private onSucess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }
}

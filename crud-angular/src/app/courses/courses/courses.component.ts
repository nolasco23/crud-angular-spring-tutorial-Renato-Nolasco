import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';

import { Course } from '../model/course';
import { DialogService } from './../../shared/dialog.service';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    private dialogService: DialogService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.coursesService.getListCourses().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onUpdate(id: string) {
    // console.log('onUpdate:' + id);
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  onReload() {
    this.courses$ = this.coursesService.getListCourses();
  }

  onDelete(id: string) {
    this.dialogService
      .openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed()
      .subscribe(
        (res) => {
          console.log(res);
          if (res) {
            this.coursesService.deleteById(id).subscribe(
              (data) => {
                this.onReload();
              },
              (error) => console.log(error)
            );
            this.onReload();
          }
        },
        (error) => console.log(error)
      );
  }
}

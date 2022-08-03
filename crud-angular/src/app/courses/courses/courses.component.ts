import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';

import { Course } from '../model/course';
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
    private CoursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //this.courses=[];
    this.courses$ = this.CoursesService.list().pipe(
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
    // console.log( 'onAdd' );
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onUpdate(id: string) {
    console.log('onUpdate:' + id);
    this.router.navigate(['edit', id], { relativeTo: this.route });

    // this.router.navigate(['new'], { relativeTo: this.route });
  }

  onDelete(id: string) {
    console.log('onDelete:' + id);
    // this.router.navigate(['new'], { relativeTo: this.route });
  }
}

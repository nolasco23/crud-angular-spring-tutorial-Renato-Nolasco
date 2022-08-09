import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course as ICourse } from '../model/course';
import { delay, first, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // private readonly API = '/assets/courses.json';

  private readonly API = 'api/courses';
  constructor(private httpClient: HttpClient) {}

  getListCourses() {
    return this.httpClient.get<ICourse[]>(this.API).pipe(
      first()
      // tap((courses) => console.log(courses))
    );
  }

  save(course: ICourse): Observable<Object> {
    // console.log(course);
    return this.httpClient.post<ICourse>(this.API, course).pipe(first());
  }

  deleteById(id: string) {
    return this.httpClient.delete<ICourse>(`${this.API}/${id}`);
  }

  getCourseById(id: string): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${this.API}/${id}`);
  }

  updateCourse(id: string, course: ICourse): Observable<Object> {
    console.log(course);

    return this.httpClient.put(`${this.API}/${id}`, course);
  }
}

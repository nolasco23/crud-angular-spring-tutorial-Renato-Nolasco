import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { delay, first, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // private readonly API = '/assets/courses.json';

  private readonly API = 'api/courses';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      // delay(500),
      tap((courses) => console.log(courses))
    );
  }

  save(record: Course) {
    console.log(record);
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  deleteById(id: number) {
    return this.httpClient.delete<Course>(`${this.API}/${id}`);
  }

  getCourseById(id: string): Observable<Course>{
    return this.httpClient.get<Course>('${this.API}/${id}');
  }

  updateCourse(id: string, value: any): Observable<Object> {
    return this.httpClient.put(`${this.API}/${id}`, value);
  }
}

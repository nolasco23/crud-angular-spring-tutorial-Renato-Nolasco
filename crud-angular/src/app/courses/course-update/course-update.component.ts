import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss'],
})
export class CourseUpdateComponent implements OnInit {
  form: FormGroup;
  editCourseForm: CourseForm = new CourseForm();

  // @ViewChild("CourseForm")
  // courseForm!: NgForm;

  isSubmitted: boolean = false;
  courseId: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId'];
    // this.getCourseDetailById();
  }

  // getCourseDetailById() {
  //   this.getCourseDetailById(this.courseId).subscribe(
  //     (data: any) => {
  //       if (data != null && data.body != null) {
  //         var resultData = data.body;
  //         if (resultData) {
  //           this.editCourseForm.id = resultData.id;
  //           this.editCourseForm.name = resultData.name;
  //           this.editCourseForm.category = resultData.category;
  //         }
  //       }
  //     },
  //     (error: any) => {}
  //   );
  // }

  onSubmit() {
    // this.updateEmployee();
  }
  onCancel() {
    // this.location.back();
  }

  gotoList() {
    this.router.navigate(['/courses']);
  }
}

export class CourseForm {
  id: string = '';
  name: string = '';
  category: string = '';
}

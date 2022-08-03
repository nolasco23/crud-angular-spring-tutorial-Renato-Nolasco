// package com.minerva.crudspring.service;

// import java.util.List;

// import org.springframework.stereotype.Service;
// import org.springframework.validation.annotation.Validated;

// import com.minerva.crudspring.Exception.RecordNotFoundException;
// import com.minerva.crudspring.model.Course;
// import com.minerva.crudspring.repository.CourseRepository;

// import lombok.AllArgsConstructor;

// @Service
// @AllArgsConstructor
// @Validated
// public class CourseService {

//     private final CourseRepository courseRepository;

//     public List<Course> findAll() {
//         return courseRepository.findAll();
//     }

//     public Course findById(Long id) {
//         return courseRepository.findById(id)
//                 .orElseThrow(() -> new RecordNotFoundException(id));
//     }

//     public Course create(Course course) {
//         return courseRepository.save(course);
//     }

//     public Course update(Long id, Course course) {
//         return courseRepository.findById(id).map(actual -> {
//             actual.setName(course.getName());
//             actual.setCategory(course.getCategory());
//             return courseRepository.save(actual);
//         }).orElseThrow(() -> new RecordNotFoundException(id));
//     }

//     public void delete(Long id) {
//         courseRepository.delete(courseRepository.findById(id)
//                 .orElseThrow(() -> new RecordNotFoundException(id)));
//     }
// }
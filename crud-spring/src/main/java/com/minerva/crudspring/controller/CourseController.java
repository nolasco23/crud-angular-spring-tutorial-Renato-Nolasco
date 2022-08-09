package com.minerva.crudspring.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.minerva.crudspring.model.Course;
import com.minerva.crudspring.service.CourseService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses") // Endereço que ficará disponível para a aplicação
@AllArgsConstructor // Criar o construtor

public class CourseController {

  // private final CourseRepository courseRepository;

  // O método abaixo é semelhante ao de cima, ambos descrevem que o método a
  // seguir somente realiza requisições por meio do GET
  // @RequestMapping(method = RequestMethod.GET)
  // @GetMapping
  // public @ResponseBody List<Course> list() {
  // return courseRepository.findAll();
  // }

  // @PostMapping
  // @ResponseStatus(code = HttpStatus.CREATED)
  // public Course create(@RequestBody Course course) {
  // return courseRepository.save(course);
  // }
  private CourseService courseService;

  @GetMapping
  public List<Course> findAll() {
    return courseService.findAll();
  }

  @GetMapping("/{id}")
  public Course findById(@PathVariable Long id) {
    System.out.println("Course: "+courseService.findById(id));
    return courseService.findById(id);
  }

  @PostMapping
  @ResponseStatus(code = HttpStatus.CREATED)
  public Course create(@RequestBody Course course) {
    System.out.print(course);
    return courseService.create(course);
  }

  @PutMapping("/{id}")
  public Course update(@PathVariable Long id,
  @RequestBody Course course) {
    return courseService.update(id, course);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Map<String, Boolean>> delete(@PathVariable Long id) {
    Course course = courseService.findById(id);

    courseService.delete(id);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }
  // @ResponseStatus(code = HttpStatus.NO_CONTENT)
  // public void delete(@PathVariable Long id) {
  // courseService.delete(id);
  // }
}

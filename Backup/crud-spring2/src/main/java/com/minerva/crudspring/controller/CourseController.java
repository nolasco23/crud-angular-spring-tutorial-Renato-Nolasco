package com.minerva.crudspring.controller;

 
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.minerva.crudspring.model.Course;
import com.minerva.crudspring.repository.CourseRepository;
// import com.minerva.crudspring.service.CourseService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses") // Endereço que ficará disponível para a aplicação
@AllArgsConstructor // Criar o construtor

public class CourseController {

    private final CourseRepository courseRepository;
    // private CourseService courseService;

    // O método abaixo é semelhante ao de cima, ambos descrevem que o método a
    // seguir somente realiza requisições por meio do GET
    // @RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public @ResponseBody List<Course> list() {
        return courseRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
     public Course create(@RequestBody Course course) {
        return courseRepository.save(course); 

    }
 

}

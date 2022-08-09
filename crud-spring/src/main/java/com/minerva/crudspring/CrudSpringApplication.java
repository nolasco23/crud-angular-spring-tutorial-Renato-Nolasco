package com.minerva.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.minerva.crudspring.model.Course;
import com.minerva.crudspring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
    CommandLineRunner initDatabase(CourseRepository courseRepository){
        return args-> {
            courseRepository.deleteAll();
            
            Course a = new Course();
            a.setName("HTML");
            a.setCategory("front-end");
            courseRepository.save(a);
             
            Course b = new Course();
            b.setName("Java");
            b.setCategory("back-end");
            courseRepository.save(b);

            Course c = new Course();
            c.setName("Python");
            c.setCategory("back-end");
            courseRepository.save(c);
        };
    }

}

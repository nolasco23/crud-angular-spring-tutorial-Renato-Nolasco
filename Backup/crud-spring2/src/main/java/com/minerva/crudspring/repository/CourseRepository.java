package com.minerva.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.minerva.crudspring.model.Course;

import scala.Long;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
}
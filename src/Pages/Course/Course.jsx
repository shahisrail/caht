/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/Course.json")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>This is courses</h2>

      <div className="grid grid-cols-3 gap-5 ">
        {courses.map((course) => (
          <Link to={`/CourseDetails/${course.Id}`} key={course.Id}>
            <div className="border bg-slate-100 shadow-xl rounded-2xl">
              <img
                className="rounded-md"
                src={course.ImageUrl}
                alt={course.name}
              />
              <p className="font-bold">Price: ${course.Price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Course;

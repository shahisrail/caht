/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PayDataFrom from "./payDataFrom";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch specific course details based on id
    fetch("/Course.json") // Update the path as needed
      .then((response) => response.json())
      .then((data) => {
        const selectedCourse = data.find((c) => c.Id === id);
        setCourse(selectedCourse);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h2>Course Details</h2>
        <img src={course.ImageUrl} alt="" />
        <p>Name: {course.Name}</p>
        <p>Price: ${course.Price}</p>
      </div>
      <PayDataFrom course={course}id={id} />
    </div>
  );
};

export default CourseDetails;

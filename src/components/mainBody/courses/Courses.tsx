import "../../../styles/Courses.scss";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <div className="Courses">
      <p className="title">Courses</p>

      <div className="heading">
        <div className="greetingParent">
          <p className="greeting">You have 1 course 😑</p>
          <p className="subGreeting">It's not too late to get more.</p>
        </div>

        <p className="view">Explore courses</p>
      </div>

      <CourseCard />
    </div>
  );
};

export default Courses;

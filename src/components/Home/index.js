import Navbar from "../navbar";
import CustomFetch from "../../CustomHooks";
import CourseItem from "../CourseItem";
const Home = () => {
    const data = CustomFetch("https://apis.ccbp.in/te/courses")
    let courses=data.courses
  return (
    <>
      <Navbar />
      <h1>Courses</h1>;
      
        <ul>
         {courses.map(i=>
            <CourseItem key={i.id} data={i}/>
         )}
        </ul>
      
    </>
  );
};

export default Home;

import "../../styles/App.scss";
import Blog from "./blog/Blog";
import Courses from "./courses/Courses";
import Dashboard from "./dashboard/Dashboard";
import Saved from "./saved/Saved";

const MainBody = ({ selected }: { selected: string }) => {
  const renderBody = () => {
    switch (selected) {
      case "Dashboard":
        return <Dashboard />;
      case "Courses":
        return <Courses />;
      case "Saved":
        return <Saved />;
      case "Blog":
        return <Blog />;

      default:
        break;
    }
  };
  return <div className="MainBody">{renderBody()}</div>;
};

export default MainBody;

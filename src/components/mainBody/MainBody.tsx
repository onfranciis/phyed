import "../../styles/App.scss";
import Blog from "./blog/Blog";
import Courses from "./courses/Courses";
import Dashboard from "./dashboard/Dashboard";
import Notifications from "./notifications/Notifications";
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
      case "Notifications":
        return <Notifications />;
      default:
        break;
    }
  };
  return <div className="MainBody">{renderBody()}</div>;
};

export default MainBody;

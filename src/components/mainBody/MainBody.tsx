import "../../styles/App.scss";
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

      default:
        break;
    }
  };
  return <div className="MainBody">{renderBody()}</div>;
};

export default MainBody;

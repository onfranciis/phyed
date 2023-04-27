import "../../styles/App.scss";
import Courses from "./courses/Courses";
import Dashboard from "./dashboard/Dashboard";

const MainBody = ({ selected }: { selected: string }) => {
  const renderBody = () => {
    switch (selected) {
      case "Dashboard":
        return <Dashboard />;
      case "Courses":
        return <Courses />;

      default:
        break;
    }
  };
  return <div className="MainBody">{renderBody()}</div>;
};

export default MainBody;

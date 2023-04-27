import { useState } from "react";
import MainBody from "./components/mainBody/MainBody";
import Sidebar from "./components/sidebar/Sidebar";
import "./styles/App.scss";

const SidebarActions = [
  { src: "/resources/dashboard.svg", title: "Dashboard" },
  { src: "/resources/edit.svg", title: "Courses" },
  { src: "/resources/add_a_photo.svg", title: "Saved" },
  { src: "/resources/subscriptions.svg", title: "Blog" },
  { src: "/resources/hourglass_empty.svg", title: "Notifications" },
  { src: "/resources/group.svg", title: "My Profile" },
  { src: "/resources/delete.svg", title: "Logout" },
  { src: "/resources/file_present.svg", title: "Item7" },
  { src: "/resources/alarm.svg", title: "Item8" },
];

function App() {
  const [selected, setSelected] = useState<string>(SidebarActions[0]?.title);

  return (
    <div className="App">
      <Sidebar
        selected={selected}
        setSelected={(data) => setSelected(data)}
        SidebarActions={SidebarActions}
      />
      <MainBody selected={selected} />
    </div>
  );
}

export default App;

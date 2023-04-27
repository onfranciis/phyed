import SidebarCard from "./SidebarCard";
import "../../styles/Sidebar.scss";
import { useState } from "react";

const SidebarActions = [
  { src: "/resources/dashboard.svg", title: "Dashboard" },
  { src: "/resources/edit.svg", title: "Courses" },
  { src: "/resources/group.svg", title: "Saved" },
  { src: "/resources/hourglass_empty.svg", title: "Blog" },
  { src: "/resources/add_a_photo.svg", title: "Notifications" },
  { src: "/resources/subscriptions.svg", title: "My Profile" },
  { src: "/resources/delete.svg", title: "Logout" },
  { src: "/resources/file_present.svg", title: "Item7" },
  { src: "/resources/alarm.svg", title: "Item8" },
];

const Sidebar = () => {
  const [selected, setSelected] = useState<string>(SidebarActions[0]?.title);

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src="/phyed.png" alt="Phyed Logo" height={70} width={100} />
      </div>

      {SidebarActions.slice(0, 7).map((action) => (
        <SidebarCard
          key={action.src}
          Img={action.src}
          Title={action.title}
          SelectedValue={selected}
          setSelected={(value: string) => setSelected(value)}
        />
      ))}
    </div>
  );
};

export default Sidebar;

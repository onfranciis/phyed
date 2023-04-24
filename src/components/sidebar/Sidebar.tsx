import SidebarCard from "./SidebarCard";
import "../../styles/Sidebar.scss";
import { useState } from "react";

const SidebarActions = [
  { src: "/resources/dashboard.svg", title: "Dashboard" },
  { src: "/resources/edit.svg", title: "Item1" },
  { src: "/resources/group.svg", title: "Item2" },
  { src: "/resources/hourglass_empty.svg", title: "Item3" },
  { src: "/resources/add_a_photo.svg", title: "Item4" },
  { src: "/resources/delete.svg", title: "Item5" },
  { src: "/resources/subscriptions.svg", title: "Item6" },
  { src: "/resources/file_present.svg", title: "Item7" },
  { src: "/resources/alarm.svg", title: "Item8" },
];

const Sidebar = () => {
  const [selected, setSelected] = useState<string>(SidebarActions[0]?.title);

  return (
    <div className="Sidebar">
      <div className="logo">
        <img
          src="/mainstack-logo.svg"
          alt="Mainstack Logo"
          height={40}
          width={40}
        />
      </div>

      {SidebarActions.slice(0, 4).map((action) => (
        <SidebarCard
          key={action.src}
          Img={action.src}
          Title={action.title}
          SelectedValue={selected}
          setSelected={(value: string) => setSelected(value)}
        />
      ))}

      <p className="subTitle">OTHERS 1</p>

      {SidebarActions.slice(4, 6).map((action) => (
        <SidebarCard
          key={action.src}
          Img={action.src}
          Title={action.title}
          SelectedValue={selected}
          setSelected={(value: string) => setSelected(value)}
        />
      ))}

      <p className="subTitle">OTHERS 2</p>

      {SidebarActions.slice(6).map((action) => (
        <SidebarCard
          key={action.src}
          Img={action.src}
          Title={action.title}
          SelectedValue={selected}
          setSelected={(value: string) => setSelected(value)}
        />
      ))}

      <div className="user">
        <div className="details">
          <img
            src="/resources/user-unsplash.jpg"
            alt="Mainstack Logo"
            height={40}
            width={40}
          />

          <p>Blessing Daniels</p>
        </div>

        <button>
          <img
            src="/resources/more_horiz.svg"
            alt="Mainstack Logo"
            height={20}
            width={20}
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

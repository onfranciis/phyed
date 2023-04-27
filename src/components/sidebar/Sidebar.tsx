import SidebarCard from "./SidebarCard";
import "../../styles/Sidebar.scss";

interface SidebarPropType {
  selected: string;
  setSelected: (data: string) => void;
  SidebarActions: { src: string; title: string }[];
}
const Sidebar = ({
  selected,
  setSelected,
  SidebarActions,
}: SidebarPropType) => {
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

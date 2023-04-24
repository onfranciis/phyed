const SidebarCard = ({
  Img,
  Title,
  SelectedValue,
  setSelected,
}: SidebarCardPropType) => {
  const selected: boolean = Title == SelectedValue;

  return (
    <div
      className="SidebarCard"
      onClick={() => {
        setSelected(Title);
      }}
      style={{ borderLeftColor: selected ? "#FF5403" : "" }}
    >
      <img
        src={Img}
        alt={Title}
        height={20}
        width={20}
        style={{
          filter: selected
            ? "invert(33%) sepia(67%) saturate(2248%) hue-rotate(358deg) brightness(107%) contrast(103%)"
            : "invert(37%) sepia(17%) saturate(381%) hue-rotate(167deg) brightness(93%) contrast(87%)",
        }}
      />
      <p style={{ color: selected ? "#FF5403" : "#56616B" }}>{Title}</p>
    </div>
  );
};

interface SidebarCardPropType {
  Img: string;
  Title: string;
  SelectedValue: string;
  setSelected: (value: string) => void;
}

export default SidebarCard;

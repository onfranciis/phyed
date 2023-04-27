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
      style={{ borderLeftColor: selected ? "#68BBE3" : "" }}
    >
      <img
        src={Img}
        alt={Title}
        height={20}
        width={20}
        style={{
          filter: selected
            ? "invert(22%) sepia(54%) saturate(2734%) hue-rotate(187deg) brightness(97%) contrast(96%)"
            : "invert(37%) sepia(17%) saturate(381%) hue-rotate(167deg) brightness(93%) contrast(87%)",

          scale: selected ? "1.2" : "1",
        }}
      />
      <p
        style={{
          color: selected ? "#68BBE3" : "#56616B",
          fontWeight: selected ? "bold" : "normal",
        }}
      >
        {Title}
      </p>
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

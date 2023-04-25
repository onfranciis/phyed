import { useState } from "react";
import "../../../styles/Dashboard.scss";

const DateOptionData = [
  { day: "1day" },
  { day: "3days" },
  { day: "7days" },
  { day: "30days" },
  { day: "All Time" },
  { day: "Custom Date" },
];

const DateOption = () => {
  const [selected, setSelected] = useState<string>(DateOptionData[0].day);

  return (
    <div className="DateOption">
      {DateOptionData.map((option) => (
        <button
          key={option.day}
          onClick={() => {
            setSelected(option.day);
          }}
        >
          <p
            key={option.day}
            style={{
              backgroundColor: selected == option.day ? "" : "transparent",
              color: selected == option.day ? "" : "black",
              borderColor:
                selected == option.day ? "" : "rgba(128, 128, 128, 0.2)",
            }}
          >
            {option.day}
          </p>
        </button>
      ))}
    </div>
  );
};

export default DateOption;

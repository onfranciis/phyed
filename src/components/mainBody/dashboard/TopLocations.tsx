import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ResponseType } from "../../../hooks/fetchData";
import { useEffect, useState } from "react";
import axios from "axios";

const TopLocations = () => {
  const [countries, setCountries] = useState<
    { country: string; count: number; percent: number }[]
  >([]);

  useEffect(() => {
    axios
      .get("https://fe-task-api.mainstack.io/")
      .then((res) => res.data)
      .then((res: ResponseType) => {
        setCountries(res.top_locations);
      });
  }, []);

  const data = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: countries.map((country) => country.percent),
        backgroundColor: CountriesData.map((country) => country.color),
        borderColor: CountriesData.map((country) => country.color),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="TopContainer">
      <div className="TopParent">
        <p className="title">Top Locations </p>
        <p className="view">View full reports</p>
      </div>

      <div className="Top">
        <div className="countries">
          {countries?.map((country, index) => (
            <div className="country" key={country.country}>
              <img
                src={`/resources/${country.country.replace(" ", "")}.svg`}
                alt=""
                height={15}
                width={21}
              />
              <p>{country.country}</p>
              <p className="size">{country.percent}%</p>
              <span
                style={{ backgroundColor: CountriesData[index].color }}
              ></span>
            </div>
          ))}
        </div>

        <div className="pie">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

ChartJS.register(ArcElement);

const CountriesData = [
  {
    src: "/resources/Nigeria.svg",
    country: "Nigeria",
    color: "#599EEA",
    size: 50,
  },
  {
    src: "/resources/UnitedStatesofAmerica.svg",
    country: "United States",
    color: "#844FF6",
    size: 24,
  },
  {
    src: "/resources/Netherlands.svg",
    country: "Netherlands",
    color: "#0FB77A",
    size: 24,
  },
  {
    src: "/resources/Andorra.svg",
    country: "Andorra",
    color: "#FAB70A",
    size: 24,
  },
  {
    src: "/resources/Blank.svg",
    country: "Others",
    color: "#F09468",
    size: 24,
  },
];

export default TopLocations;

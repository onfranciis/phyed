import axios from "axios";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { ResponseType } from "../../../hooks/fetchData";

const TopReferrals = () => {
  const [countries, setCountries] = useState<
    { source: string; count: number; percent: number }[]
  >([]);

  useEffect(() => {
    axios
      .get("https://fe-task-api.mainstack.io/")
      .then((res) => res.data)
      .then((res: ResponseType) => {
        setCountries(res.top_sources);
      })
      .catch((err) => {
        null;
      });
  }, []);

  const CountriesData = [
    {
      src: "/resources/Facebook.svg",
      country: "Facebook",
      color: "#599EEA",
      size: 50,
    },
    {
      src: "/resources/Instagram.svg",
      country: "Instagram",
      color: "#844FF6",
      size: 24,
    },
    {
      src: "/resources/Linkedin.svg",
      country: "LinkedIn",
      color: "#0FB77A",
      size: 24,
    },
    {
      src: "/resources/Twitter.svg",
      country: "Twitter",
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
            <div className="country" key={country.source}>
              <img
                src={`/resources/${country.source[0].toUpperCase()}${country.source
                  .slice(1)
                  .toLowerCase()}.svg`}
                alt=""
                height={15}
                width={21}
              />
              <p>{`${country.source[0].toUpperCase()}${country.source
                .slice(1)
                .toLowerCase()}`}</p>
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

export default TopReferrals;

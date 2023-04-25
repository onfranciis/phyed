import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const TopLocations = () => {
  return (
    <div className="TopContainer">
      <div className="TopParent">
        <p className="title">Top Locations </p>
        <p className="view">View full reports</p>
      </div>

      <div className="Top">
        <div className="countries">
          {CountriesData.map((country) => (
            <div className="country" key={country.country}>
              <img src={country.src} alt="" height={15} width={21} />
              <p>{country.country}</p>
              <p className="size">{country.size}%</p>
              <span style={{ backgroundColor: country.color }}></span>
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

const data = {
  labels: ["", "", "", "", "", ""],
  datasets: [
    {
      label: "",
      data: [
        34.246575342, 16.438356164, 16.438356164, 16.438356164, 16.438356164,
      ],
      backgroundColor: ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"],
      borderColor: ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"],
      borderWidth: 1,
    },
  ],
};

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

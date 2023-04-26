import { useState } from "react";
import DateOption from "./DateOption";
import LineGraph from "./LineGraph";
import TopLocations from "./TopLocations";
import TopReferrals from "./TopReferral";

const Dashboard = () => {
  const [numberOfAllTimePageViews, setNumberOfAllTimePageViews] =
    useState<number>(0);

  return (
    <div className="Dashboard">
      <p className="title">Dashboard</p>

      <div className="heading">
        <div className="greetingParent">
          <p className="greeting">Good morning, Blessing ⛅</p>
          <p className="subGreeting">Check out your dashboard summary.</p>
        </div>

        <p className="view">View analytics</p>
      </div>

      <DateOption />

      <div className="LineGraph">
        <div className="top">
          <div className="left">
            <p className="page">Page Views</p>
            <p className="all">All time</p>
          </div>

          <button>
            <img src="/resources/info.svg" alt="info" height={15} width={20} />
          </button>
        </div>

        <p className="figure">{numberOfAllTimePageViews}</p>
        <LineGraph setAllTime={(data) => setNumberOfAllTimePageViews(data)} />
      </div>

      <div className="pieCharts">
        <TopLocations />
        <TopReferrals />
      </div>
    </div>
  );
};

export default Dashboard;

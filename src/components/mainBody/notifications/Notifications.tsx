import "../../../styles/Notifications.scss";
import NotificationsCard from "./NotificationsCard";

const Notifications = () => {
  const DATA = [
    { message: "Bruce Wayne published a new blog just now" },
    { message: "James Gordon published a new blog about 7 minuites ago" },
    { message: "Barbra Kean subscribed to you" },
    { message: "Celina Kyle visited your profile" },
  ];
  return (
    <div className="Notifications">
      <p className="title">Notifications</p>

      <div className="heading">
        <div className="greetingParent">
          <p className="greeting">Latest bells 🔔</p>
          <p className="subGreeting">{DATA.length} bells</p>
        </div>

        <p className="view">Turn on DND</p>
      </div>

      <div className="section">
        {DATA.map((notification) => (
          <NotificationsCard Message={notification.message} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;

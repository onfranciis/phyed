import "../../../styles/Profile.scss";

const Profile = () => {
  return (
    <div className="Profile">
      <img
        src="/resources/profile.jpg"
        alt="profile picture"
        height={100}
        width={100}
      />

      <p className="name">John Doe</p>
      <p className="username">@johndoe</p>

      <div className="sections">
        <div className="section">
          <p className="tag">Courses</p>
          <p className="figure">1</p>
        </div>

        <div className="section">
          <p className="tag">Saved </p>
          <p className="figure">20</p>
        </div>

        <div className="section">
          <p className="tag">Profile view</p>
          <p className="figure">16</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

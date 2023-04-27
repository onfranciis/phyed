import "../../../styles/Saved.scss";
import SavedCard from "./SavedCard";

const Saved = () => {
  return (
    <div className="Saved">
      <p className="title">Saved</p>

      <div className="heading">
        <div className="greetingParent">
          <p className="greeting">You have a lovely archive 🤩</p>
          <p className="subGreeting">Tell me of a better collector.</p>
        </div>

        <p className="view">Save more</p>
      </div>

      <div className="saved">
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
      </div>
    </div>
  );
};

export default Saved;

import { useEffect, useState } from "react";
import "../../../styles/Blog.scss";

const Blog = () => {
  const [searchWidth, setSearchWidth] = useState("0%");

  useEffect(() => {
    setSearchWidth("80%");
  }, []);

  return (
    <div className="Blog">
      <p className="title">Blog</p>

      <div className="heading">
        <div className="greetingParent">
          <p className="greeting">Welcome to the writer's restaurant 🍲</p>
          <p className="subGreeting">Get spices from people and cook.</p>
        </div>

        <p className="view">Start blogging</p>
      </div>

      <div className="search">
        <input
          type="search"
          name=""
          id=""
          placeholder="...search existing blogs"
          style={{ width: searchWidth }}
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Blog;

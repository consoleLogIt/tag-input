import "./App.css";
import { useState } from "react";
import useLoadSuggetions from "./useLoadSuggetions";

function App() {
  const [tags, setTags] = useState([]);
  const [query, setQuery] = useState("");
  const suggetions = useLoadSuggetions(query);

  const handleAddTags = (e, item) => {
    e.preventDefault();
    setTags((prevState) => [item, ...prevState]);
  };

  //handlePressEnter
  const handlePressEnter = (e) => {
    if (e.key !== "Enter") return;
    handleAddTags(e, e.target.value);
    e.target.value = "";
    setQuery("");
  };

  // handle remove tag
  const handleRemoveTag = (e, index) => {
    e.preventDefault();
    const modified = tags.filter((item, i) => i !== index);
    setTags(modified);
  };

  return (
    <div className="OuterContainer">
      <div className="innerContainer">
        <div className="input-tag-container">
          {tags.length > 0 && (
            <ul className={tags.length > 2 ? "tag-list-16px" : "tag-list-18px"}>
              {tags.map((item, index) => (
                <li key={index} className="tags">
                  <span className="tag-name">{item}</span>
                  <span className="close-btn">
                    <span
                      className="cross-icon"
                      onMouseDown={(e) => handleRemoveTag(e, index)}
                    ></span>
                  </span>
                </li>
              ))}
            </ul>
          )}
          <input
            onKeyPress={handlePressEnter}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="+ Add Tags"
          ></input>
        </div>
        <div className="suggetions-container">
          {suggetions.length > 0 && (
            <ul className="suggetions-list">
              {suggetions.map((item, index) => (
                <li key={index} onMouseDown={(e) => handleAddTags(e, item)}>
                  {item}
                  <sup style={{ padding: "5px" }}>23</sup>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

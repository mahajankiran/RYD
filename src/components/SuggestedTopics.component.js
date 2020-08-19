import React from "react";
import SuggestedTopic from "../Data/SuggestedTopics";
import "../styles/Suggestedtopics.css";
import Card  from './Card';

const TopicsList = SuggestedTopic.map((topic, id) => (
  <>
     <Card module={topic}/>
  </>
));

const SuggestedTopics = () => {
  return (
    <>
      <header class="main">
        <h1>Suggested Topics</h1>
        <button>More</button>
      </header>
      <div className="cards-container">{TopicsList}</div>
    </>
  );
};

export default SuggestedTopics;

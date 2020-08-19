import history from "../assets/images/history2.jpg";
import economics from "../assets/images/economics.jpg";
import geography from "../assets/images/geography.jpg";
import politics from "../assets/images/politics.jpg";
const SuggestedTopic = [
  {
    title: "Geography",
    no_of_question: 10,
    url: geography,
    duration: {
      hrs: 2,
      min: 10,
    },
  },
  {
    title: "Economics",
    no_of_question: 10,
    url: economics,

    duration: {
      hrs: 2,
      min: null,
    },
  },
  {
    title: "History",
    no_of_question: 10,
    url:history,
    duration: {
      hrs: 2,
      min: null,
    },
  },
  {
    title: "Politics",
    no_of_question: 10,
    url:politics,
    duration: {
      hrs: 2,
      min: 30,
    },
  },
];

export default SuggestedTopic;

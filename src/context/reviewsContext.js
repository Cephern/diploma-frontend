import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const reviewsContext = createContext();

const ReviewsContextProvider = (props) => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    axios
      .get("https://doc-backend.herokuapp.com/reviews")
      .then((res) => setReviews(res.data));
  }, []);

  return (
    <reviewsContext.Provider value={reviews}>
      {props.children}
    </reviewsContext.Provider>
  );
};

export default ReviewsContextProvider;

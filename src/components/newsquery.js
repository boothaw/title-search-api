import { NEWS_KEY } from "../constants";
import { render } from "@testing-library/react";

export const fetchNews = query => {
  const ne = document.querySelector(".news");
  console.log("fetching data with: ", query);

  const endpoint = `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_KEY}`;

  const promise = fetch(endpoint);

  promise
    .then(response => {
      if (response.ok) {
        console.log("response", response);
        return response.json();
      }
    })
    .then(data => {
      ne.textContent = `${data.articles.title}`;
    })

    .catch(error => {
      console.log(error);
    });
};

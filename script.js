const BLOCKQUOTE = document.querySelector("blockquote");
const BUTTON_GET_QUOTE = document.querySelector("#get-quote");

const getQuote = () => {
  let data = fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (quote) {
      // This is the JSON from our response
      BLOCKQUOTE ? (BLOCKQUOTE.innerText = quote[0]) : null;
    })
    .catch(function (error) {
      // There was an error
      console.warn(error);
    });
  return data;
};

BUTTON_GET_QUOTE.addEventListener("click", () => {
  getQuote();
});

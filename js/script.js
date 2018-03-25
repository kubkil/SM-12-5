$(function() {

  // linki - podwójne cytaty? If you are constructing html from strings, either use " instead of ' for attribute quotes, or add an extra layer of encoding (' can be encoded as %27).
  // const prefix = "https://cors-anywhere.herokuapp.com/";
  const tweetLink = "https://twitter.com/intent/tweet?text=";
  const quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

  function getQuote() {
    // pierwszy parametr - link do API, drugi - wykonywana funkcja
    $.getJSON(quoteUrl, createTweet);
    // $.ajaxSetup({ cache: false });
  }

  // co wskakuje jako argument 'input'?
  function createTweet(input) {
    let data = input[0];
    // data.content ?
    // data.content - kod HTML paragrafu; tworzymy element HTML z tego kodu, za pomocą text() wyciągamy zawartość tekstową i ucinamy spacje (trim())
    const quoteText = $(data.content).text().trim();
    const quoteAuthor = data.title;
    const tweetText = 'Quote of the day - ' + quoteText + ' Author: ' + quoteAuthor;
    // .length - the number of elements currently matched. If (true) czyli jeśli jest 0, zamienia na true i warunek jest spełniony
    if (!quoteAuthor.length) {
      quoteAuthor = 'Unknown author';
    }

    if (tweetText.length > 140) {
      getQuote();
    } else {
      // encodeURIComponent ?
      const tweet = tweetLink + encodeURIComponent(tweetText);
      // znajdź element o klasie quote i wsadź quoteText
      $('.quote').text(quoteText);
      $('.author').text('Author: ' + quoteAuthor);
      // w atrybut href wstawia 'tweet'
      $('.tweet').attr('href', tweet);
    }
   }

  $('.trigger').click(function () {
    getQuote();
  });

  getQuote();

}); // END DOCUMENT READY

// $(function() {

//   function getJoke() {
//     $.ajax({
//       url: 'http://api.icndb.com/jokes/random',
//       method: 'GET',
//       success: function() {
//         $('#joke').text(res.value.joke);
//       }
//     });
//   }

//   const $button = $('#get-joke').click(function() {
//     getJoke();
//   });

// });

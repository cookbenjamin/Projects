function fetch(callback) {
  $.ajax({
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      var post = data.shift();
      data = {
        author: post.title,
        quote: post.content
      }
      callback(data);
    },
    cache: false
  });
}
function updateTweet(quote)  {
  $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quote.quote.replace(/<(?:.|\n)*?>/gm, "") + " - " + quote.author)
}
function display(quote)  {
  $("#quoteContent").html(quote.quote);
  $("#author").html(quote.author);
}
$('#new').on('click', function(e) { 
  fetch(function(quote) {
    updateTweet(quote);
    display(quote);
  });
});
console.log('jquery file sources');
require('jquery');

let postArray = [];

const getPosts = () => {
  $.ajax({
    type: 'GET',
    url: 'http://theocdcoder.com/wp-json/wp/v2/posts',
    success: (response) => {
      postArray.push(response);
      console.log(response);
      console.log(postArray);
    }
  });
};

/**
 * @desc contains the db queries for the app.
 * @todo if used within wordpress, routes and functions might need to be tweaked
 * Why jquery? because it's already included with wordpress.
 */
$(() => {
  getPosts();
});

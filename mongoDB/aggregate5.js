/**
 * The purpose of this lab is use the Aggregation Framework to create cursor-like stages.

In this lab, we want to select movies feature one or more of the following actors:

"Sandra Bullock",
"Tom Hanks",
"Julia Roberts",
"Kevin Spacey",
"George Clooney"
We also want to limit the movies to those with a USA release and a tomatoes.viewer.rating greater than or equal to 3. There should also be a new field num_favs that counts how of the actors listed above appear in the cast field of the movie.

These results should also be sorted by num_favs, tomatoes.viewer.rating, and title, all in descending order.

What is the title of the 25th film in the aggregation result?

For simplicity, we will use a variable ``favorites` to hold the list of actors.
 */

var favorites = [
    "Sandra Bullock",
    "Tom Hanks",
    "Julia Roberts",
    "Kevin Spacey",
    "George Clooney"];

    var pipeline = [
        {
          $match: {
            "tomatoes.viewer.rating": { $gte: 3 },
            countries: "USA",
            cast: {
              $in: favorites
            }
          }
        },
       {
          $project: {
            _id: 0,
            title: 1,
            "tomatoes.viewer.rating": 1,
            cast: 1,
            num_favs: {
              $size: {
                $setIntersection: [ favorites, "$cast" ]
              }
            }
          }
        },
        {
          $sort: { num_favs: -1, "tomatoes.viewer.rating": -1, title: -1 }
        },
        {
          $skip: 24
        },
        {
          $limit: 1
        }
      ];

      db.movies_sample.aggregate(pipeline).pretty();


      /**
       * 
  {
    title: 'Angels & Demons',
    tomatoes: { viewer: { rating: 3.4 } },
    cast: [
      'Tom Hanks',
      'Ewan McGregor',
      'Ayelet Zurer',
      'Stellan Skarsgèrd'
    ],
    num_favs: 1
  }
       */
/**
 * The purpose of this lab is use the Aggregation Framework to bring all the knowledge you have gained from the earlier labs together and apply it.
 * In this lab, you will to rescale the imdb.votes variable and use it to calculate a new variable normalized_rating.
 * Specifically, you are to calculate an average rating for each movie where English is an available language, where the minimum imdb.rating is at least 1, where the minimum imdb.votes is at least 1, and where it was released in or after 1990. You should review the Wikipedia page on feature scaling for how to normalize the scaling and review the following formula we supply to help you.
 * // we will use 1 as the minimum value and 10 as the maximum value for scaling, so all scaled votes will fall into the range [1,10]
 * scaled_votes = 1 + 9 * ((x - x_min) / (x_max - x_min))
 */

 var x_max = 1521105;
 var x_min = 5;
 var min = 1;
 var max = 9;
 x = imdb.votes;

 var pipeline = [
    {
      $match: {
        year: { $gte: 1990 },
        languages: { $in: ["English"] },
        "imdb.votes": { $gte: 1 },
        "imdb.rating": { $gte: 1 }
      }
    },
    {
      $project: {
        _id: 0,
        title: 1,
        "imdb.rating": 1,
        "imdb.votes": 1,
        normalized_rating: {
          $avg: [
            "$imdb.rating",
            {
              $add: [
                min,
                {
                  $multiply: [
                    max,
                    {
                      $divide: [
                        { $subtract: ["$imdb.votes", x_min] },
                        { $subtract: [x_max, x_min] }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    { $sort: { normalized_rating: -1 } },
    { $limit: 1 }
  ];

  db.movies_sample.aggregate(pipeline).pretty();
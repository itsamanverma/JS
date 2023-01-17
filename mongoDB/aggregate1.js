//The purpose of this lab is use the Aggregation Framework to work with data within arrays, a common operation. In this lab, we will explore the movies_sample collection to see what movies can be categorized as a "labour of love" where the same person appears in the cast,directors, and writers.
//The documents in the movies_sample collection may have multiple entries for films, you do not need to count these duplicate entries.
//In this lab we will provide a $match stage to start your pipeline. The $match stage only returns documents that do not have an array or do not have an empty array for the fields we are interested in.
//We are also going to provide the second stage, a $project stage. This stage removes the _id field and retains the directors and the cast fields. A computed field $writers replaces the previous field after the strings have been cleaned up to assist later processing of this field.
//Your task is to complete the following $project stage using the $gt and the $size operators. Specifically, you find the intersection of cast, writers, directors being greater than 0. This means that will be at least one element in each of those arrays that is identical.
//We will also provide the final stages in this pipeline. These stages use a $match stage, that only allows documents through where labor_of_love is true and a $count stage to count how many labor_of_love films are present.


db.moviee_sample.aggregate([
        {
          $match: {
            cast: { $elemMatch: { $exists: true } },
            directors: { $elemMatch: { $exists: true } },
            writers: { $elemMatch: { $exists: true } }
          }
        },
        {
        $project: {
          _id: 0,
          cast: 1,
          directors: 1,
          writers: {
              $map: {
                input: "$writers",
                as: "writer",
                in: {
                  $arrayElemAt: [
                    { $split: ["$$writer", " ("] }, 0
                  ]
                }
              }
            }
          }
        },
        {
          $project: {
            labor_of_love: {
              $gt: [ { $size: { $setIntersection: ["$cast", "$directors", "$writers"] } }, 0 ]
            }
          }
        },
        {
          $match: { labor_of_love: true }
        },
        {
          $count: "labors of love"
        }
]);
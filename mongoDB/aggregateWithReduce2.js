/**
 * The following example reduces the hobbies array of strings into a single string bio:
 * 
 * */

 db.people.aggregate(
    [
      // Filter to return only non-empty arrays
      { $match: { "hobbies": { $gt: [ ] } } },
      {
        $project: {
          "name": 1,
          "bio": {
            $reduce: {
              input: "$hobbies",
              initialValue: "My hobbies include:",
              in: {
                $concat: [
                  "$$value",
                  {
                    $cond: {
                      if: { $eq: [ "$$value", "My hobbies include:" ] },
                      then: " ",
                      else: ", "
                    }
                  },
                  "$$this"
                ]
              }
            }
          }
        }
      }
    ]
 ).pretty();

 
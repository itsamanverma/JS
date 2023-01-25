/**
 * Applies an expression to each element in an array and combines them into a single value.
 * syntax
 * {
    $reduce: {
        input: <array>,
        initialValue: <expression>,
        in: <expression>
    }
 * }
 */

    db.probability.aggregate(
        [
          {
            $group: {
              _id: "$experimentId",
              "probabilityArr": { $push: "$probability" }
            }
          },
          {
            $project: {
              "description": 1,
              "results": {
                $reduce: {
                  input: "$probabilityArr",
                  initialValue: 1,
                  in: { $multiply: [ "$$value", "$$this" ] }
                }
              }
            }
          }
        ]
      ).pretty();
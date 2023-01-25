/**
 * 
 */

db.clothes.aggregate(
    [
      {
        $project: {
          "discountedPrice": {
            $reduce: {
              input: "$discounts",
              initialValue: "$price",
              in: { $multiply: [ "$$value", { $subtract: [ 1, "$$this" ] } ] }
            }
          }
        }
      }
    ]
).pretty();
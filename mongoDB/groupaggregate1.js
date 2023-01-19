/**
 * 
 */

db.movies.aggregate([
    {
        $group: {
            _id: {
                numDirectors: {
                    $cond: [{ $isArray: "$directors" }, { $size: "$directors" }, 0]
                }
            },
            numFilms: { $sum : 1},
            averageMetacritic: { $avg : "$metacritic" }
        }
    },
    {
        $sort: { "_id.numDirectors": -1}
    }
]).pretty();

/**
 * {
 *      "_id": {
 *               "numDirectors": 0
 *           },
 *           numFilms: 507,
 *           averageMetacritic: 73.28571428571429
 * },
 * {
 *      "_id": {
 *               "numDirectors": 1
 *           },
 *           numFilms: 40378,
 *           averageMetacritic: 56.623365617433414
 * },...!
 */
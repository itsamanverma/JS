db.places.aggregate([
    {
      $geoNear: {
         near: { type: "Point", coordinates: [ -73.99279 , 40.719296 ] },
         distanceField: "dist.calculated",
         maxDistance: 2,
         query: { category: "Parks" },
         includeLocs: "dist.location",
         spherical: true
      }
    }
 ]).pretty();

/**
 * The places collection above has a 2dsphere index. 
 * The following aggregation uses $geoNear to find documents with a location at most 2 meters from the center [ -73.99279 , 40.719296 ] and category equal to Parks
 * dist.calculated field that contains the calculated distance, and
 * dist.location field that contains the location used in the calculation.
 * 
 * {
   "_id" : 8,
   "name" : "Sara D. Roosevelt Park",
   "category" : "Parks",
   "location" : {
      "type" : "Point",
      "coordinates" : [ -73.9928, 40.7193 ]
   },
   "dist" : {
      "calculated" : 0.9539931676365992,
      "location" : {
         "type" : "Point",
         "coordinates" : [ -73.9928, 40.7193 ]
      }
   }
}
 */
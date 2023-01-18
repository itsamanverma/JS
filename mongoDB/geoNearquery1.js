db.places.aggregate([
    {
      $geoNear: {
         near: { type: "Point", coordinates: [ -73.99279 , 40.719296 ] },
         distanceField: "dist.calculated",
         minDistance: 2,
         query: { category: "Parks" },
         includeLocs: "dist.location",
         spherical: true
      }
    }
 ]).pretty();

 /**
  * The following example uses the option minDistance to specify the minimum distance from the center point that the documents can be.
  * The following aggregation finds all documents with a location at least 2 meters from the center [ -73.99279 , 40.719296 ] and category equal to Parks.
  *  { _id: ObjectId("63c774229fd720512cbd24ec"),
  *    name: 'Central Park',
  *    location: { type: 'Point', coordinates: [ -73.97, 40.77 ] },
  *    category: 'Parks',
  *    dist: {
  *            calculated: 5962.597839230235,
  *            location: { type: 'Point', coordinates: [ -73.97, 40.77 ]
  *          }
  *  }                      
  *                                                                                                }
  */
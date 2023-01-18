db.places.aggregate(
    [
       {
          "$geoNear":
          {
             "near":"$$pt",
             "distanceField":"distance",
             "maxDistance":2,
             "query":{"category":"Parks"},
             "includeLocs":"dist.location",
             "spherical":true
          }
       }
    ],
    {
       "let":{ "pt": [ -73.99279, 40.719296 ] }
    }
    )

/**
 * $geoNear with the let option
 * The let option is used to set an array value of [-73.99279,40.719296] to the variable $pt.
 * $pt is specified as a let option to the near parameter in the $geoNear stage.
 * A location at most 2 meters from the point defined in the let variable
 * A category equal to Parks.
 * 
 * 
  {
    _id: ObjectId("63c774229fd720512cbd24ed"),
    name: 'Sara D. Roosevelt Park',
    location: { type: 'Point', coordinates: [ -73.9928, 40.7193 ] },
    category: 'Parks',
    distance: 1.49573253384726e-7,
    dist: { location: { type: 'Point', coordinates: [ -73.9928, 40.7193 ] } }
  },
  {
    _id: ObjectId("63c774229fd720512cbd24ec"),
    name: 'Central Park',
    location: { type: 'Point', coordinates: [ -73.97, 40.77 ] },
    category: 'Parks',
    distance: 0.0009348548688841873,
    dist: { location: { type: 'Point', coordinates: [ -73.97, 40.77 ] } }
  }
 */
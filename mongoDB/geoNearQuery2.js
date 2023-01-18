db.nycFacilities.aggregate([{
    $geoNear: {
        near: {
            type: "Point",
            coordinates: [ -73.98769766092299, 45.757345233626594]
        },
        distanceField: "distanceFromMongoDB",
        spherical: true,
        query: { category: "Hospital" },
        $limit: 5
    }
}])

/**
 * 
 */
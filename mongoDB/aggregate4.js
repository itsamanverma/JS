db.solarsystem.aggregate([
    { $project: { _id:0, name: 1, gravity: 1, mass: 1,radius: 1, sma: 1 } },
    {
        $addFields: {
            gravity: "$gravity.value",
            mass: "$mass.value",
            radius: "$radius.value",
            sma: "$radius.value"
        },
    },
])
.pretty();
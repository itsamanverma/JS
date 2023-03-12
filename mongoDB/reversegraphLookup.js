/**
 * fffff
 */
db.parent_reference.aggregate([
    { $match : 
        { name: 'Shanon' }
    },
    {
        $graphLookup: {
            from: 'parent_reference',
            startWith: '$reports_to',
            connentFromField: 'reports_to',
            connentToField: '_id',
            as: 'bosses'
        }
    }
]).pretty();
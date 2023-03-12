/**
 * 
 */

db.child_reference.aggregate([
    {
        $match: { name: 'Dev' }
    }, 
    {
        $graphLookup: {
            from: 'child_reference',
            startWith: '$direct_reports',
            connectFromField: 'direct_reports',
            connectToField: 'name',
            as: 'descendants',
            maxDepth: 1,
            depthField: 'level'
        }
    }
]).pretty();
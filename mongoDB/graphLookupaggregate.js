/**
 * Performs a recursive search on a collection, with options for restricting the search by recursion depth and query filter.
 * The $graphLookup search process is summarized below:
 * Input documents flow into the $graphLookup stage of an aggregation operation.
 * $graphLookup targets the search to the collection designated by the from parameter (see below for full list of search parameters).
 * For each input document, the search begins with the value designated by startWith.
 * $graphLookup matches the startWith value against the field designated by connectToField in other documents in the from collection.
 * For each matching document, $graphLookup takes the value of the connectFromField and checks every document in the from collection for a matching connectToField value. For each match, $graphLookup adds the matching document in the from collection to an array field named by the as parameter.
 * This step continues recursively until no more matching documents are found, or until the operation reaches a recursion depth specified by the maxDepth parameter. $graphLookup then appends the array field to the input document. $graphLookup returns results after completing its search on all input documents.
 */
 
db.parent_reference.aggregate([
    { $match: { name: 'Eliot'}},
    { $graphLookup: {
        from: 'parent_reference',
        startWith: '$_id',
        connectFromField: '_id',
        connectToField: 'reports_to',
        as: 'all_reports'
    }}
]).pretty();


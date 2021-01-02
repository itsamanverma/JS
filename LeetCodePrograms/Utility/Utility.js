var read = require('readline-sync');

module.exports = {
    inputreadLineArray() {
        var l = read.question("How many element you want enter in array ");
        var arr = new Array(l);

        console.log("Enter " + l + " integer element in array");
        for (let index = 0; index < l; index++) {

            arr[index] = Number(read.question(""));

        }
        return arr;
    },
    input() {
        const readline = require('readline');
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        return rl;
    },
    twoSum(arr, target) {
        let map = new Map;
        for (var i = 0; i < arr.length; i++) {
            let complement = target - arr[i];
            if (map.has(complement)) {
                return [map.get(complement), i]
            }
            map.set(arr[i], i);
        }
    }
}
const read = require('readline-sync');

module.exports = {

    /* create the function to take user input & output */
    input() {
        const readline = require('readline');
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        return rl;
    },
    /* create the module to take user input array */
    inputreadLineArray() {
        let l = read.question('How many element you want enter in array ');
        let arr = new Array(l);

        console.log('Enter ' + l + ' integer Element in the array ');
        for (let index = 0; index < l; index++) {

            arr[index] = Number(read.question(''));
        }
        return arr;
    },
    /*  */
    sortArray(arr) {
        const result = arr.map(item => Math.pow(item, 2));
        console.log(result);
    }
}
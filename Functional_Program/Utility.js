const read = require('readline-sync');

module.exports = {

    input() {
        const readline = require('readline');

        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        return rl;
    },
    /******************************************************************************
     * @description : replace method is define for replace username with string template
     * @param : username
     ******************************************************************************/
    replace(username) {
        let regexp = /[a-d]/gi;
        if (username.length >= 3 && username.match(regexp)) {
            console.log("Hello " + username + " How are you ?");
        } else {
            console.log("Enter the Valid UserName..!");
        }
    },
    /******************************************************************************
     *  @description : checkLeapYear is the function for check the given year is leap year or nt
     *  @param : year
     *
     ******************************************************************************/
    flipCoin(flip) {
        var head = 0, tail = 0;
        for (let i = 0; i < flip; i++) {
            var n = Math.random();
            if (n > 0.5) {
                head++;
            } else {
                tail++;
            }
        }
        var headPer = (head / flip) * 100;
        var tailPer = (tail / flip) * 100;

        console.log("Percentage of head Occurance is " + headPer + "%");
        console.log("Percentage of tail Occurance is " + tailPer + "%");
    },
    /******************************************************************************
     *  @description : checkLeapYear is the function for check the given year is leap year or nt
     *  @param : year
     *
     ******************************************************************************/

    checkLeapYear(year) {
        if (year < 999 || year >= 9999) {
            console.log('Enter valid 4 digit year number');
            return false;
        }
        else {
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                console.log(year + " Year is leap year");
                return true;
            }
            else {
                console.log(year + " Year is not leap year");
                return false;
            }
        }
    },
    /* power function is the function to get the table upto the given pow */
    powerOf2(pow) {
        table = 1;
        if (pow >= 0 && pow < 31) {
            console.log("Table of 2 is ");
            while (pow > 0) {
                table = table * 2;
                console.log(table);
                pow--;
            }
        } else {
            console.log("Please input less than 31");
        }
    },
    /*
    * @description : To generate the nth harmonic numbers by taking input from user.
    * @function : Harmonic function takes user input and give nth hormonic no of user given input.
    */
    nthHarmonic(Number) {
        if (Number != 0) {
            let sum = 0;
            for (let i = 1; i <= Number; i++) {

                sum = sum + 1 / i;
            }
            console.log("Harmonic Number of " + Number + "th Number " + sum);
        } else {
            console.log("Please Enter the correct Number");
        }
    },

    /**
     * @description : calculate the prime factor of number 
     * @function : calPrimeFactor function takes user input and give prime factor no of user given input.
     */
    calPrimeFactor(n) {
        while(n % 2 == 0 ) {
            console.log(2 + " ");
            n = Math.floor(n / 2);
        }

        for (let i = 3; i <= Math.floor(Math.sqrt(n)); i = i + 2) {
            while (n % i == 0)
            {
                console.log(i + " ");
                n = Math.floor(n / i);
            }
        }

        if (n > 2) {
            console.log(n + " ");            
        }
    },
    /**
     * @description : create the module to take user 2d input array
     * @function : 
     */
     user2DArrayInput() {
        let row = read.question('How many row you want in 2d Array ');
        let col = read.question('How many col you want in 2d Array ');
        let arr = new Array();

        console.log('Enter ' + row * col + ' Element in the 2d array ');
        for (let i = 0; i < row; i++) {
            arr[i] = [];
            for (let j = 0; j < col; j++) {
               arr[i][j] = read.question('');
            }
        }
        return arr;
     },
     /* create the module to take user input array */
     inputreadLinearArray() {
         let l = read.question('How many element you want enter in array \n');
         let arr = new Array(l);
 
         console.log('Enter ' + l + ' integer Element in the array ');
         for (let index = 0; index < l; index++) {
 
             arr[index] = Number(read.question(''));
         }
         return arr;
     },
     /**
      * @des
      */
      calTriplets(arr){
        let found = false;
        for (let i = 0; i < arr.length-2; i++) {
            for (let j = i+1; j < arr.length-1; j++){
                for (let k = j+1; k < arr.length; k++) {
                    if (arr[i]+arr[j]+arr[k] == 0) {
                        console.log('{'+ arr[i],arr[j],arr[k]+'}');
                        found = true; 
                    }
                }
            }
            if (found == false) {
                console.log(" not exist");
            }
        }
      }
}

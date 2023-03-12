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
    /* twoSum method is give the index value of given array for the wanted target  
     * 
     * @param  : array ,target
     * @return : array  
     */
    twoSum(arr, target) {
        let map = new Map;
        for (var i = 0; i < arr.length; i++) {
            let complement = target - arr[i];
            if (map.has(complement)) {
                return [map.get(complement), i]
            }
            map.set(arr[i], i);
        }
    },
    /* solution 1*/
    VowelConsonants(s) {
        const userArray = [...s];
        const result = [];

        const newArray = userArray.reduce((target, item) => {
            switch (item) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    target[0].push(item);
                    break;
                default:
                    target[1].push(item);
                    break;
            }

            return target;
        }, [[], []]);
        console.log("newArray:", newArray);
        newArray.reduce((target, item) => {
            target.push(
                item.reduce((target, item) => {
                    result.push(item);

                    return target;
                }, [])
            );
            return target;
        }, []);

        result.map(item => console.log(item));
    },
    /* Solution 2  */
    VowelConsonants1(s) {
        const vowel = ['a', 'e', 'i', 'o', 'u'];
        let { vowels, consonants } = (s.split('') || []).reduce((target, item) => {
            target[vowel.includes(item) ? 'vowels' : 'consonants'].push(item);

            return target;
        }, { vowels: [], consonants: [] });

        vowels.concat(consonants).forEach((item) => {
            console.log(item);
        });
    },
    /* Solution 3 */
    VowelConsonants2(s) {
        const userArray = [...s];
        const result = [];

        const newArray = userArray.reduce((target, item) => {
            switch (item) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    target['vowels'].push(item);
                    break;

                default:
                    target['consonants'].push(item);
                    break;
            }
            return target;
        }, { vowels: [], consonants: [] });

        result = [...newArray['vowels'], ...newArray['consonants']].map(item => console.log(item))
    },
    Regax(s) {
        // Declare a RegExp object variable named 're'
        // It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
        let re = (/^([aieou]).+\1$/g);
        console.log(re.test(s));
    },
    Regax1(s) {
        // Declare a RegExp object variable named 're'
        // It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
        // followed by one or more letters.
        let re = (/^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/g);
        console.log(re.test(s));
    },
    /*  */
    trycatch(str) {
        if (typeof (str) === "string") {
            console.log(str.split('').reverse().join(''));
        } else {
            console.log('str.split is not a funtion' + '\n' + str);
        }
    },
    /*  */
    Throw(num) {
        if (num === 0) {
            throw Error("Zero Error");
        }
        if (num < 0) {
            throw Error('Negative Error');
        }
        return "YES";
    },
    /**
     * LinkList Node Common Function
     * @param val 
     * @param next
     */

    ListNode(val,next){
        this.val = ( val=== undefined? 0: val );
        this.next = ( next=== undefined? null: next );
    }
}   
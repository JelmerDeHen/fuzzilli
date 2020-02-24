function main() {
const v4 = [1337,1337,1337,1337,1337];
const v5 = ["6eRBNoBZtm",129,13.37];
let v6 = v5;
const v9 = [1337,1337,1337,1337,1337];
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        const v15 = {};
        let v16 = v15;
        const v19 = [2153514987,13.37,13.37,13.37,v14];
        let v22 = 0;
        do {
            const v23 = v10(v4);
            const v24 = v22 + 1;
            v22 = v24;
        } while (v22 < 10);
        for (const v25 of "MIN_VALUE") {
            v15.__proto__ = v6;
        }
        const v26 = [v16,v19,v19];
    } catch(v27) {
    }
}
const v28 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
const v30 = new Proxy(v9,v28);
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

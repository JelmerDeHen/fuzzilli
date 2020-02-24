function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
let v5 = v4;
const v8 = [1337,1337,1337,1337,1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        let v16 = 0;
        while (v16 < 3) {
            const v17 = v2.pop();
            const v18 = v16 + 1;
            v16 = v18;
        }
        v4.__proto__ = v13;
    } catch(v19) {
        const v20 = eval(v10);
    }
}
const v21 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v23 = new Proxy(v8,v21);
v23[1] = "MIN_VALUE";
const v25 = new Int16Array(v5);
}
%NeverOptimizeFunction(main);
main();

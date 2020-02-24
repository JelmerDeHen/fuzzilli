function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [v4,v4,2395520983,2395520983];
const v6 = {length:2395520983,b:v4,__proto__:1337,constructor:1337,a:v4,valueOf:v4};
const v9 = [13.37,13.37,2147483649,13.37,13.37];
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        const v19 = [];
        for (let v23 = 0; v23 < 100; v23++) {
            const v24 = v14();
        }
        const v25 = 1337 < v6;
        let v26 = v19;
        const v27 = v19.concat();
        let v29 = 0;
        const v30 = v15.clear(v15,v16,v26,v18);
    } catch(v31) {
    }
}
const v32 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v9};
const v34 = new Proxy(v13,v32);
v34[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

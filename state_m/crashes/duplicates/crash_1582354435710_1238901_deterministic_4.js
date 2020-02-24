function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [v3,1];
const v7 = {__proto__:v5,d:1,length:13.37,toString:"u26Plli18w"};
const v9 = [1337,1337];
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        for (let v22 = 0; v22 < 100; v22++) {
            const v23 = v13(v9,v16,1337);
        }
        const v25 = Symbol.isConcatSpreadable;
        let v27 = 0;
        let v29 = 0;
        for (let v33 = 0; v33 < 100; v33++) {
        }
    } catch(v34) {
    }
}
const v35 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v37 = new Proxy(v12,v35);
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

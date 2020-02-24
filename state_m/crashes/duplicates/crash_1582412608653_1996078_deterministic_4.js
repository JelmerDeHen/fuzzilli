function main() {
const v3 = [13.37,13.37];
const v5 = 1337 * 268435456;
const v6 = [1337,1337,1337];
const v7 = [];
const v8 = {a:v7,c:"undefined",constructor:v6,d:v7,e:v7,toString:v3};
const v10 = [13.37];
const v12 = !v5;
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        for (let v22 = 0; v22 < 100; v22++) {
            const v23 = v14();
        }
        for (const v24 of v8) {
        }
    } catch(v25) {
    }
}
const v26 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v28 = new Proxy(v13,v26);
v28.constructor = v10;
}
%NeverOptimizeFunction(main);
main();

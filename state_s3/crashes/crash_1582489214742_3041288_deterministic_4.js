function main() {
let v2 = "ZpZ3nK*jeU";
const v5 = [13.37];
const v7 = [1337,1337,1337,"xcycrfnQjT",1337];
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v13 = "ZpZ3nK*jeU".trim();
        delete v10.constructor;
        const v14 = v8(v13,Map,v9);
        let v19 = 0;
        while (v19 < 8) {
            const v20 = v8(undefined,v10,1337);
            const v21 = v19 + 1;
            v19 = v21;
        }
        for (const v22 of v14) {
        }
        if (v10) {
            for (const v23 in v2) {
            }
        } else {
        }
        for (const v24 of v11) {
        }
    } catch(v25) {
    }
}
const v26 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
const v28 = new Proxy(v7,v26);
v28.constructor = v5;
}
%NeverOptimizeFunction(main);
main();

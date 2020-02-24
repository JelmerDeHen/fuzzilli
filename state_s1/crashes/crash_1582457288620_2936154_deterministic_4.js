function main() {
const v1 = [13.37,13.37];
const v2 = [v1];
let v3 = v2;
const v6 = [1337,1337,1337,1337,1337];
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        const v15 = [13.37,13.37,13.37,v11,13.37];
        const v17 = [1337,1337,1337,1337,1337];
        const v18 = [v17,v15,v15,13.37];
        const v19 = {__proto__:v18,c:v18};
        const v20 = {e:"yjSMDGTCed",c:v19,valueOf:eval,b:1337};
        for (const v21 in v20) {
        }
        const v22 = v3.some(v7);
        let v23 = v19;
        for (const v25 in "boolean") {
        }
    } catch(v26) {
    }
}
const v27 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
const v29 = new Proxy(v6,v27);
v29[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

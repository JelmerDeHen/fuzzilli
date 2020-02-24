function main() {
let v3 = eval;
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [v4,1337,13.37];
const v7 = {b:"toStringTag",c:v6};
const v11 = [1337,13.37,1337,Uint8Array];
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        const v21 = [1337,1337,1337,1337,1337];
        const v22 = [v21];
        const v23 = v11.reduceRight(v15);
        v7[v3] = v22;
    } catch(v24) {
    }
}
const v25 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v27 = new Proxy(v14,v25);
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    let v10 = 0;
    do {
        const v11 = v10 + 1;
        v10 = v11;
    } while (v10 < 6);
    try {
        const v12 = v3();
    } catch(v13) {
        const v14 = {get:v7};
    }
}
const v15 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v17 = new Proxy(v2,v15);
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

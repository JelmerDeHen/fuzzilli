function main() {
const v1 = [1337,1337,1337,1337,1337];
function v2(v3,v4,v5,v6) {
    'use strict'
    for (const v7 of v3) {
    }
    let v8 = v6;
    try {
        let v9 = v3;
        const v10 = v6[2147483649];
    } catch(v11) {
        let v12 = v5;
        v12.constructor = v3;
    }
    let v14 = 0;
    for (const v15 in v14) {
    }
}
const v16 = {deleteProperty:v2,set:v2,getPrototypeOf:v2,call:v2,preventExtensions:v2,isExtensible:v2,construct:v2,get:v2,ownKeys:v2,setPrototypeOf:v2,has:v2};
const v18 = new Proxy(v1,v16);
const v19 = v18.isArray();
}
%NeverOptimizeFunction(main);
main();

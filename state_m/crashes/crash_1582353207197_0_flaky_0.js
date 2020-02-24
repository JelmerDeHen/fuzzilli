function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v12 = [13.37,13.37];
        const v13 = v12[1024];
        const v14 = {has:gc,construct:v13,defineProperty:v13,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v13,isExtensible:v13,call:v13,set:gc,getOwnPropertyDescriptor:gc};
        let v17 = 0;
        do {
            const v18 = v1.forEach(v5);
            const v19 = v17 + 1;
            v17 = v19;
        } while (v17 < 7);
        const v20 = v6.caller;
    } catch(v21) {
    }
}
const v22 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
const v24 = new Proxy(v4,v22);
v24[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
for (const v5 in "symbol") {
    const v6 = v3.__proto__;
}
const v7 = [1337,1337,1337];
const v8 = [];
const v9 = {d:v7,toString:13.37,__proto__:isNaN,valueOf:"symbol",a:v3,constructor:v7};
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        const v21 = [1337,1337];
        const v23 = new ArrayBuffer();
        let v26 = 0;
        do {
            const v27 = v26 + 1;
            v26 = v27;
        } while (v26 < 4);
        v18.valueOf = v15;
        let v30 = 0;
        const v31 = v30 + 1;
        const v32 = 13.37 >= Uint8Array;
        const v33 = {set:v15,get:v17};
        let v34 = 0;
        const v35 = v34 + 1;
    } catch(v36) {
        const v37 = {construct:v36};
    }
}
const v38 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v40 = new Proxy(v13,v38);
v40[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

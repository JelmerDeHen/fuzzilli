function main() {
const v3 = [1337,13.37,1337,Uint8Array];
let v4 = v3;
const v8 = [1337,1337,13.37,1337,1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        const v16 = [1337,1337];
        const v18 = new ArrayBuffer();
        let v21 = 0;
        do {
            const v22 = v21 + 1;
            v21 = v22;
        } while (v21 < 4);
        let v24 = 0;
        const v25 = v12.slice();
        const v26 = v24 + 1;
        const v27 = [13.37];
        let v29 = v27;
        const v30 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v29,__proto__:1337,a:v27};
        v13[3] = v13;
    } catch(v31) {
        const v32 = {construct:v31};
    }
}
const v33 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v35 = new Proxy(v8,v33);
v35[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

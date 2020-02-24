function main() {
const v1 = [1337,1337];
const v5 = new ArrayBuffer(1337);
const v6 = v5.slice();
const v7 = new DataView(v6);
const v10 = 3156875969 === "pvU0UUjoya";
let v11 = v10;
const v12 = v7.getUint16();
let v13 = v12;
const v14 = !v13;
const v16 = [13.37];
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        let v26 = 0;
        do {
            const v27 = v26 + 1;
            v26 = v27;
        } while (v26 < 7);
        const v28 = v19();
    } catch(v29) {
    }
    const v31 = [13.37,13.37,13.37];
    const v33 = [1337,1337,1337,1337];
    const v34 = {b:v33,e:13.37,constructor:v31,__proto__:v33};
}
const v35 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v37 = new Proxy(v18,v35);
v37.constructor = v16;
}
%NeverOptimizeFunction(main);
main();

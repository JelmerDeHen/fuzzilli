function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337];
const v6 = ["VaK4CcDVom",v5,"VaK4CcDVom"];
const v7 = {d:64,a:v3};
const v8 = {c:v3,constructor:v5,toString:1337,__proto__:64,d:v5,a:1337};
let v9 = v5;
const v13 = [1337,1337,1337,1337,1337];
const v14 = {valueOf:Int32Array,length:13.37,e:13.37,toString:v13,constructor:64};
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        let v25 = 0;
        do {
            const v26 = ~v25;
            const v27 = v25 + 1;
            v25 = v27;
        } while (v25 < 4);
        const v28 = v21.description;
        const v29 = 1337 + 1;
        v22[3] = v22;
    } catch(v30) {
    }
    "VaK4CcDVom".__proto__ = v13;
}
const v31 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v33 = new Proxy(v17,v31);
v33[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

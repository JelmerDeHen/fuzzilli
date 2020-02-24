function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [];
const v7 = {a:v6,constructor:gc};
const v8 = {valueOf:gc,d:"mHrWZWFwGO",a:v6,c:1337,__proto__:1337};
let v9 = v7;
const v13 = [1337,13.37,1337,Uint8Array];
let v14 = v13;
const v16 = [1337,1337,1337,1337,1337];
const v17 = v13.indexOf();
const v18 = 1337 * v8;
const v19 = {valueOf:v16,__proto__:v16};
const v22 = [1337,1337,1337,1337,1337];
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        const v31 = new ArrayBuffer();
        let v34 = 0;
        do {
            const v35 = v34 + 1;
            v34 = v35;
        } while (v34 < 4);
        const v36 = v23();
        const v37 = v27.__proto__;
        let v39 = 0;
        const v40 = v31.slice();
        const v41 = v39 + 1;
        const v42 = [13.37];
        const v44 = [1337,13.37,v42,-1155643050];
        let v45 = v42;
        const v47 = [1337,1337];
    } catch(v48) {
    }
}
const v49 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v51 = new Proxy(v22,v49);
v51[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

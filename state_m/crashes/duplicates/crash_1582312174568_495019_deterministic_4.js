function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = ["string",v4,v4];
const v8 = {__proto__:v4,d:2065942579,toString:v6,length:13.37,e:v7,b:"string"};
const v9 = {b:v6,a:v7};
let v10 = 2065942579;
const v12 = 2065942579 + v6;
const v14 = new ArrayBuffer();
const v15 = v14.__proto__;
const v16 = ~ArrayBuffer;
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    let v25 = 0;
    function v26(v27,v28) {
        return v21;
    }
    let v31 = 0;
    while (v31 < 1337) {
        const v32 = v31 + 1;
        v31 = v32;
    }
    let v34 = 0;
    try {
        let v36 = 0;
        const v37 = v19(0,v36,13.37);
        const v38 = v36 + 1;
        const v39 = String.fromCharCode();
    } catch(v40) {
    }
}
const v41 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v43 = new Proxy(v18,v41);
v43[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = ["MAX_VALUE",v5,isNaN,1337];
const v7 = {__proto__:13.37,valueOf:v6,d:"MAX_VALUE",c:v3,a:13.37,b:v5};
const v8 = {e:isNaN,b:1337,valueOf:1337,d:1337,c:"MAX_VALUE",a:v5};
let v9 = v8;
const v12 = [13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [v14,1337];
const v18 = (-2.2250738585072014e-308).toLocaleString();
for (const v20 in "object") {
    const v23 = [1337,1337,1337,1337,1337];
    function v24(v25,v26,v27,v28) {
        'use strict'
        try {
            v28[3] = v28;
        } catch(v29) {
            const v34 = [1337,1337,1337];
            const v35 = [3664180981,3664180981,"string","string"];
            const v36 = {valueOf:v35,length:v34,toString:parseFloat,constructor:"string",c:parseFloat};
            const v37 = (3664180981).__proto__;
            const v40 = [v24];
            const v42 = [255,255,255];
            let v44 = 0;
            const v45 = {a:255,toString:arguments,c:v40,__proto__:v42,valueOf:DataView,constructor:v36};
        }
        return v23;
    }
    const v46 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
    const v48 = new Proxy(v23,v46);
    v48[1] = "MIN_VALUE";
}
let v49 = 13.37;
const v50 = "MAX_VALUE" != v14;
let v51 = v50;
const v52 = Number();
const v53 = [];
const v55 = Symbol.search;
const v56 = "toPrimitive"[v55];
const v57 = isNaN();
}
%NeverOptimizeFunction(main);
main();

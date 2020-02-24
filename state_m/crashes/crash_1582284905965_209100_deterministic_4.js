function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [v5,1073741824,Int8Array,Int8Array];
const v7 = {};
const v8 = {__proto__:v3,b:v6};
for (const v10 in "object") {
    const v13 = [1337,1337,1337,1337,1337];
    function v14(v15,v16,v17,v18) {
        'use strict'
        try {
            let v20 = 0;
            const v22 = new Float32Array();
            v18[3] = v18;
        } catch(v23) {
            const v25 = Symbol.toPrimitive;
            const v28 = ["EXkcpBKht7"];
            let v29 = "EXkcpBKht7";
            const v30 = v28.includes(v29,-2695425644);
            const v32 = [1337,1337];
            const v35 = "unscopable".concat();
            const v36 = [-372074.99096011615,v32,-372074.99096011615];
            const v40 = [];
            const v41 = Object.freeze();
            let v44 = 0;
            const v45 = v44 + 1;
            const v46 = Object.getOwnPropertyDescriptors(v40);
            const v47 = v45 === 1;
            const v50 = [13.37,13.37,13.37,JSON];
            const v52 = [1337,1337,1337];
            const v53 = [1337,v50,13.37,v50];
            const v54 = {__proto__:v52,length:v53,valueOf:"byteOffset",c:v53,toString:2824363247,a:"byteOffset"};
        }
        return v13;
    }
    const v55 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
    const v57 = new Proxy(v13,v55);
    v57[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

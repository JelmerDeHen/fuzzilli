function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = [1337,"boolean",13.37,Map];
const v8 = {c:1337,b:Map};
const v9 = {b:v4,__proto__:v8,c:4294967297,a:"boolean",constructor:v8};
let v10 = v6;
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[9] = v20;
        } catch(v21) {
            let v23 = 0;
            const v24 = v23 + 1;
            const v27 = 2.2250738585072014e-308 / 3890419937;
            const v28 = [v27];
            let v29 = v28;
            const v31 = Math.acosh(v29);
        }
        return v15;
    }
    const v32 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v34 = new Proxy(v15,v32);
    let v36 = "unscopable";
    try {
        const v40 = [13.37,13.37];
        const v41 = v36[1024];
        const v43 = Symbol.toStringTag;
        const v44 = {has:Uint8Array,construct:v41,defineProperty:v41,deleteProperty:Uint8Array,setPrototypeOf:Uint8Array,preventExtensions:v41,isExtensible:v41,call:v41,set:Uint8Array,getOwnPropertyDescriptor:Uint8Array};
        const v46 = Proxy();
        const v47 = Reflect.defineProperty(Symbol,v46,v43);
        let v49 = 0;
        try {
            const v51 = "/Y6Q9W.clJ"[v49];
            let v52 = v51;
        } catch(v53) {
        }
    } catch(v54) {
    }
    v34[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v7 = [1337,1337,1337,1337,1337];
const v8 = {valueOf:v7,__proto__:v7};
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        let v20 = 0;
        do {
            let v23 = 0;
            do {
                const v24 = v23 + 1;
                v23 = v24;
            } while (v23 < 3);
            const v25 = v20 + 1;
            v20 = v25;
        } while (v20 < 5);
        const v26 = v12();
        const v27 = [1337,1337];
        const v30 = ArrayBuffer();
        const v31 = v30.slice();
        let v32 = v16;
        const v33 = DataView();
        const v34 = v8();
    } catch(v35) {
    }
}
const v36 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v38 = new Proxy(v11,v36);
v38[1] = "MIN_VALUE";
const v39 = [1337,1337];
const v40 = [Map,Map];
const v41 = {__proto__:v39,e:v4,valueOf:1337,toString:"string",b:Map};
const v42 = {c:v41,b:v40,e:2147483649,__proto__:2147483649,constructor:v39};
let v43 = v40;
let v45 = "unscopable";
const v49 = [13.37,13.37];
const v50 = v45[1024];
const v52 = NaN.toStringTag;
const v53 = {has:Uint8Array,construct:v50,defineProperty:v50,deleteProperty:Uint8Array,setPrototypeOf:Uint8Array,preventExtensions:v50,isExtensible:v50,call:v50,set:Uint8Array,getOwnPropertyDescriptor:Uint8Array};
const v55 = Proxy();
const v56 = Reflect.defineProperty();
}
%NeverOptimizeFunction(main);
main();

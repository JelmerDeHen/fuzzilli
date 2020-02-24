function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337];
const v9 = new Uint8ClampedArray(48925);
const v10 = Uint8ClampedArray / v6;
const v11 = [v6,v4,5];
const v12 = {a:v11,c:v11,e:JSON,b:5,constructor:5,valueOf:v11,d:1337};
const v13 = {a:v12,toString:v11,__proto__:1337};
let v14 = v11;
for (const v16 in "object") {
    const v19 = [1337,1337,1337,1337,1337];
    function v20(v21,v22,v23,v24) {
        'use strict'
        try {
            v24[3] = v24;
        } catch(v25) {
            try {
                const v28 = [13.37,13.37];
                const v29 = v28[1024];
                v6[v28] = v21;
                const v30 = {has:Function,construct:v29,toString:v29,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v29,isExtensible:v29,call:v29,set:Function,getOwnPropertyDescriptor:Function};
                const v32 = new Proxy(v28,v30);
                for (const v33 in v32) {
                }
            } catch(v34) {
            }
            function v35(v36,v37) {
                for (const v39 in "boolean") {
                    let v42 = 0;
                    do {
                        const v43 = v42 + 1;
                        v42 = v43;
                    } while (v42 < 8);
                }
                return v20;
            }
            const v44 = v35();
        }
        return v19;
    }
    const v45 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
    const v47 = new Proxy(v19,v45);
    v47[1] = "MIN_VALUE";
}
let v53 = 0;
const v54 = v53 + 1;
v53 = v54;
}
%NeverOptimizeFunction(main);
main();

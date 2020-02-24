function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337];
const v7 = [];
const v8 = {valueOf:WeakMap,d:v4,c:v7,length:1337,constructor:-119970382};
const v9 = {toString:v7,valueOf:1337,e:"symbol",length:v7,b:"symbol",constructor:v8,a:v8};
let v10 = v4;
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[3] = v20;
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
    let v36 = 13.37;
    const v38 = [1337];
    const v41 = [-1825918256];
    let v42 = v41;
    const v45 = [1337,1337,1337,1337,1337];
    function v46(v47,v48,v49,v50) {
        'use strict'
    }
    const v51 = {deleteProperty:v46,set:v46,getPrototypeOf:v46,call:v46,preventExtensions:v46,isExtensible:v46,construct:v46,get:v46,ownKeys:v46,setPrototypeOf:v46,has:v46};
    const v53 = new Proxy(v45,v51);
    const v54 = [1337,Infinity,Infinity];
    const v55 = [v42,v54];
    const v56 = v55.toLocaleString();
    const v57 = {c:v56,d:v54};
    v34[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

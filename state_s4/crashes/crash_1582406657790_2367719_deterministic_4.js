function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [13.37];
const v7 = {a:"byteOffset",valueOf:v3};
const v8 = {d:v3,a:Int8Array,length:1337,toString:Int8Array,valueOf:Int8Array};
let v9 = v5;
const v11 = [];
const v12 = {length:v11,constructor:v11,b:-35834991};
let v14 = 0;
for (const v15 in v9) {
    const v18 = [1337,v15,1337,1337,1337];
    function v19(v20,v21,v22,v23) {
        'use strict'
        try {
            v23[3] = v23;
        } catch(v24) {
            let v26 = 0;
            const v27 = v26 + 1;
            const v29 = 2.2250738585072014e-308 / v27;
            const v31 = [13.37];
            const v34 = [13.37,13.37,13.37,13.37];
            const v36 = [1337,1337];
            const v37 = [v34];
            const v38 = {valueOf:Int16Array,length:v36,__proto__:v37,b:v34};
            const v40 = new Map();
            const v41 = v40.entries();
            const v44 = [5.0];
            const v45 = [v44,v31,3779702335];
            function v46(v47,v48) {
            }
            const v49 = v46();
            const v50 = v46();
            const v51 = v46();
            const v52 = [v29];
        }
        return "MIN_VALUE";
    }
    const v53 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
    const v55 = new Proxy(v18,v53);
    v55[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

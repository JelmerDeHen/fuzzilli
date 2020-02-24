function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [1337,"MIN_SAFE_INTEGER",v3,13.37];
const v7 = {a:eval,b:v6,e:"MIN_SAFE_INTEGER",valueOf:v6,c:"MIN_SAFE_INTEGER",constructor:v3,d:13.37};
const v8 = {c:13.37};
let v9 = v6;
function v10(v11,v12) {
    let v16 = 0;
    do {
        const v17 = v16 + 1;
        const v18 = [v3];
        let v22 = -1024;
        const v24 = {set:eval,get:gc};
        const v26 = Object.defineProperty(v18,"__proto__",v24);
        const v27 = v22 + 1;
        const v28 = [13.37,13.37,13.37,13.37,13.37];
        const v29 = [v28,v28,v28];
        const v30 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v28,__proto__:v29};
        const v32 = [1337];
        let v34 = 0;
        let v35 = v32;
        const v36 = [v16];
        const v39 = arguments + 1;
        const v41 = [1337,1337,"MIN_VALUE",1337,1337];
        function v42(v43,v44,v45,v46) {
            'use strict'
            try {
                let v49 = 0;
                while (v49 <= 4) {
                    const v50 = v49 + 1;
                    v49 = v50;
                }
                v46[3] = 0;
            } catch(v51) {
                let v52 = v39;
                const v53 = [];
                const v54 = {a:v53};
                const v55 = {__proto__:v46,constructor:v54,length:v53};
            }
            return v46;
        }
        const v56 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:1337,has:v42};
        const v58 = new Proxy(v41,v56);
        v58[1] = "MIN_VALUE";
        let v60 = undefined;
        const v61 = [v30];
    } while (v16 < 8);
}
const v63 = [1337];
let v64 = v63;
const v65 = v10(v64);
}
%NeverOptimizeFunction(main);
main();

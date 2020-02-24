function main() {
const v1 = [13.37,13.37,13.37];
const v5 = [1337,13.37,1337,Uint8Array];
let v6 = v5;
const v8 = [1337,1337,1337,1337,1337];
const v9 = {valueOf:v8,__proto__:v8};
let v11 = 13.37;
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        const v23 = [1337,1337];
        const v25 = new ArrayBuffer();
        v11 = v18;
        let v28 = 0;
        do {
            const v29 = v28 + 1;
            v28 = v29;
        } while (v28 < 4);
        let v32 = 0;
        const v33 = v25.slice(v11,4);
        const v34 = v32 + 1;
        const v35 = [13.37];
        const v37 = [1337,13.37,v35,-1155643050];
        let v38 = v35;
        const v40 = [1337,1337];
        const v41 = {valueOf:1337,b:v6,e:1337,d:1337,constructor:v38,__proto__:1337,a:v35};
        const v43 = [1337,1337,1337,1337,1337];
        const v44 = [v43];
        const v45 = v40[-4096];
        const v46 = v37[-3357639552];
        const v47 = 13.37 == v37;
        const v49 = !0;
        const v50 = v17 / 1337;
        for (const v51 of v17) {
            const v52 = {toString:v51,c:v1};
        }
        let v53 = 0;
        const v54 = v38.flat();
        v19[3] = v19;
        const v55 = v9();
        const v56 = v55[-2900725722];
    } catch(v57) {
        const v58 = {construct:v57};
    }
}
const v59 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v61 = new Proxy(v14,v59);
v61[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

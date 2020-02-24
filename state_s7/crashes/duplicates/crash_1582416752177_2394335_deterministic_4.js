function main() {
const v1 = [13.37,13.37];
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
        const v35 = v25 * v1;
        let v38 = 0;
        const v39 = v19 * 1;
        const v40 = v38 + 1;
        const v41 = [13.37];
        const v43 = [1337,13.37,v41,-1155643050];
        let v44 = v41;
        const v46 = [1337,1337];
        const v47 = {valueOf:1337,b:v6,e:1337,d:1337,constructor:v44,__proto__:1337,a:v41};
        const v49 = [1337,1337,1337,1337,1337];
        const v50 = [v49];
        const v51 = v46[-4096];
        const v52 = v43[-3357639552];
        const v53 = 13.37 == v43;
        let v55 = 0;
        const v56 = v44.flat();
        const v57 = v9();
        const v58 = v57[-2900725722];
        let v60 = 0;
    } catch(v61) {
        const v62 = {construct:v61};
    }
}
const v63 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v65 = new Proxy(v14,v63);
v65[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

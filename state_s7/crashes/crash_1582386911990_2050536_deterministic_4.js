function main() {
const v1 = 65536 == 65536;
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
        let v31 = 0;
        const v32 = v25.slice(v11);
        const v33 = v31 + 1;
        const v34 = [13.37];
        const v36 = [1337,13.37,v34,-1155643050];
        let v37 = v34;
        const v39 = [1337,1337];
        const v40 = {valueOf:1337,b:v6,e:1337,d:1337,constructor:v37,__proto__:1337,a:v34};
        const v42 = [1337,1337,1337,1337,1337];
        const v43 = [v42];
        const v44 = v39[-4096];
        const v45 = v36[-3357639552];
        const v46 = 13.37 == v36;
        let v48 = 0;
        const v49 = v37.flat();
        v19[3] = v19;
        const v50 = v9();
        const v51 = v50[-2900725722];
        const v54 = Uint32Array();
        const v56 = v54.slice(Uint8Array,234126503);
        let v58 = 0;
    } catch(v59) {
        const v60 = {construct:v59};
    }
}
const v61 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v63 = new Proxy(v14,v61);
v63[1] = "MIN_VALUE";
for (const v65 of "toPrimitive") {
    const v66 = "toPrimitive" + 1;
}
}
%NeverOptimizeFunction(main);
main();

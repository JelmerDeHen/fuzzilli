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
        const v48 = v19[v19];
        const v49 = ArrayBuffer[0];
        const v50 = v1.indexOf();
        let v51 = 0;
        const v52 = ~Uint8Array;
        const v53 = v36 in v40;
        const v54 = v37.flat();
        const v55 = v9();
        const v56 = v55[-2900725722];
        let v58 = 0;
    } catch(v59) {
        const v60 = {construct:v59};
    }
}
const v61 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v63 = new Proxy(v14,v61);
v63[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

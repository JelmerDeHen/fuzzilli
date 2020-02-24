function main() {
const v4 = [1337,13.37,1337,Uint8Array];
let v5 = v4;
const v7 = [1337,1337,1337,1337,1337];
const v8 = {valueOf:v7,__proto__:v7};
let v10 = 13.37;
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        const v22 = [1337,1337];
        const v24 = new ArrayBuffer();
        v10 = v17;
        let v27 = 0;
        do {
            const v28 = v27 + 1;
            v27 = v28;
        } while (v27 < 4);
        let v31 = 0;
        const v32 = v24.slice(v10,4);
        const v33 = v31 + 1;
        const v34 = [13.37];
        const v36 = Symbol.toStringTag;
        const v37 = v24[v36];
        const v39 = [1337,13.37,v34,-1155643050];
        let v40 = v34;
        const v42 = [1337,1337];
        const v43 = {valueOf:1337,b:v5,e:1337,d:1337,constructor:v40,__proto__:1337,a:v34};
        const v45 = [1337,1337,1337,1337,1337];
        const v46 = [v45];
        const v47 = v42[-4096];
        const v48 = v39[-3357639552];
        const v49 = 13.37 == v39;
        let v51 = 0;
        const v52 = v40.flat();
        v18[3] = v18;
        const v53 = v8();
        const v54 = v53[-2900725722];
        let v56 = 0;
    } catch(v57) {
        const v58 = {construct:v57};
    }
}
const v59 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v61 = new Proxy(v13,v59);
v61[1] = "MIN_VALUE";
let v63 = 0;
for (let v67 = 0; v67 < 100; v67++) {
}
for (const v68 of "DNdl9gYePe") {
}
}
%NeverOptimizeFunction(main);
main();

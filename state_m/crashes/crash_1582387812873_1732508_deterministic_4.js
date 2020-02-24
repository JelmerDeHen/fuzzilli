function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [v2,1337,Array];
const v6 = {b:13.37,a:v4,d:13.37,valueOf:v4};
const v10 = [1337,13.37,1337,Uint8Array];
let v11 = v10;
const v13 = [1337,1337,1337,1337,1337];
const v14 = {valueOf:v13,__proto__:v13};
let v16 = 13.37;
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        const v28 = [1337,1337];
        const v30 = new ArrayBuffer();
        v16 = v23;
        let v33 = 0;
        do {
            const v34 = 4 << v28;
            const v35 = new Uint8Array(v34);
            const v36 = v33 + 1;
            v33 = v36;
        } while (v33 < 4);
        let v39 = 0;
        const v40 = v30.slice(v16,4);
        const v41 = v39 + 1;
        const v42 = [13.37];
        const v44 = [1337,13.37,v42,-1155643050];
        let v45 = v42;
        const v47 = [1337,1337];
        const v48 = {valueOf:1337,b:v11,e:1337,d:1337,constructor:v45,__proto__:1337,a:v42};
        const v50 = [1337,1337,1337,1337,1337];
        const v51 = [v50];
        const v52 = v47[-4096];
        const v53 = v44[-3357639552];
        const v54 = 13.37 == v44;
        let v56 = 0;
        const v57 = v45.flat();
        v24[3] = v24;
        const v58 = v14();
        const v59 = v58[-2900725722];
        let v61 = undefined;
        const v62 = v5.constructor;
        const v63 = v6.toLocaleString(v10,4,v30,1337,v22);
        let v65 = 0;
    } catch(v66) {
        const v67 = {construct:v66};
    }
}
const v68 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v70 = new Proxy(v19,v68);
v70[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

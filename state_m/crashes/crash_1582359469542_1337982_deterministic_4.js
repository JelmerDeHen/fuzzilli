function main() {
const v2 = ["string"];
const v3 = {d:v2,length:Boolean,c:Boolean,a:Boolean};
const v7 = [1337,13.37,1337,Uint8Array];
let v8 = v7;
const v10 = [1337,1337,1337,1337,1337];
const v11 = {valueOf:v10,__proto__:v10};
let v13 = 13.37;
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        const v25 = [1337,1337];
        const v27 = new ArrayBuffer();
        v13 = v20;
        let v30 = 0;
        do {
            v18.toString = v20;
            v3.__proto__ = v10;
            const v31 = ~ArrayBuffer;
            const v32 = v30 + 1;
            v30 = v32;
        } while (v30 < 4);
        let v34 = 0;
        const v35 = v27.slice(v13);
        const v36 = v34 + 1;
        const v37 = [13.37];
        const v39 = [1337,13.37,v37,-1155643050];
        let v40 = v37;
        const v42 = [1337,1337];
        const v43 = {valueOf:1337,b:v8,e:1337,d:1337,constructor:v40,__proto__:1337,a:v37};
        const v45 = [1337,1337,1337,1337,1337];
        const v46 = [v45];
        const v47 = v42[-4096];
        const v48 = v39[-3357639552];
        const v49 = 13.37 == v39;
        let v51 = 0;
        const v52 = v40.flat();
        v21[3] = v21;
        const v53 = v11();
    } catch(v54) {
        const v55 = {construct:v54};
    }
}
const v56 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v58 = new Proxy(v16,v56);
v58[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

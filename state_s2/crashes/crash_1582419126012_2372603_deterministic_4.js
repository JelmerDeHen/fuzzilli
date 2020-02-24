function main() {
const v4 = [1337,13.37,1337,Uint8Array];
let v5 = v4;
const v9 = [1337,1337,1337,1337,1337];
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        const v18 = [1337,1337];
        const v20 = new ArrayBuffer();
        let v23 = 0;
        do {
            const v24 = v23 + 1;
            v23 = v24;
        } while (v23 < 4);
        let v26 = 0;
        const v27 = {deleteProperty:v10,apply:v10};
        const v29 = new Proxy(v11,v27);
        const v30 = v27.apply(v27,v29,0);
        const v31 = v14.sin();
        const v32 = v18.keys();
        const v33 = v26 + 1;
        const v34 = [13.37];
        const v36 = [1337,13.37,v34,-1155643050];
        let v37 = v34;
        const v39 = [1337,1337];
        const v40 = {valueOf:1337,b:v5,e:1337,d:1337,constructor:v37,__proto__:1337,a:v34};
        const v42 = [1337,1337,1337,1337,1337];
        const v43 = [v42];
        const v44 = v39[-4096];
        const v45 = v36[-3357639552];
    } catch(v46) {
    }
}
const v47 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:Int8Array,setPrototypeOf:v10,has:v10};
const v49 = new Proxy(v9,v47);
v49[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

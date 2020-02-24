function main() {
let v1 = 0;
const v2 = v1 + 1;
const v4 = ~"POSITIVE_INFINITY";
let v7 = 0;
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
            const v34 = v33 + 1;
            v33 = v34;
        } while (v33 < 4);
        let v36 = 0;
        const v37 = v30.slice(v16);
        const v38 = v36 + 1;
        const v39 = [13.37];
        const v41 = [1337,13.37,v39,-1155643050];
        let v42 = v39;
        const v44 = [1337,1337];
        const v45 = {valueOf:1337,b:v11,e:1337,d:1337,constructor:v42,__proto__:1337,a:v39};
        const v47 = [1337,1337,1337,1337,1337];
        const v48 = [v47];
        v24[3] = v24;
    } catch(v49) {
        const v50 = v23 + 1;
    }
}
const v51 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v53 = new Proxy(v19,v51);
v53[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

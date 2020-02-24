function main() {
const v4 = [1492208307,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = ["undefined",1492208307,"undefined"];
const v8 = {__proto__:v4,b:v7,e:ArrayBuffer,a:ArrayBuffer,length:1492208307,d:ArrayBuffer};
const v9 = {d:1337,e:v8,constructor:1337,length:1492208307,b:v4};
let v10 = v4;
const v14 = [1337,13.37,1337,Uint8Array];
let v15 = v14;
const v17 = [1337,1337,1337,1337,1337];
const v18 = {valueOf:v17,__proto__:v17};
let v20 = 13.37;
const v22 = new Int16Array();
const v24 = v22.slice();
const v27 = [1337,1337,1337,1337,1337];
function v28(v29,v30,v31,v32) {
    'use strict'
    try {
        const v33 = v20[v30];
        const v38 = new ArrayBuffer();
        v20 = v31;
        let v41 = 0;
        do {
            const v42 = "MIN_VALUE" <= v30;
            const v44 = [1337,1337,1337];
            const v45 = v41 + 1;
            v41 = v45;
        } while (v41 < 4);
        let v47 = 0;
        const v48 = v38.slice(v20);
        const v49 = v47 + 1;
        const v50 = [1337];
        const v52 = [1337,13.37,v50,-1155643050];
        let v53 = v50;
        const v55 = [1337,1337];
        const v56 = {valueOf:1337,b:v15,e:1337,d:1337,constructor:v53,__proto__:1337,a:v50};
        const v58 = [1337,1337,1337,1337,1337];
        const v59 = [v58];
        const v60 = v55[-4096];
        const v61 = v32[-3357639552];
        const v62 = 13.37 == v52;
        let v64 = 0;
        const v65 = v53.flat();
        for (let v69 = 0; v69 < 100; v69++) {
            const v70 = v30();
        }
        const v71 = v29 && v52;
        let v73 = 0;
        const v74 = v73 + 1;
    } catch(v75) {
    }
}
const v76 = {deleteProperty:v28,set:v28,getPrototypeOf:v28,call:v28,preventExtensions:v28,isExtensible:v28,construct:v28,get:v28,ownKeys:1337,setPrototypeOf:v28,has:v28};
const v78 = new Proxy(v27,v76);
v78[1] = v76;
}
%NeverOptimizeFunction(main);
main();

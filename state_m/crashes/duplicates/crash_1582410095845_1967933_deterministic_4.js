function main() {
const v2 = {e:13.37,d:"d"};
let v5 = 0;
const v6 = v2 === 0;
const v7 = v5 + 1;
const v8 = v6 / v7;
const v9 = 0 << v8;
const v11 = [13.37,13.37];
const v12 = [];
const v16 = [1337,13.37,1337,Uint8Array];
let v17 = v16;
const v19 = [1337,1337,1337,1337,1337];
const v20 = {valueOf:v19,__proto__:v19};
let v22 = 13.37;
const v25 = [1337,1337,1337,1337,1337];
function v26(v27,v28,v29,v30) {
    'use strict'
    try {
        const v34 = [1337,1337];
        const v36 = new ArrayBuffer();
        v22 = v29;
        let v39 = 0;
        do {
            const v40 = v39 + 1;
            v39 = v40;
        } while (v39 < 4);
        const v43 = new Uint16Array();
        const v44 = v43.slice();
        let v45 = -2523426146;
        const v46 = v36.slice(v22);
        const v47 = v45 + 1;
        const v48 = [13.37];
        const v50 = [1337,13.37,v48,-1155643050];
        let v51 = v48;
        const v53 = [1337,1337];
        const v54 = {valueOf:1337,b:v17,e:1337,d:1337,constructor:v51,__proto__:1337,a:v48};
        const v56 = [1337,1337,1337,1337,1337];
        const v57 = [v56];
        const v58 = v53[-4096];
        const v59 = v50[-3357639552];
        const v60 = 13.37 == v50;
        let v62 = 0;
        const v63 = v51.flat();
        v30[3] = v30;
        const v64 = v20();
        const v65 = v64[-2900725722];
        let v67 = undefined;
        for (const v68 of v12) {
            for (const v69 in v68) {
            }
        }
    } catch(v70) {
        const v71 = {construct:v70};
    }
}
const v72 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
const v74 = new Proxy(v25,v72);
v74[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337];
const v4 = [v1];
const v8 = [1337,13.37,1337,Uint8Array];
let v9 = v8;
const v11 = [1337,1337,1337,1337,1337];
const v12 = {valueOf:v11,__proto__:v11};
let v14 = 13.37;
let v17 = -849961.8330764936;
const v19 = [13.37,13.37];
const v20 = {__proto__:v19};
const v25 = [1337,1337];
const v26 = [undefined,13.37,2];
let v27 = v25;
const v28 = {get:undefined};
const v30 = Object.seal();
const v32 = v26.includes(v17,v27,v26,"name");
const v34 = [1337,1337,1337,1337,1337];
function v35(v36,v37,v38,v39) {
    'use strict'
    try {
        const v43 = [1337,1337];
        const v45 = new ArrayBuffer();
        v14 = v38;
        let v48 = 0;
        do {
            const v49 = v48 + 1;
            v48 = v49;
        } while (v48 < 4);
        let v52 = 0;
        const v53 = v45.slice(v14,4);
        const v54 = v52 + 1;
        const v55 = [13.37];
        const v57 = [1337,13.37,v55,-1155643050];
        let v58 = v55;
        const v60 = [1337,1337];
        const v61 = {valueOf:1337,b:v9,e:1337,d:1337,constructor:v58,__proto__:1337,a:v55};
        function v63(v64,v65,v66,v67,...v68) {
        }
        const v69 = v63(1337);
        const v71 = [1337,1337,1337,1337,1337];
        const v72 = [v71];
        const v73 = v60[-4096];
        const v74 = v57[-3357639552];
        const v75 = 13.37 == v57;
        let v77 = 0;
        const v78 = v58.flat();
        v39[3] = v39;
        const v79 = v12();
        const v80 = v79[-2900725722];
        let v82 = 0;
    } catch(v83) {
        const v84 = {construct:v83};
    }
}
const v85 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
const v87 = new Proxy(v34,v85);
v87[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

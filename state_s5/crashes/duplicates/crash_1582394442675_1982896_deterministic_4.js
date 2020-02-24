function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [];
const v7 = {__proto__:1337,toString:1337,length:NaN,valueOf:13.37};
const v8 = {b:255,constructor:v5,__proto__:255,valueOf:1337,length:1337};
const v9 = NaN + 1;
const v10 = v7[255];
let v11 = v8;
let v12 = 13.37;
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
        let v42 = 0;
        const v43 = v36.slice(v22);
        const v44 = v42 + 1;
        const v45 = [13.37];
        const v47 = [1337,13.37,v45,-1155643050];
        let v48 = v45;
        const v50 = [1337,1337];
        const v51 = {valueOf:1337,b:v17,e:1337,d:1337,constructor:v48,__proto__:1337,a:v45};
        const v53 = [1337,1337,1337,1337,1337];
        const v55 = new Float32Array();
        const v58 = v55.slice(10,1337);
        const v59 = [v53];
        const v60 = v50[-4096];
        const v61 = v47[-3357639552];
        const v62 = 13.37 == v47;
        let v64 = 0;
        const v65 = v48.flat();
        v30[3] = v30;
        const v66 = v20();
        const v67 = v66[-2900725722];
        let v68 = v28;
    } catch(v69) {
        const v70 = {construct:v69};
    }
}
const v71 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
const v73 = new Proxy(v25,v71);
v73[1] = "MIN_VALUE";
const v74 = ~1337;
const v76 = {get:v73};
const v78 = Object.defineProperty(v5,2052507107);
const v79 = v5.includes();
const v80 = v25.shift();
}
%NeverOptimizeFunction(main);
main();

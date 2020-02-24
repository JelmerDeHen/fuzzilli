function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [13.37,13.37];
const v7 = {constructor:v5,c:13.37,e:v3,a:v6,valueOf:gc};
const v8 = {valueOf:v7,toString:"arguments"};
let v9 = "arguments";
let v11 = 0;
const v12 = v11 + 1;
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
        const v45 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
        const v47 = new Float32Array();
        const v48 = v47.slice();
        const v49 = v42 + 1;
        const v50 = [13.37];
        const v52 = [1337,13.37,v50,-1155643050];
        let v53 = v50;
        const v55 = [1337,1337];
        const v56 = {valueOf:1337,b:v17,e:1337,d:1337,constructor:v53,__proto__:1337,a:v50};
        const v58 = [1337,1337,1337,1337,1337];
        const v59 = [v58];
        const v60 = v55[-4096];
        const v61 = v52[-3357639552];
        const v62 = 13.37 == v52;
        let v64 = 0;
        const v65 = v53.flat();
        v30[3] = v30;
        const v66 = v20();
        const v67 = v66[-2900725722];
        let v69 = 0;
    } catch(v70) {
        const v71 = {construct:v70};
    }
}
const v72 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
const v74 = new Proxy(v25,v72);
v74[1] = "MIN_VALUE";
let v76 = 0;
const v77 = v76 + 1;
const v79 = [1337,1337];
const v82 = ArrayBuffer();
const v83 = v82.slice();
let v85 = undefined;
const v86 = DataView();
}
%NeverOptimizeFunction(main);
main();

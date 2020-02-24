function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = [1337,"boolean",13.37,Map];
const v8 = {c:1337,b:Map};
const v9 = {length:v4,__proto__:v8,c:4294967297,a:"boolean",constructor:v8};
const v13 = [1337,13.37,1337,Uint8Array];
let v14 = v13;
const v16 = [1337,1337,1337,1337,1337];
const v17 = {valueOf:v16,__proto__:v16};
let v19 = 13.37;
const v22 = [1337,1337,1337,1337,1337];
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        const v31 = [1337,1337];
        const v33 = new ArrayBuffer();
        v19 = v26;
        let v36 = 0;
        do {
            const v37 = v36 + 1;
            v36 = v37;
        } while (v36 < 4);
        let v39 = 0;
        const v40 = v33.slice(v19);
        const v41 = v39 + 1;
        const v42 = [13.37];
        const v44 = [1337,13.37,v42,-1155643050];
        let v45 = v42;
        const v47 = [1337,1337];
        const v48 = v26.__proto__;
        const v49 = {valueOf:1337,b:v14,e:1337,d:1337,constructor:v45,__proto__:1337,a:v42};
        const v51 = [1337,1337,1337,1337,1337];
        const v52 = [v51];
        const v53 = v47[-4096];
        const v54 = v44[-3357639552];
        const v55 = 13.37 == v44;
        let v57 = 0;
        const v58 = v45.flat();
        v27[3] = v27;
        const v59 = v17();
        const v60 = v59[-2900725722];
        let v62 = undefined;
        function v63(v64,v65,v66,v67,v68) {
            'use strict'
            v62 = v31;
        }
        let v71 = 0;
        let v73 = 0;
        const v74 = v31[-2713996197];
        const v75 = v73 + 1;
        const v76 = v71 + 1;
        let v77 = v27;
        try {
            const v78 = v25 & 0;
        } catch(v79) {
            const v80 = v54(v40,v79,v62);
        }
        const v81 = {set:v26};
        const v83 = Object.defineProperty();
        const v84 = [1337,0,v59];
        let v85 = 0;
    } catch(v86) {
        const v87 = v86();
        const v88 = v87.__proto__;
        let v90 = 0;
        const v91 = v90 + 1;
        const v92 = v19[853895176];
        const v93 = {construct:v86};
    }
}
const v94 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v96 = new Proxy(v22,v94);
v96[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

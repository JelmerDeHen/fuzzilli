function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [];
const v7 = {};
const v8 = {b:v7,constructor:Object,valueOf:Object};
let v9 = v6;
const v13 = [1337,1337,1337,1337];
const v14 = {__proto__:"WytjMFvqN8",b:v13,constructor:Uint8ClampedArray};
const v16 = [1337,1337];
const v18 = [1337,1337];
const v22 = new ArrayBuffer(1337);
let v23 = 1337;
let v25 = 0;
let v27 = 0;
const v28 = v27 + 1;
const v29 = v25 + 1;
const v30 = v22.slice();
let v32 = undefined;
const v33 = new DataView(v30);
function v34(v35,v36) {
    let v40 = 0;
    let v43 = 0;
    const v44 = v43 + 1;
    let v46 = -2;
    const v49 = arguments + 1;
    const v51 = [1337,1337,"MIN_VALUE",1337,1337];
    function v52(v53,v54,v55,v56) {
        'use strict'
        try {
            let v59 = 0;
            while (v59 <= 4) {
                const v60 = v59 + 1;
                v59 = v60;
            }
            v56[3] = 0;
        } catch(v61) {
            let v62 = v49;
            const v63 = [];
            const v64 = {a:v63};
            const v65 = {__proto__:v56,constructor:v64,length:v63};
            const v66 = v62 in v65;
        }
        const v67 = {construct:v36,defineProperty:Object,get:Object,apply:v34,getOwnPropertyDescriptor:v36,ownKeys:Object,call:Object,set:v36,deleteProperty:v53,setPrototypeOf:v34,has:Object,preventExtensions:v54};
        const v69 = new Proxy(v22,v67);
        return v56;
    }
    const v70 = {deleteProperty:v52,set:v52,getPrototypeOf:v52,call:v52,preventExtensions:v52,isExtensible:v52,construct:v52,get:v52,ownKeys:v52,setPrototypeOf:1337,has:v52};
    const v72 = new Proxy(v51,v70);
    v72[1] = "MIN_VALUE";
    while (v46 < 1337) {
        const v73 = v46 + 1;
        const v74 = v73 == undefined;
        const v75 = "V865cyRncU".__proto__;
        const v76 = 0 | "WytjMFvqN8";
        const v77 = v35.buffer;
        v46 = v73;
    }
    const v78 = 3156875969 <= 8;
    let v79 = v78;
    const v80 = v33.getInt16();
    const v81 = v79 + 1;
    const v82 = v33.setInt32(v80,v36);
    const v83 = v40 + 1;
}
const v85 = [1337];
let v86 = v85;
const v87 = v34(v86);
const v88 = v34(v18);
}
%NeverOptimizeFunction(main);
main();

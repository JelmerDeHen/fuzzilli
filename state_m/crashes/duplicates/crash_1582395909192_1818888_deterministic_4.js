function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = ["object",Reflect,13.37,13.37];
const v8 = {a:v6};
const v9 = {toString:v7,length:"object",c:v8};
let v10 = 2147483648;
const v14 = [1337,13.37,1337,Uint8Array];
let v15 = v14;
const v17 = [1337,1337,1337,1337,1337];
const v18 = {valueOf:v17,__proto__:v17};
let v20 = 13.37;
let v23 = 13.37;
const v25 = [13.37,13.37];
const v26 = {b:v25};
const v31 = [1866940554,3407732871];
const v32 = ["object",13.37,1866940554];
let v33 = v31;
const v35 = {get:NaN};
const v37 = Object.seal(v32,65537);
const v40 = [1337,1337,1337,1337,1337];
function v41(v42,v43,v44,v45) {
    'use strict'
    try {
        const v49 = [1337,1337];
        const v52 = new Uint8Array();
        const v53 = v52.slice();
        const v54 = new ArrayBuffer();
        v20 = v44;
        let v57 = 0;
        do {
            const v58 = v57 + 1;
            v57 = v58;
        } while (v57 < 4);
        let v61 = 0;
        const v62 = v54.slice(v20,4);
        const v63 = !v61;
        const v64 = [13.37];
        const v66 = [1337,13.37,v64,-2535596738];
        let v67 = v64;
        const v69 = [1337,1337];
        const v70 = {valueOf:1337,b:v15,e:1337,d:1337,constructor:v67,__proto__:1337,a:v64};
        const v72 = [1337,1337,1337,1337,1337];
        const v73 = [v72];
        const v74 = v69[-4096];
        const v75 = v66[-3357639552];
        const v76 = 13.37 == v66;
        let v78 = 0;
        const v79 = v67.flat();
        v45[3] = v45;
        const v80 = v18();
        const v81 = v80[-2900725722];
        let v83 = 0;
    } catch(v84) {
        const v85 = {construct:v84};
    }
}
const v86 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:v41,has:v41};
const v88 = new Proxy(v40,v86);
v88[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

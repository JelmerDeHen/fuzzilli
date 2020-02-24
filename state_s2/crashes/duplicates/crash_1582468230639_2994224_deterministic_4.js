function main() {
const v1 = [13.37,13.37,13.37];
const v3 = [1337,v1,1337];
const v4 = [v3];
const v5 = {valueOf:13.37,a:v3,__proto__:v4};
const v6 = {e:13.37,length:1337,__proto__:v5};
let v7 = v3;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337];
const v15 = [1337,Float64Array];
const v16 = {valueOf:v15,d:13.37,toString:v12,c:1337};
const v17 = {b:536870912,constructor:v14,e:v15,a:536870912,c:v14,toString:v15};
let v18 = "boolean";
const v20 = new Uint16Array();
const v22 = v20.slice();
const v25 = [13.37,13.37,13.37];
const v27 = [1337];
const v28 = [1337];
const v31 = [1337,1337];
const v32 = ["NEGATIVE_INFINITY",1337,1337,1337];
const v33 = {};
const v35 = [1337,1337,1337,1337];
let v36 = v35;
for (const v38 in "object") {
    const v41 = [1337,1337,1337,1337,1337];
    function v42(v43,v44,v45,v46) {
        'use strict'
        try {
            const v48 = Array();
            const v49 = v48.slice();
            const v51 = new Float32Array();
            v46[3] = v46;
        } catch(v52) {
            let v54 = "jmW+cy8FD0";
            let v55 = v54;
            const v57 = Symbol.toPrimitive;
            const v58 = v41.reduceRight(v42);
            let v61 = this;
            let v62 = v61;
            const v63 = [eval];
            let v64 = "EXkcpBKht7";
            const v65 = v63.includes();
            const v66 = [v46,v43];
        }
        return v41;
    }
    const v67 = "MIN_VALUE".includes();
    const v68 = [v41,v67];
    let v70 = 0;
    const v71 = v70 + 1;
    let v73 = v71;
    const v74 = Math.pow();
    const v75 = Math.sin();
    let v77 = "function";
    const v78 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:1337,has:v42};
    const v80 = new Proxy(v41,v78);
    v80[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

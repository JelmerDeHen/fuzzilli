function main() {
const v1 = [13.37,13.37,13.37];
const v3 = [1337,1337,1337];
const v4 = [v3];
const v5 = {valueOf:13.37,a:v3,__proto__:v4};
const v6 = {e:13.37,length:1337,__proto__:v5};
let v7 = v3;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337];
const v15 = [1337,Float64Array];
const v16 = {valueOf:v15,d:v12,toString:v12,c:1337};
const v17 = {b:536870912,constructor:v14,e:v15,a:536870912,c:v14,toString:v15};
let v18 = "boolean";
const v20 = new Uint16Array();
const v21 = v20.slice();
const v24 = [1337];
const v27 = [13.37,13.37,13.37];
const v29 = ["NEGATIVE_INFINITY",1337,1337,1337];
const v30 = {};
const v32 = [1337,1337,1337,1337];
let v33 = v32;
for (const v35 in "object") {
    const v38 = [1337,1337,1337,1337,1337];
    function v39(v40,v41,v42,v43) {
        'use strict'
        try {
            const v45 = Array();
            const v46 = v45.slice();
            const v48 = new Float32Array();
            v43[3] = v43;
        } catch(v49) {
            const v51 = ["jmW+cy8FD0"];
            let v52 = v51;
            let v53 = v52;
            const v55 = Symbol.toPrimitive;
            const v56 = v38.reduceRight(v39);
            let v59 = this;
            let v60 = v59;
            const v61 = [eval];
            let v62 = "EXkcpBKht7";
            const v63 = v61.includes();
            const v64 = [v43,v40];
        }
        return v38;
    }
    const v65 = "MIN_VALUE".includes();
    const v68 = [-4163351276,1337,1337,1337];
    const v69 = {valueOf:v68};
    const v71 = [1337];
    let v72 = v71;
    let v74 = undefined;
    let v76 = -128;
    const v77 = v76 + 1;
    const v78 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:1337,has:v39};
    const v80 = new Proxy(v38,v78);
    v80[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = ["toPrimitive",13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [v2,v2];
const v6 = {};
const v7 = {b:1337,c:1337};
let v8 = v2;
const v13 = [13.37,13.37,13.37,13.37];
const v15 = [1337,1337];
const v16 = [1337,Float64Array];
const v17 = {valueOf:v16,d:v13,toString:v13,c:1337};
const v18 = {b:536870912,constructor:v15,e:v16,a:536870912,c:v15,toString:v16};
let v19 = "boolean";
const v21 = new Uint16Array();
const v22 = v21.slice();
const v25 = [13.37,Float64Array,13.37];
const v27 = [1337];
const v28 = [13.37];
const v31 = [13.37,13.37,13.37];
const v33 = ["NEGATIVE_INFINITY",1337,1337,1337];
const v34 = {length:v31,__proto__:"NEGATIVE_INFINITY",toString:"NEGATIVE_INFINITY",valueOf:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY"};
const v35 = {};
const v37 = [1337,1337,1337,1337];
let v38 = v37;
for (const v40 in "object") {
    const v43 = [1337,1337,1337,1337,1337];
    function v44(v45,v46,v47,v48) {
        'use strict'
        try {
            const v50 = Array();
            const v51 = v50.slice();
            const v53 = new Float32Array();
            v48[3] = v48;
        } catch(v54) {
            const v56 = ["jmW+cy8FD0"];
            let v57 = v56;
            let v58 = v57;
            const v60 = Symbol.toPrimitive;
            const v61 = v43.reduceRight(v44);
            let v64 = this;
            let v65 = v64;
            let v66 = "jZZhI/kPfh";
            let v68 = 13.37;
            const v70 = [13.37,13.37];
            const v71 = {b:v70};
            const v76 = [1337,1337];
            const v77 = [Uint8ClampedArray,13.37,2];
            let v78 = v76;
            const v79 = {get:Uint8ClampedArray};
            const v81 = Object.freeze();
            const v83 = v77.includes(v68,v78,v77,"name");
            const v84 = [eval];
        }
        return v43;
    }
    let v87 = 0;
    while (v87 < 1337) {
        const v88 = v87 + 1;
        v87 = v88;
    }
    const v89 = {deleteProperty:v44,set:v44,getPrototypeOf:v44,call:v44,preventExtensions:v44,isExtensible:v44,construct:v44,get:v44,ownKeys:v44,setPrototypeOf:1337,has:v44};
    const v91 = new Proxy(v43,v89);
    v91[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

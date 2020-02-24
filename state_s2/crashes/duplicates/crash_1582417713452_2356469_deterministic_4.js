function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [v4];
const v8 = {b:v7,toString:"boolean",a:Map,constructor:v6,valueOf:Map};
const v9 = {d:v6,constructor:v6,c:13.37,e:v4,__proto__:v6,b:-2147483648,toString:v7};
let v10 = "boolean";
let v13 = 13.37;
const v15 = [13.37,"unscopable"];
const v16 = {a:v15};
const v21 = [-4294967296,1337];
const v22 = [eval,13.37,-4294967296];
let v23 = v21;
const v24 = {get:eval};
const v26 = Object.seal();
const v31 = [13.37,13.37,13.37,13.37];
const v33 = [1337,1337];
const v34 = [1337,Float64Array];
const v35 = {valueOf:v34,d:v31,toString:v31,c:1337};
const v36 = {b:536870912,constructor:v33,e:v34,a:536870912,c:v33,toString:v34};
let v37 = "boolean";
const v39 = new Uint16Array();
const v40 = v39.slice();
const v43 = [13.37,13.37,13.37];
const v45 = [1337];
const v46 = [13.37];
const v49 = [13.37,13.37,13.37];
const v51 = [1337,1337];
const v52 = ["NEGATIVE_INFINITY",1337,1337,1337];
const v53 = {length:v49,__proto__:"NEGATIVE_INFINITY",toString:"NEGATIVE_INFINITY",valueOf:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY"};
const v54 = {};
for (const v56 in "object") {
    const v59 = [1337,1337,1337,1337,1337];
    function v60(v61,v62,v63,v64) {
        'use strict'
        try {
            const v66 = Array();
            const v67 = v66.slice();
            v64[3] = v64;
        } catch(v68) {
            const v70 = ["jmW+cy8FD0"];
            let v71 = v70;
            let v72 = v71;
            const v74 = Symbol.toPrimitive;
            const v75 = v59.reduceRight(v60);
            let v78 = this;
            let v79 = v78;
            const v80 = [eval];
            let v81 = "EXkcpBKht7";
            const v82 = v80.includes();
            const v83 = [v64,v61];
        }
        return v59;
    }
    const v84 = {deleteProperty:v60,set:v60,getPrototypeOf:v60,call:v60,preventExtensions:v60,isExtensible:v60,construct:v60,get:v60,ownKeys:v60,setPrototypeOf:1337,has:v60};
    const v86 = new Proxy(v59,v84);
    v86[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

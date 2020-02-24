function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [v5,v5,v3,13.37];
const v7 = {__proto__:"object",d:v3,valueOf:v5,length:this};
const v9 = [1337,1337,1337,1337,1337];
function v10(v11,v12,v13,v14) {
    'use strict'
}
const v15 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
const v17 = new Proxy(v9,v15);
let v18 = 1337;
const v23 = [13.37,13.37,13.37,13.37];
const v25 = [1337,1337];
const v26 = [1337,Float64Array];
const v27 = {valueOf:v26,d:v23,toString:v23,c:1337};
const v28 = {b:536870912,constructor:v25,e:v26,a:536870912,c:v25,toString:v26};
let v29 = "boolean";
const v31 = new Uint16Array();
const v32 = v31.slice();
const v35 = [1337];
const v38 = [13.37,13.37,13.37];
const v40 = ["NEGATIVE_INFINITY",1337,1337,1337];
const v41 = {};
const v43 = [1337,1337,1337,1337];
let v44 = v43;
for (const v46 in "object") {
    const v49 = [1337,1337,1337,1337,1337];
    function v50(v51,v52,v53,v54) {
        'use strict'
        try {
            const v56 = Array();
            const v57 = v56.slice();
            const v59 = new Float32Array();
            v54[3] = v54;
        } catch(v60) {
            const v62 = ["jmW+cy8FD0"];
            let v63 = v62;
            let v64 = v63;
            const v66 = Symbol.toPrimitive;
            const v67 = v49.reduceRight(v50);
            let v70 = this;
            let v71 = v70;
            const v72 = [eval];
            let v73 = "EXkcpBKht7";
            const v74 = v72.includes();
            const v75 = [v54,v51];
        }
        return v49;
    }
    const v76 = "MIN_VALUE".includes();
    const v77 = [v49,v76];
    let v79 = 0;
    const v80 = v79 + 1;
    let v81 = v80;
    const v82 = {deleteProperty:v50,set:v50,getPrototypeOf:v50,call:v50,preventExtensions:v50,isExtensible:v50,construct:v50,get:v50,ownKeys:v50,setPrototypeOf:1337,has:v50};
    const v84 = new Proxy(v49,v82);
    v84[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = ["NaN",13.37];
const v7 = {valueOf:Reflect,constructor:13.37};
const v8 = {b:13.37,__proto__:v6,d:v6,a:"NaN",c:v7};
let v9 = v3;
const v12 = [-1.7976931348623157e+308,-1.7976931348623157e+308];
const v14 = [1337,1337];
const v15 = [-2152308523];
const v16 = {d:1337,a:v15,valueOf:v12,e:v14,d:1337,c:v14};
try {
    const v20 = [1337,13.37];
    const v21 = v20[1024];
    const v22 = {isExtensible:ArrayBuffer,get:ArrayBuffer,set:v21,defineProperty:ArrayBuffer,call:ArrayBuffer,apply:v21,construct:v21,has:ArrayBuffer,ownKeys:v21,getPrototypeOf:ArrayBuffer};
    const v24 = Proxy(ArrayBuffer);
    const v25 = v24();
} catch(v26) {
}
const v31 = [13.37,13.37];
const v33 = [1337,1337];
const v34 = [];
const v35 = {__proto__:-56371288,valueOf:1337,toString:1337,d:v34,b:-56371288,constructor:13.37,length:"undefined"};
const v36 = {};
const v38 = [-3.0,-3.0,-3.0];
for (const v41 in "object") {
    const v44 = [1337,1337,1337,1337,1337];
    function v45(v46,v47,v48,v49) {
        'use strict'
        try {
            const v52 = new Uint32Array();
            const v53 = v52.slice();
            const v56 = [1337,1337,1337,1337,1337];
            function v57(v58,v59,v60,v61) {
                'use strict'
                const v63 = [v58,1337];
                const v64 = v63.shift();
                const v66 = Object.values();
            }
            const v67 = {deleteProperty:v57,set:v57,getPrototypeOf:v57,c:v57,preventExtensions:v57,isExtensible:v57,construct:v57,get:v57,ownKeys:v57,setPrototypeOf:v57,has:v57};
            const v69 = new Proxy(v56,v67);
            const v70 = new Float32Array(19873);
            v49[3] = v49;
        } catch(v71) {
            const v73 = Symbol.toPrimitive;
            const v75 = v44.reduceRight(v45);
            let v79 = this;
            let v80 = v79;
            let v81 = "jZZhI/kPfh";
            const v82 = [1337];
            let v83 = "EXkcpBKht7";
            const v84 = v82.includes(v83,-2695425644);
            const v86 = [v49,1337];
            const v88 = "unscopable".concat();
            const v90 = [1337,1337];
            const v92 = [13.37,13.37,13.37];
        }
        return v44;
    }
    let v95 = 0;
    while (v95 < 1337) {
        const v96 = v95 + 1;
        function v97(v98,v99) {
        }
        v95 = v96;
    }
    const v100 = {deleteProperty:v45,set:v45,getPrototypeOf:v45,call:v45,preventExtensions:v45,isExtensible:v45,construct:v45,get:v45,ownKeys:v45,setPrototypeOf:1337,has:v45};
    const v102 = new Proxy(v44,v100);
    v102[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

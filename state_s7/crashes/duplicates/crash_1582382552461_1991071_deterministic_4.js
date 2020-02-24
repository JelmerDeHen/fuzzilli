function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [];
const v8 = {c:"__proto__",e:v7,b:8};
const v9 = {a:Uint8Array,b:v6,__proto__:v7,toString:v7};
let v10 = 1337;
const v12 = [13.37,13.37,13.37,13.37];
const v13 = [];
const v16 = [13.37,13.37,13.37,13.37];
const v18 = [v16,-2,-4294967297];
const v22 = [13.37,13.37,13.37,-4294967297];
const v24 = [13.37,-93687789,v22];
let v28 = 0;
do {
    let v30 = 2237842118;
    const v31 = v30 + 1;
    const v32 = v24.push();
    const v33 = v28 + 1;
    v28 = v33;
} while (v28 < 10000);
const v34 = [-1242988596,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
let v35 = v34;
const v36 = v18[v35];
const v40 = [1337,1337,1337,1337,1337];
function v41(v42,v43,v44,v45) {
    'use strict'
    try {
        v45[3] = v45;
    } catch(v46) {
        const v51 = [-2331916614,-2331916614,-2331916614];
        const v52 = [3664180981,3664180981,"string","string"];
        const v53 = {valueOf:v52,length:v51,toString:parseFloat,constructor:"string",c:parseFloat};
        function v54(v55,v56) {
            const v60 = [1337,1337,1337,1337,1337];
            function v61(v62,v63,v64,v65) {
                'use strict'
                try {
                    const v66 = new Float64Array(v64);
                    function v68(v69,v70,v71,v72,v73) {
                        'use strict'
                        return v65;
                    }
                    const v74 = v68.toLocaleString();
                    const v76 = [];
                    const v77 = {a:v76};
                    const v78 = {__proto__:eval,constructor:v77,length:v76};
                    const v79 = v78.__proto__(v74);
                    const v81 = Object.defineProperty(this,1337,v65);
                } catch(v82) {
                    try {
                        const v83 = v62[3];
                    } catch(v84) {
                        v82.valueOf = v82;
                    }
                }
                return v61;
            }
            const v85 = {deleteProperty:v61,set:v61,getPrototypeOf:v61,call:v61,preventExtensions:v61,isExtensible:v61,construct:v61,get:v61,ownKeys:v61,setPrototypeOf:v61,has:v61};
            const v87 = new Proxy(v60,v85);
            v87[1] = "MIN_VALUE";
        }
        const v88 = v54();
    }
}
const v89 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:v41,has:v41};
const v91 = new Proxy(v40,v89);
v91[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

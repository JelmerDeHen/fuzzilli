function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337];
const v6 = [v3,1337,WeakSet,13.37];
const v7 = {b:1337,length:13.37,c:v6,a:v5,__proto__:v3,d:1337};
const v8 = {c:"string",toString:"string",constructor:v3,e:13.37,a:v6,d:v6};
let v9 = 1337;
const v10 = [];
const v13 = [13.37,13.37,13.37,13.37];
const v15 = [v13,-2,-4294967297];
const v19 = [13.37,13.37,13.37,-4294967297];
const v21 = [13.37,-93687789,v19];
let v26 = 0;
do {
    let v28 = 2237842118;
    const v29 = v28 + 1;
    const v30 = v21.push(v29,v26,2237842118);
    const v31 = v26 + 1;
    v26 = v31;
} while (v26 < 10000);
const v32 = [-1242988596,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
let v33 = v32;
const v34 = v15[v33];
const v35 = new Float32Array();
const v36 = v35.sort();
const v38 = Symbol.iterator;
const v40 = [13.37,13.37,13.37,13.37];
const v42 = [1337,1337,1337,1337];
const v43 = [];
const v44 = {b:1337,c:v40,d:13.37,a:v42,length:v43,valueOf:1337};
const v48 = [1337,1337,1337,1337,1337];
function v49(v50,v51,v52,v53) {
    'use strict'
    try {
        v53[3] = v53;
    } catch(v54) {
        const v59 = [-2331916614,-2331916614,-2331916614];
        const v60 = [3664180981,3664180981,"string","string"];
        const v61 = {valueOf:v60,length:v59,toString:parseFloat,constructor:"string",c:parseFloat};
        function v62(v63,v64) {
            const v68 = [1337,1337,1337,1337,1337];
            function v69(v70,v71,v72,v73) {
                'use strict'
                try {
                    const v74 = new Float64Array(v72);
                    function v76(v77,v78,v79,v80,v81) {
                        'use strict'
                    }
                    const v82 = v76.toLocaleString();
                    const v84 = [];
                    const v85 = {a:v84};
                    const v86 = {__proto__:eval,constructor:v85,length:v84};
                    let v88 = 0;
                    const v89 = v86.__proto__(v82);
                    const v91 = Object.defineProperty(this,1337,v73);
                } catch(v92) {
                    try {
                        const v93 = v70[3];
                    } catch(v94) {
                        v92.valueOf = v92;
                    }
                }
                return v69;
            }
            const v95 = {deleteProperty:v69,set:v69,getPrototypeOf:v69,call:v69,preventExtensions:v69,isExtensible:v69,construct:v69,get:v69,ownKeys:v69,setPrototypeOf:v69,has:v69};
            const v97 = new Proxy(v68,v95);
            v97[1] = "MIN_VALUE";
        }
        const v98 = v62();
    }
}
const v99 = {deleteProperty:v49,set:v49,getPrototypeOf:v49,call:v49,preventExtensions:v49,isExtensible:v49,construct:v49,get:v49,ownKeys:v49,setPrototypeOf:v49,has:v49};
const v101 = new Proxy(v48,v99);
v101[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

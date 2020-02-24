function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = [1337,1337];
const v7 = {a:v5,b:v5,constructor:v3,length:v6,toString:v6};
const v8 = {c:v7,b:v6,e:v6,d:v7,length:"species",valueOf:v3};
let v9 = v8;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
    } catch(v25) {
        function v26(v27,v28) {
            const v32 = [1337,1337,1337,1337,1337];
            function v33(v34,v35,v36,v37) {
                'use strict'
                try {
                    const v38 = new Float64Array(v36);
                    function v41(v42,v43,v44,v45,v46) {
                        'use strict'
                    }
                    const v47 = v41.toLocaleString();
                    const v49 = [];
                    const v50 = {a:v49};
                    const v51 = {__proto__:eval,constructor:v50,length:v49};
                    let v54 = 0;
                    const v55 = v51.__proto__(v47,v54,19873,Symbol);
                    const v57 = Object.defineProperty(this,1337,v37);
                } catch(v58) {
                    try {
                        const v59 = v34[3];
                    } catch(v60) {
                        v58.valueOf = v58;
                    }
                }
                return v33;
            }
            const v61 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
            const v63 = new Proxy(v32,v61);
            v63[1] = "MIN_VALUE";
        }
        const v64 = v26();
    }
}
const v65 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
let v66 = parseFloat;
const v67 = "MIN_VALUE"[3];
const v68 = v65.getPrototypeOf(Float64Array);
let v70 = 0;
const v71 = v19.toLocaleString();
const v72 = v70 + 1;
}
%NeverOptimizeFunction(main);
main();

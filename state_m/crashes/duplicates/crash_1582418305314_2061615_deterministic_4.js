function main() {
const v3 = [13.37];
const v5 = [1337];
const v6 = [13.37,1337];
const v7 = {constructor:"symbol",e:parseInt,length:13.37};
const v8 = {a:v3};
let v9 = parseInt;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1024,1024,1024,1024];
const v14 = [];
const v15 = {b:1024,c:v11,d:13.37,a:v13,length:v14,valueOf:1024};
const v19 = [1337,1337,1337,1337,1337];
const v20 = "MIN_VALUE".includes();
const v21 = v8 - 1;
function v22(v23,v24,v25,v26) {
    'use strict'
    try {
        v26[3] = v26;
    } catch(v27) {
        const v32 = [-2331916614,-2331916614,-2331916614];
        const v33 = [3664180981,3664180981,"string","string"];
        const v34 = {valueOf:v33,length:v32,toString:parseFloat,constructor:"string",c:parseFloat};
        function v35(v36,v37) {
            const v41 = [1337,1337,1337,1337,1337];
            function v42(v43,v44,v45,v46) {
                'use strict'
                try {
                    const v47 = new Float64Array(v45);
                    function v50(v51,v52,v53,v54,v55) {
                        'use strict'
                    }
                    const v56 = v50.toLocaleString();
                    const v58 = [];
                    const v59 = {toString:v58};
                    const v60 = {__proto__:eval,constructor:v59,length:v58};
                    let v63 = 0;
                    const v64 = v60.__proto__(v56,v63,19873,Symbol);
                    const v66 = Object.defineProperty(this,1337,v46);
                } catch(v67) {
                    try {
                        const v68 = v43[3];
                    } catch(v69) {
                        v67.valueOf = v67;
                    }
                }
                return v42;
            }
            const v70 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:v42,has:v42};
            const v72 = new Proxy(v41,v70);
            v72[1] = "MIN_VALUE";
        }
        const v73 = v35();
    }
}
const v74 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
const v76 = new Proxy(v19,v74);
v76[1] = "MIN_VALUE";
const v77 = 13.37 + 1;
const v79 = Symbol.search;
const v80 = v74[v79];
const v81 = {defineProperty:v9,deleteProperty:v9};
}
%NeverOptimizeFunction(main);
main();

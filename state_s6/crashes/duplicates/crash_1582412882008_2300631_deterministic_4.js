function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = [];
const v7 = {};
const v8 = {valueOf:arguments,__proto__:v6,toString:v6,c:4096};
let v9 = v8;
const v11 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        v19[3] = v19;
    } catch(v20) {
        const v25 = [-2331916614,-2331916614,-2331916614];
        const v26 = [3664180981,3664180981,"string","string"];
        const v27 = {valueOf:v26,length:v25,toString:parseFloat,constructor:"string",c:parseFloat};
        function v28(v29,v30) {
            const v34 = [1337,1337,1337,1337,1337];
            function v35(v36,v37,v38,v39) {
                'use strict'
                try {
                    const v40 = new Float64Array(v38);
                    function v42(v43,v44,v45,v46,v47) {
                        'use strict'
                    }
                    const v48 = v42.toLocaleString();
                    const v49 = [];
                    const v50 = {a:v49};
                    const v51 = {__proto__:v42,constructor:v50,length:v49};
                    const v53 = Object.defineProperty(this,1337,v39);
                } catch(v54) {
                    try {
                        const v55 = v36[3];
                    } catch(v56) {
                        v54.valueOf = v54;
                    }
                }
                return v35;
            }
            const v57 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
            const v59 = new Proxy(v34,v57);
            v59[1] = "MIN_VALUE";
        }
        const v60 = v28();
    }
}
const v61 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v63 = new Proxy(v14,v61);
v63[1] = Float64Array;
}
%NeverOptimizeFunction(main);
main();

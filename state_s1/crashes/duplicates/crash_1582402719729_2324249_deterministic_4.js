function main() {
const v3 = [13.37,13.37];
const v5 = [1337];
const v6 = [268435456,"buffer",13.37,v3];
const v7 = {};
const v8 = {};
let v9 = 268435456;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        const v25 = [-2331916614,-2331916614,-2331916614];
        function v26(v27,v28) {
            const v32 = [1337,1337,1337,1337,1337];
            function v33(v34,v35,v36,v37) {
                'use strict'
                try {
                    const v38 = new Float64Array(v36);
                    function v40(v41,v42,v43,v44,v45) {
                        'use strict'
                    }
                    const v46 = v40.toLocaleString();
                    const v48 = Object.defineProperty(this,1337,v37);
                } catch(v49) {
                    try {
                        const v50 = v34[3];
                    } catch(v51) {
                        v49.valueOf = v49;
                    }
                }
                return v33;
            }
            const v52 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
            const v54 = new Proxy(v32,v52);
            v54[1] = "MIN_VALUE";
        }
        const v55 = v26();
    }
}
const v56 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v58 = new Proxy(v17,v56);
v58[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

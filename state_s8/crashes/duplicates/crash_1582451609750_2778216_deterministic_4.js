function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337];
const v5 = [v4];
const v6 = {length:1337,valueOf:v5};
const v7 = {valueOf:v4,constructor:13.37,c:v5,__proto__:v6,d:v5,length:1337};
let v8 = Infinity;
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        v17[3] = v17;
    } catch(v18) {
        const v23 = [-2331916614,-2331916614,-2331916614];
        const v24 = [3664180981,3664180981,"string","string"];
        const v25 = {valueOf:v24,length:v23,toString:parseFloat,constructor:"string",c:parseFloat};
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
                    const v48 = [];
                    const v49 = {a:v48};
                    const v50 = {__proto__:eval,constructor:v49,length:v48};
                    const v51 = v50.__proto__(v46);
                    const v53 = Object.defineProperty(this,1337,v37);
                } catch(v54) {
                    try {
                        const v55 = v34[3];
                    } catch(v56) {
                        v54.valueOf = v54;
                    }
                }
                return v33;
            }
            const v57 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
            const v59 = new Proxy(v32,v57);
            v59[1] = "MIN_VALUE";
            for (const v60 of "string") {
            }
        }
        const v61 = v26();
    }
}
const v62 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v64 = new Proxy(v12,v62);
v64[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

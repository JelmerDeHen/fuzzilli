function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {__proto__:"object",b:v3,length:4294967296,constructor:13.37,a:4294967296};
const v10 = [1337,1337,1337,1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
}
const v16 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:Infinity,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
const v18 = new Proxy(v10,v16);
const v22 = [1337,1337,1337,1337,1337];
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        v27[3] = v27;
    } catch(v28) {
        const v33 = [-2331916614,-2331916614,-2331916614];
        const v34 = [3664180981,3664180981,"string","string"];
        const v35 = {valueOf:v34,length:v33,toString:parseFloat,constructor:"string",c:parseFloat};
        function v36(v37,v38) {
            const v42 = [1337,1337,1337,1337,1337];
            function v43(v44,v45,v46,v47) {
                'use strict'
                try {
                    const v48 = new Float64Array(v46);
                    function v50(v51,v52,v53,v54,v55) {
                        'use strict'
                        return v46;
                    }
                    const v56 = v50.toLocaleString();
                    const v58 = Object.defineProperty(this,1337,v47);
                } catch(v59) {
                    try {
                        const v60 = v44[3];
                    } catch(v61) {
                        v59.valueOf = v59;
                    }
                }
                return v43;
            }
            const v62 = {deleteProperty:v43,set:v43,getPrototypeOf:v43,call:v43,preventExtensions:v43,isExtensible:v43,construct:v43,get:v43,ownKeys:v43,setPrototypeOf:v43,has:v43};
            const v64 = new Proxy(v42,v62);
            v64[1] = "MIN_VALUE";
        }
        const v65 = v36();
    }
}
const v66 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v68 = new Proxy(v22,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

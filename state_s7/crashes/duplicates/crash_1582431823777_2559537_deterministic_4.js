function main() {
function v3(v4,v5,v6,v7,v8) {
}
const v9 = v3 && "symbol";
const v11 = [13.37];
const v13 = [1337,1337,1337,1337,1337];
const v14 = [4252959513];
const v15 = {constructor:"symbol",length:Symbol,valueOf:Symbol};
const v16 = {__proto__:v11,toString:v15};
let v17 = v11;
const v21 = [1337,1337,1337,1337,1337];
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
                    function v49(v50,v51,v52,v53,v54) {
                        'use strict'
                        return v44;
                    }
                    const v55 = v49.toLocaleString();
                    const v57 = Object.defineProperty(this,1337,v46);
                } catch(v58) {
                    try {
                        const v59 = v43[3];
                    } catch(v60) {
                        v58.valueOf = v58;
                    }
                }
                return v42;
            }
            const v61 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:v42,has:v42};
            const v63 = new Proxy(v41,v61);
            v63[1] = "MIN_VALUE";
        }
        const v64 = v35();
    }
}
const v65 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
const v67 = new Proxy(v21,v65);
v67[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [13.37,13.37];
const v4 = [1337];
const v5 = ["PT5hsIynHC"];
const v6 = {valueOf:v4,c:v5};
const v7 = {constructor:v4};
let v8 = v5;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        v21[3] = v21;
    } catch(v22) {
        const v27 = [-2331916614,-2331916614,-2331916614];
        const v28 = [3664180981,3664180981,"string","string"];
        const v29 = {valueOf:v28,length:v27,toString:parseFloat,constructor:"string",c:parseFloat};
        function v30(v31,v32) {
            const v35 = [1337,1337,1337,1337,1337];
            function v36(v37,v38,v39,v40) {
                'use strict'
                try {
                    const v41 = new Float64Array(v39);
                    function v43(v44,v45,v46,v47,v48) {
                        'use strict'
                        return v41;
                    }
                    const v49 = v43.toLocaleString();
                    const v51 = [];
                    const v52 = {a:v51};
                    const v53 = {__proto__:eval,constructor:v52,length:v51};
                    let v55 = 0;
                    const v56 = v53.__proto__(v49);
                    const v58 = Object.defineProperty(this,v51,v40);
                } catch(v59) {
                    try {
                        const v60 = v37[3];
                    } catch(v61) {
                        v59.valueOf = v59;
                    }
                }
                return v36;
            }
            const v62 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
            const v64 = new Proxy(v35,v62);
            v64[1] = "MIN_VALUE";
        }
        const v65 = v30();
    }
}
const v66 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v68 = new Proxy(v16,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

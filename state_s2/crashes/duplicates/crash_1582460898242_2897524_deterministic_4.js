function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337,1337];
const v7 = new Uint16Array();
const v8 = v7.slice();
const v9 = [1337,Object];
const v10 = {a:1337,valueOf:v9,constructor:13.37};
const v11 = {d:1337,a:v3,__proto__:v10,valueOf:v10,constructor:v5};
let v12 = "OJja306Fts";
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
            const v36 = [1337,1337,1337,1337,1337];
            function v37(v38,v39,v40,v41) {
                'use strict'
                try {
                    const v42 = new Float64Array(v40);
                    function v44(v45,v46,v47,v48,v49) {
                        'use strict'
                        return v40;
                    }
                    const v50 = v44.toLocaleString();
                    const v52 = Object.defineProperty(this,1337,v41);
                } catch(v53) {
                    try {
                        const v54 = v38[3];
                    } catch(v55) {
                        v53.valueOf = v53;
                    }
                }
                return v37;
            }
            const v56 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
            const v58 = new Proxy(v36,v56);
            v58[1] = "MIN_VALUE";
        }
        const v59 = v30();
    }
}
const v60 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v62 = new Proxy(v16,v60);
v62[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

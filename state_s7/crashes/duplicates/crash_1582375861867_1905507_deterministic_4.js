function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [v2,1337];
const v6 = {};
const v7 = {d:1337,__proto__:v6,c:-65537,toString:v6,length:v5};
let v8 = v6;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        v21[3] = v21;
    } catch(v22) {
        const v27 = [-2331916614,-2331916614,-2331916614];
        const v28 = [3664180981,3664180981,"string",3664180981];
        const v29 = {valueOf:v28,length:v27,toString:parseFloat,constructor:"string",c:parseFloat};
        function v30(v31,v32) {
            const v36 = [1337,1337,1337,1337,1337];
            function v37(v38,v39,v40,v41) {
                'use strict'
                try {
                    const v42 = new Float64Array(v40);
                    function v44(v45,v46,v47,v48,v49) {
                        'use strict'
                        return v38;
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
const v60 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:1337,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v62 = new Proxy(v16,v60);
v62[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
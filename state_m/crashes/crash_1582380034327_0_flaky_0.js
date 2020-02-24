function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [WeakSet,v4];
const v6 = {b:v4,d:v4,valueOf:WeakSet,toString:v2};
const v7 = {};
let v8 = WeakSet;
const v10 = new Uint8ClampedArray();
const v12 = [13.37,13.37,13.37,13.37];
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
                        return v42;
                    }
                    const v50 = v44.toLocaleString();
                    const v52 = [];
                    const v53 = {a:v52};
                    const v54 = {__proto__:eval,constructor:v53,length:v52};
                    const v56 = Object.defineProperty(this,1337,v41);
                } catch(v57) {
                    try {
                        const v58 = v38[3];
                    } catch(v59) {
                        v57.valueOf = v57;
                    }
                }
                return v37;
            }
            const v60 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
            const v62 = new Proxy(v36,v60);
            v62[1] = "MIN_VALUE";
        }
        const v63 = v30();
    }
}
const v64 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v66 = new Proxy(v16,v64);
v66[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337];
const v5 = [Promise,Promise];
const v6 = {a:v4};
const v7 = {d:13.37,b:v2,a:v5,c:13.37};
let v8 = v6;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,13.37,1337,1337];
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
                        return v39;
                    }
                    const v49 = v43.toLocaleString();
                    const v51 = [];
                    const v52 = {a:v51};
                    const v53 = {__proto__:eval,constructor:v52,length:v51};
                    const v54 = v53.__proto__(v49);
                    const v56 = Object.defineProperty(this,v29,v40);
                } catch(v57) {
                    try {
                        const v58 = v37[3];
                    } catch(v59) {
                        v57.valueOf = v57;
                    }
                }
                return v36;
            }
            const v60 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
            const v62 = new Proxy(v35,v60);
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

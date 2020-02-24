function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [3,3,v2,v4];
const v6 = {};
const v7 = {valueOf:v6,d:13.37,length:1337};
let v8 = v4;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    const v26 = [-2331916614,-2331916614,-2331916614];
    const v27 = [3664180981,3664180981,"string","string"];
    const v28 = {valueOf:v27,length:v26,toString:parseFloat,constructor:"string",c:parseFloat};
    function v29(v30,v31) {
        const v35 = [1337,1337,1337,1337,1337];
        function v36(v37,v38,v39,v40) {
            'use strict'
            try {
                const v41 = new Float64Array(v39);
                function v43(v44,v45,v46,v47,v48) {
                    'use strict'
                }
                const v49 = v43.toLocaleString();
                const v51 = [];
                const v52 = {a:v51};
                const v55 = new Int16Array();
                v55.constructor = Float32Array;
                const v56 = {__proto__:eval,constructor:v52,length:v51};
                const v58 = Object.defineProperty(this,1337,v40);
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
    const v65 = v29();
}
const v66 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v68 = new Proxy(v16,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

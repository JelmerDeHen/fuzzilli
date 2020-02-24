function main() {
const v1 = [13.37,13.37];
const v3 = [1337,1337];
const v4 = [v3,v3,13.37];
const v5 = {};
const v6 = {toString:v3};
let v7 = v1;
const v9 = [13.37,13.37,13.37,13.37];
const v11 = [1337,1337,1337,1337];
const v15 = [1337,1337,1337,1337,1337];
function v16(v17,v18,v19,v20) {
    'use strict'
    const v25 = [-2331916614,-2331916614,-2331916614];
    const v26 = [3664180981,3664180981,"string","string"];
    const v27 = {valueOf:v26,length:v25,toString:parseFloat,constructor:"string",c:parseFloat};
    function v28(v29,v30) {
        const v34 = [1337,1337,1337,1337,1337];
        function v35(v36,v37,v38,v39) {
            'use strict'
            try {
                const v40 = new Float64Array(v38);
                function v42(v43,v44,v45,v46,v47) {
                    'use strict'
                }
                const v48 = v42.toLocaleString();
                const v50 = [];
                const v51 = {a:v50};
                const v54 = new Float32Array();
                v54.constructor = Float64Array;
                const v55 = {__proto__:eval,constructor:v51,length:v50};
                const v57 = Object.defineProperty(this,1337,v39);
            } catch(v58) {
                try {
                    const v59 = v36[3];
                } catch(v60) {
                    v58.valueOf = v58;
                }
            }
            return v35;
        }
        const v61 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
        const v63 = new Proxy(v34,v61);
        v63[1] = "MIN_VALUE";
    }
    const v64 = v28();
}
const v65 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
const v67 = new Proxy(v15,v65);
v67[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

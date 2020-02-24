function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [1337,v2,v4,13.37];
const v6 = {e:eval,b:v4,d:1337,valueOf:v5};
const v7 = {length:13.37,d:eval,valueOf:1337};
let v8 = v2;
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
                const v42 = [13.37];
                function v43(v44,v45,v46,v47) {
                    'use strict'
                    v46.constructor = v42;
                }
                const v48 = new Float64Array(v39);
                function v50(v51,v52,v53,v54,v55) {
                    'use strict'
                }
                const v56 = v50.toLocaleString();
                const v58 = [];
                const v59 = {a:v58};
                const v60 = {__proto__:eval,constructor:v59,length:v58};
                const v62 = Object.defineProperty(this,1337,v40);
            } catch(v63) {
                try {
                    const v64 = v37[3];
                } catch(v65) {
                    v63.valueOf = v63;
                }
            }
            return v36;
        }
        const v66 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
        const v68 = new Proxy(v35,v66);
        v68[3] = "MIN_VALUE";
    }
    const v69 = v29();
}
const v70 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v72 = new Proxy(v16,v70);
v72[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

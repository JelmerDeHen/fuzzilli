function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337];
const v5 = [1337,v4];
const v6 = {constructor:13.37};
const v7 = {toString:1337};
let v8 = Object;
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
                const v53 = {__proto__:eval,constructor:v52,length:v51};
                const v55 = Object.defineProperty(this,1337,v40);
                function v56(v57,v58,v59,v60) {
                    'use strict'
                    const v61 = {a:v56};
                }
            } catch(v62) {
                try {
                    const v63 = v37[3];
                } catch(v64) {
                    v62.valueOf = v62;
                }
            }
            return v36;
        }
        const v65 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
        const v67 = new Proxy(v35,v65);
        v67[1] = "MIN_VALUE";
    }
    const v68 = v29();
}
const v69 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v71 = new Proxy(v16,v69);
v71[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

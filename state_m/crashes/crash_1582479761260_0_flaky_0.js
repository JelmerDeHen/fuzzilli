function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337,1337];
const v4 = [v1,v1];
const v5 = {};
const v6 = {b:1337,c:1337};
let v7 = v1;
const v9 = [13.37,13.37,13.37,13.37];
const v11 = [1337,1337,1337,1337];
const v15 = [1337,1337,1337,1337,1337];
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        v20[3] = v20;
    } catch(v21) {
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
                        return v39;
                    }
                    const v49 = v43.toLocaleString();
                    const v51 = Object.defineProperty(this,1337,v40);
                } catch(v52) {
                    try {
                        const v53 = v37[-2147483649];
                    } catch(v54) {
                        v52.valueOf = v52;
                    }
                }
                return v36;
            }
            const v55 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
            const v57 = new Proxy(v35,v55);
            v57[1] = "MIN_VALUE";
        }
        const v58 = v29();
    }
}
const v59 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,valueOf:v16,setPrototypeOf:v16,has:v16};
const v61 = new Proxy(v15,v59);
v61[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [v4,-3192746315];
const v6 = {a:v4,toString:v5,__proto__:v4,length:v4,valueOf:13.37};
const v7 = {d:-3192746315};
let v8 = v4;
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
            const v36 = [1337,1337,1337,1337,1337];
            function v37(v38,v39,v40,v41) {
                'use strict'
                try {
                    const v42 = new Float64Array(v40);
                    function v44(v45,v46,v47,v48,v49) {
                        'use strict'
                        let v50 = v17;
                        v50 = v40;
                    }
                    const v51 = v44.toLocaleString();
                    const v53 = Object.defineProperty(this,1337,v41);
                } catch(v54) {
                    try {
                        const v55 = v38[3];
                    } catch(v56) {
                        v54.valueOf = v54;
                    }
                }
                return v37;
            }
            const v57 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
            const v59 = new Proxy(v36,v57);
            v59[1] = "MIN_VALUE";
        }
        const v60 = v30();
    }
}
const v61 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v63 = new Proxy(v16,v61);
v63[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [];
const v6 = {a:v2};
const v7 = {a:v6,length:v5,b:1337,e:undefined,toString:13.37};
let v8 = 13.37;
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
                    function v45(v46,v47,v48,v49,v50) {
                        'use strict'
                        const v51 = v29 << Symbol;
                        const v52 = v38(v51);
                    }
                    const v53 = v45.toLocaleString();
                    const v55 = Object.defineProperty(this,1337,v41);
                } catch(v56) {
                    try {
                        const v57 = v38[3];
                    } catch(v58) {
                        v56.valueOf = v56;
                    }
                }
                return v37;
            }
            const v59 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
            const v61 = new Proxy(v36,v59);
            v61[1] = "MIN_VALUE";
        }
        const v62 = v30();
    }
}
const v63 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v65 = new Proxy(v16,v63);
v65[1] = "d";
}
%NeverOptimizeFunction(main);
main();

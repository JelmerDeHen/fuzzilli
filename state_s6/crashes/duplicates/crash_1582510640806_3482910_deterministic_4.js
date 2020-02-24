function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337];
const v6 = [13.37,"number"];
const v7 = {valueOf:parseFloat,constructor:13.37,__proto__:1337,d:13.37,length:parseFloat,c:1337,e:v6,a:v6};
const v8 = {toString:parseFloat};
let v9 = v5;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        const v27 = [-2331916614,-2331916614,-2331916614];
        const v28 = [3664180981,3664180981,"string","string"];
        function v29(v30,v31) {
            const v35 = [1337,1337,1337,1337,1337];
            function v36(v37,v38,v39,v40) {
                'use strict'
                try {
                    const v41 = new Float64Array(v39);
                    function v43(v44,v45,v46,v47,v48) {
                        'use strict'
                        function v49(v50,v51,v52,v53) {
                            'use strict'
                            let v54 = v20;
                            const v55 = {isExtensible:v54,preventExtensions:v44,ownKeys:v54,get:v23,getOwnPropertyDescriptor:parseFloat,getPrototypeOf:v54,setPrototypeOf:v39,has:v22,apply:v38,deleteProperty:v51,call:v54,set:v54};
                        }
                    }
                    const v56 = v43.toLocaleString();
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
}
const v66 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v68 = new Proxy(v17,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

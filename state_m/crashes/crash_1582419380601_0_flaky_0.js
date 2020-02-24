function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337];
const v7 = [13.37,13.37,"toString"];
const v8 = {a:v7,length:1337,constructor:v4,toString:v6,__proto__:13.37,valueOf:"toString",b:parseInt};
const v9 = {b:-4038474934};
let v10 = 13.37;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    const v28 = [-2331916614,-2331916614,-2331916614];
    const v29 = [3664180981,3664180981,"string","string"];
    const v30 = {valueOf:v29,length:v28,toString:parseFloat,constructor:"string",c:parseFloat};
    function v31(v32,v33) {
        const v37 = [1337,1337,1337,1337,1337];
        function v38(v39,v40,v41,v42) {
            'use strict'
            try {
                const v43 = new Float64Array(v41);
                function v45(v46,v47,v48,v49,v50) {
                    'use strict'
                }
                const v51 = v45.toLocaleString();
                const v53 = [];
                const v54 = {a:v53};
                const v55 = {__proto__:eval,constructor:v54,length:v53};
                const v57 = Object.defineProperty(Uint8ClampedArray,1337,v42);
                const v59 = [13.37];
                function v60(v61,v62,v63,v64) {
                    'use strict'
                    try {
                    } catch(v65) {
                        const v66 = v59 === v65;
                    }
                }
            } catch(v67) {
                try {
                    const v68 = v39[3];
                } catch(v69) {
                    v67.valueOf = v67;
                }
            }
            return v38;
        }
        const v70 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
        const v72 = new Proxy(v37,v70);
        v72[1] = "MIN_VALUE";
    }
    const v73 = v31();
}
const v74 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v76 = new Proxy(v18,v74);
v76[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

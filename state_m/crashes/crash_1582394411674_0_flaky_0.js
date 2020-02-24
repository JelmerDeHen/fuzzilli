function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [ArrayBuffer,v5];
const v7 = {valueOf:v5,c:v3,e:"CBBJCkSMMx",d:v6,toString:v5};
const v8 = {};
let v9 = v7;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v17 = [1337,1337,ArrayBuffer,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        const v28 = [-2331916614,-2331916614,-2331916614];
        const v29 = [3664180981,3664180981,"string","string"];
        const v30 = {valueOf:v29,length:v28,toString:parseFloat,constructor:"string",c:parseFloat};
        function v31(v32,v33) {
            const v37 = [1337,1337,1337,1337,1337];
            function v38(v39,v40,v41,v42) {
                'use strict'
                try {
                    const v43 = new Float64Array(v41);
                    function v44(v45,v46,v47,v48,v49) {
                        'use strict'
                    }
                    const v50 = v44.toLocaleString();
                    const v52 = [];
                    const v53 = {a:v52};
                    const v54 = {__proto__:eval,constructor:v53,length:v52};
                    const v56 = Object.defineProperty(v44,1337,v42);
                } catch(v57) {
                    try {
                        const v58 = v39[3];
                    } catch(v59) {
                        v57.valueOf = v57;
                    }
                }
                return v38;
            }
            const v60 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
            const v62 = new Proxy(v37,v60);
            v62[1] = "MIN_VALUE";
        }
        const v63 = v31();
    }
}
const v64 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v66 = new Proxy(v17,v64);
v66[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

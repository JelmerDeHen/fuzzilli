function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [1337,"MIN_SAFE_INTEGER",v3,13.37];
const v7 = {a:eval,b:v6,e:"MIN_SAFE_INTEGER",valueOf:v6,c:"MIN_SAFE_INTEGER",constructor:v3,d:13.37};
const v8 = {c:13.37};
let v9 = v6;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v17 = [1337,1337,1337,1337,1337];
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
                    function v45(v46,v47,v48,v49,v50) {
                        'use strict'
                        let v51 = -2331916614;
                        const v52 = v18(1337,v51,v42);
                    }
                    const v53 = v45.toLocaleString();
                    const v55 = Object.defineProperty(this,1337,v42);
                } catch(v56) {
                    try {
                        const v57 = v39[3];
                    } catch(v58) {
                        v56.valueOf = v56;
                    }
                }
                return v38;
            }
            const v59 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
            const v61 = new Proxy(v37,v59);
            v61[1] = "MIN_VALUE";
        }
        const v62 = v31();
    }
}
const v63 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v65 = new Proxy(v17,v63);
v65[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [];
const v6 = {__proto__:v2,length:1337,a:v4,b:Set};
const v7 = {a:v4,valueOf:1337};
let v8 = 13.37;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    const v28 = [-2331916614,-2331916614,-2331916614];
    const v29 = [3664180981,3664180981,"string","string"];
    const v30 = {valueOf:v29,length:v28,toString:parseFloat,constructor:"string",c:parseFloat};
    function v31(v32,v33) {
        function v36(v37,v38,v39,v40) {
            'use strict'
            try {
                const v41 = new Float64Array(v39);
                function v43(v44,v45,v46,v47,v48) {
                    'use strict'
                    return v43;
                }
                const v49 = v43.toLocaleString();
                const v51 = [];
                const v52 = {a:v51};
                const v53 = {__proto__:eval,constructor:v52,length:v51};
                const v55 = Object.defineProperty(this,1337,v40);
            } catch(v56) {
                try {
                    const v57 = v37[3];
                } catch(v58) {
                    v56.valueOf = v56;
                }
            }
            return v36;
        }
        const v59 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
        const v61 = new Proxy(v32,v59);
        v61[1] = "MIN_VALUE";
    }
    const v62 = v31(v30);
}
const v63 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v65 = new Proxy(v18,v63);
v65[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

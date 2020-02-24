function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337];
const v5 = [v4];
const v6 = {c:Uint32Array};
const v7 = {__proto__:v2,d:1337,length:v6,valueOf:v4,a:v4,c:1337};
let v8 = 1337;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    const v26 = [-2331916614,-2331916614,-2331916614];
    const v27 = [3,3,"string","string"];
    const v28 = {valueOf:v27,length:v26,toString:arguments,constructor:"string",c:arguments};
    function v29(v30,v31) {
        const v35 = [1337,1337,1337,1337,1337];
        function v36(v37,v38,v39,v40) {
            'use strict'
            try {
                const v41 = new Float64Array(v39);
                function v43(v44,v45,v46,v47,v48) {
                    'use strict'
                    return v41;
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
        const v61 = new Proxy(v35,v59);
        v61[1] = "MIN_VALUE";
    }
    const v62 = v29();
}
const v63 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v65 = new Proxy(v16,v63);
v65[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

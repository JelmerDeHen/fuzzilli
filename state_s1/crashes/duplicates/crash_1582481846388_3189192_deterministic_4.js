function main() {
const v3 = [13.37,13.37];
const v5 = [1337];
const v6 = [v3];
const v7 = {a:v3,d:v3,b:v6,valueOf:1782927851,__proto__:v3};
const v8 = {a:v7,b:v7,c:v5,valueOf:"4UH2M8+s74",__proto__:v7,constructor:v7};
let v9 = v6;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    const v27 = [-2331916614,-2331916614,-2331916614];
    const v28 = [3664180981,3664180981,"string","string"];
    const v29 = {valueOf:v28,length:v27,toString:parseFloat,constructor:"string",c:parseFloat};
    function v30(v31,v32) {
        const v36 = [1337,1337,1337,1337,1337];
        function v37(v38,v39,v40,v41) {
            'use strict'
            try {
                function v42(v43,v44) {
                    return v42;
                }
                const v45 = new Float64Array(v40);
                function v47(v48,v49,v50,v51,v52) {
                    'use strict'
                }
                const v53 = v47.toLocaleString();
                const v55 = [];
                const v56 = {a:v55};
                const v57 = {__proto__:eval,constructor:v56,length:v55};
                const v59 = Object.defineProperty(this,1337,v41);
            } catch(v60) {
                try {
                    const v61 = v38[3];
                } catch(v62) {
                    v60.valueOf = v60;
                }
            }
            return v37;
        }
        const v63 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
        const v65 = new Proxy(v36,v63);
        v65[1] = "MIN_VALUE";
    }
    const v66 = v30();
}
const v67 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v69 = new Proxy(v17,v67);
v69[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

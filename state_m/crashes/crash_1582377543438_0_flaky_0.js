function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [Reflect,-65535,1337];
const v7 = {e:v3,__proto__:13.37,d:v6,toString:-65535};
const v8 = {length:v5,c:v7,__proto__:v3,toString:13.37,d:13.37};
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
        const v36 = [80483318,80483318,80483318,80483318,80483318];
        function v37(v38,v39,v40,v41) {
            'use strict'
            try {
                const v42 = new Float64Array(v40);
                function v44(v45,v46,v47,v48,v49) {
                    'use strict'
                }
                const v50 = v44.toLocaleString();
                const v52 = [];
                const v53 = {a:v52};
                const v54 = {__proto__:eval,constructor:v53,length:v52};
                const v56 = [1337,1337,1337,1337,1337];
                function v57(v58,v59,v60,v61) {
                    'use strict'
                    let v62 = v56;
                }
                const v64 = Object.defineProperty(this,1337,v41);
            } catch(v65) {
                try {
                    const v66 = v38[3];
                } catch(v67) {
                    v65.valueOf = v65;
                }
            }
            return v37;
        }
        const v68 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
        const v70 = new Proxy(v36,v68);
        v70[1] = "MIN_VALUE";
    }
    const v71 = v30();
}
const v72 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v74 = new Proxy(v17,v72);
v74[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

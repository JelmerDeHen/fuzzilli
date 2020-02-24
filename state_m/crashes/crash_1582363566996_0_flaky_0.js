function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [];
const v7 = {valueOf:13.37,__proto__:ArrayBuffer,a:13.37,b:"b",toString:"b"};
const v8 = {valueOf:v7,toString:ArrayBuffer};
let v9 = 13.37;
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
                        return v45;
                    }
                    const v51 = v45.toLocaleString();
                    const v53 = [];
                    const v54 = {a:v53};
                    const v55 = {__proto__:eval,constructor:v54,length:v53};
                    const v57 = Object.defineProperty(this,1337,v42);
                } catch(v58) {
                    try {
                        const v59 = v39[3];
                    } catch(v60) {
                        v58.valueOf = v58;
                    }
                }
                return v38;
            }
            const v61 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
            const v63 = new Proxy(v37,v61);
            v63[1] = "MIN_VALUE";
        }
        const v64 = v31();
    }
}
const v65 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v67 = new Proxy(v17,v65);
v67[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v4 = [13.37];
const v6 = [1337,1337];
const v7 = [Object,"number"];
const v8 = {valueOf:v7,d:13.37};
const v9 = {valueOf:v7,d:1337,b:v4,toString:"number",__proto__:-1024};
let v10 = v8;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
const v20 = [1337,1337,1337,1337,1337];
function v21(v22,v23,v24,v25) {
    'use strict'
    try {
        v25[3] = v25;
    } catch(v26) {
        const v31 = [-2331916614,-2331916614,-2331916614];
        const v32 = [3664180981,3664180981,"string","string"];
        const v33 = {valueOf:v32,length:v31,toString:parseFloat,constructor:"string",c:parseFloat};
        function v34(v35,v36) {
            const v40 = [eval,13.37,-4294967296];
            const v42 = {get:eval};
            const v44 = Object.seal(v40,1337);
            const v48 = [1337,1337,1337,1337,1337];
            function v49(v50,v51,v52,v53) {
                'use strict'
                try {
                    const v54 = new Float64Array(v52);
                    const v58 = new Uint32Array();
                    const v59 = v58.slice();
                    function v60(v61,v62,v63,v64,v65) {
                        'use strict'
                    }
                    const v66 = v60.toLocaleString();
                    const v68 = [];
                    const v69 = {a:v68};
                    const v70 = {__proto__:eval,constructor:v69,length:v68};
                    let v73 = 0;
                    const v74 = v70.__proto__(v66,v73,19873,Symbol);
                    const v76 = Object.defineProperty(this,1337,v53);
                } catch(v77) {
                    try {
                        const v78 = v50[3];
                    } catch(v79) {
                        v77.valueOf = v77;
                    }
                }
                return v49;
            }
            const v80 = {deleteProperty:v49,set:v49,getPrototypeOf:v49,call:v49,preventExtensions:v49,isExtensible:v49,construct:v49,get:v49,ownKeys:v49,setPrototypeOf:v49,has:v49};
            const v82 = new Proxy(v48,v80);
            v82[1] = "MIN_VALUE";
        }
        const v83 = v34();
    }
}
const v84 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v86 = new Proxy(v20,v84);
v86[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

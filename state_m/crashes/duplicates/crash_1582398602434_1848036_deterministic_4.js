function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = ["number",13.37,v2,"number"];
const v6 = {length:v2};
const v7 = {toString:13.37,__proto__:v4,c:1337,length:v5};
let v8 = v5;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
const v17 = [13.37,13.37,13.37];
let v18 = v17;
const v20 = [1337,1337,1337,1337,1337];
function v21(v22,v23,v24,v25) {
    'use strict'
}
const v26 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v28 = new Proxy(v20,v26);
const v31 = [1337,1337,1337,1337,1337];
function v32(v33,v34,v35,v36) {
    'use strict'
    try {
        v36[3] = v36;
    } catch(v37) {
        const v42 = [-2331916614,-2331916614,-2331916614];
        const v43 = [3664180981,3664180981,"string","string"];
        const v44 = {valueOf:v43,length:v42,toString:parseFloat,constructor:"string",c:parseFloat};
        function v45(v46,v47) {
            const v51 = [1337,1337,1337,1337,1337];
            function v52(v53,v54,v55,v56) {
                'use strict'
                try {
                    const v57 = new Float64Array(v55);
                    function v60(v61,v62,v63,v64,v65) {
                        'use strict'
                    }
                    const v66 = v60.toLocaleString();
                    const v68 = [];
                    const v69 = {a:v68};
                    const v70 = {__proto__:eval,constructor:v69,length:v68};
                    let v73 = 0;
                    const v74 = v70.__proto__(v66,v73,19873,Symbol);
                    const v76 = Object.defineProperty(this,1337,v56);
                } catch(v77) {
                    try {
                        const v78 = v53[3];
                    } catch(v79) {
                        v77.valueOf = v77;
                    }
                }
                return v52;
            }
            const v80 = {deleteProperty:v52,set:v52,getPrototypeOf:v52,call:v52,preventExtensions:v52,isExtensible:v52,construct:v52,get:v52,ownKeys:v52,setPrototypeOf:v52,has:v52};
            const v82 = new Proxy(v51,v80);
            v82[1] = "MIN_VALUE";
        }
        const v83 = v45();
    }
}
const v84 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
const v86 = new Proxy(v31,v84);
v86[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

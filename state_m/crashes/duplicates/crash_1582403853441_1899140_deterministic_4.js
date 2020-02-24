function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337];
const v7 = [6,v4];
const v8 = {length:6};
const v9 = {toString:13.37,length:isNaN,constructor:v7,valueOf:v7,d:"NaN",c:isNaN,e:6};
let v10 = 6;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
function v20(v21,v22,v23,v24) {
    'use strict'
}
const v25 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,constructor:1337,has:v20};
let v27 = 0;
const v29 = [1337,1337,1337,1337];
const v31 = [1337,1337,1337,1337,1337];
function v32(v33,v34,v35,v36) {
    'use strict'
}
const v37 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v29,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
const v39 = new Proxy(v31,v37);
const v41 = [1337,1337,1337,1337,1337];
function v42(v43,v44,v45,v46) {
    'use strict'
    try {
        v46[3] = v46;
    } catch(v47) {
        const v52 = [-2331916614,-2331916614,-2331916614];
        const v53 = [3664180981,3664180981,"string","string"];
        const v54 = {valueOf:v53,length:v52,toString:parseFloat,constructor:"string",c:parseFloat};
        function v55(v56,v57) {
            const v61 = [1337,1337,1337,1337,1337];
            function v62(v63,v64,v65,v66) {
                'use strict'
                try {
                    const v67 = new Float64Array(v65);
                    function v69(v70,v71,v72,v73,v74) {
                        'use strict'
                    }
                    const v75 = v69.toLocaleString();
                    const v77 = [];
                    const v78 = {a:v77};
                    const v79 = {__proto__:eval,constructor:v78,length:v77};
                    const v80 = v79.__proto__(v75);
                    const v82 = Object.defineProperty(this,1337,v66);
                } catch(v83) {
                    try {
                        const v84 = v63[3];
                    } catch(v85) {
                        v83.valueOf = v83;
                    }
                }
                return v62;
            }
            const v86 = {deleteProperty:v62,set:v62,getPrototypeOf:v62,call:v62,preventExtensions:v62,isExtensible:v62,construct:v62,get:v62,ownKeys:v62,setPrototypeOf:v62,has:v62};
            const v88 = new Proxy(v61,v86);
            v88[1] = "MIN_VALUE";
        }
        const v89 = v55();
    }
}
const v90 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:v42,has:v42};
const v92 = new Proxy(v41,v90);
v92[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

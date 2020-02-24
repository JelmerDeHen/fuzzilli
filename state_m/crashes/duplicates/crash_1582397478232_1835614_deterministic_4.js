function main() {
const v1 = [13.37,13.37];
const v3 = [1337,1337];
const v4 = [];
const v5 = {constructor:v4};
const v6 = {};
let v7 = 1337;
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        v16[3] = v16;
    } catch(v17) {
        const v22 = [-2331916614,-2331916614,-2331916614];
        const v23 = [3664180981,3664180981,"string","string"];
        const v24 = {valueOf:v23,length:v22,toString:parseFloat,constructor:"string",c:parseFloat};
        function v25(v26,v27) {
            const v31 = [1337,1337,1337,1337,1337];
            function v32(v33,v34,v35,v36) {
                'use strict'
                try {
                    const v37 = new Float64Array(v35);
                    function v39(v40,v41,v42,v43,v44) {
                        'use strict'
                    }
                    const v45 = v39.toLocaleString();
                    const v47 = [];
                    const v48 = {a:v47};
                    const v49 = {__proto__:eval,constructor:v48,length:v47};
                    let v51 = 0;
                    const v52 = v49.__proto__(v45);
                    function v54(v55,v56,v57,v58,v59) {
                        'use strict'
                    }
                    const v60 = v54.toLocaleString();
                    const v61 = Object.defineProperty(this,1337,v36);
                } catch(v62) {
                    try {
                        const v63 = v33[3];
                    } catch(v64) {
                        v62.valueOf = v62;
                    }
                }
                return v32;
            }
            const v65 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
            const v67 = new Proxy(v31,v65);
            v67[1] = "MIN_VALUE";
        }
        const v68 = v25();
    }
}
const v69 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v71 = new Proxy(v11,v69);
v71[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

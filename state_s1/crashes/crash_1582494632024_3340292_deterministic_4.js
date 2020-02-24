function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [Uint8ClampedArray,v4,1337,v2];
const v6 = {__proto__:1337,length:v4};
const v10 = [1337,1337,1337,1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        v15[3] = v15;
    } catch(v16) {
        const v21 = [-2331916614,-2331916614,-2331916614];
        const v22 = [3664180981,3664180981,"string","string"];
        const v23 = {valueOf:v22,length:v21,toString:parseFloat,constructor:"string",c:parseFloat};
        function v24(v25,v26) {
            const v30 = [1337,1337,1337,1337,1337];
            function v31(v32,v33,v34,v35) {
                'use strict'
                try {
                    const v36 = new Float64Array(v34);
                    function v38(v39,v40,v41,v42,v43) {
                        'use strict'
                    }
                    const v44 = v38.toLocaleString();
                    const v46 = [];
                    const v47 = {a:v46};
                    const v48 = {__proto__:eval,constructor:v47,length:v46};
                    let v50 = 0;
                    const v51 = v48.__proto__(v44);
                    const v53 = Object.defineProperty(this,1337,v35);
                } catch(v54) {
                    try {
                        const v55 = v32[3];
                    } catch(v56) {
                        v54.valueOf = v54;
                    }
                    const v58 = [13.37,13.37,13.37,13.37];
                    const v60 = [1337];
                    for (let v64 = 0; v64 < 3; v64++) {
                        const v65 = v60.push(v58);
                    }
                }
                return v31;
            }
            const v66 = {deleteProperty:v31,set:v31,getPrototypeOf:v31,call:v31,preventExtensions:v31,isExtensible:v31,construct:v31,get:v31,ownKeys:v31,setPrototypeOf:v31,has:v31};
            const v68 = new Proxy(v30,v66);
            v68[1] = "MIN_VALUE";
        }
        const v69 = v24();
    }
}
const v70 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:Float64Array,has:v11};
const v72 = new Proxy(v10,v70);
v72[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

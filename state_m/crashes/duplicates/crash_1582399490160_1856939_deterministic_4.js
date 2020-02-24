function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [13.37,1337,v3];
const v7 = {b:v6,a:v6,constructor:v3,length:isFinite,toString:255};
const v8 = {__proto__:v7};
let v9 = v6;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
    } catch(v25) {
        const v30 = [-2331916614,-2331916614,-2331916614];
        const v31 = [3664180981,3664180981,"string","string"];
        const v32 = {valueOf:v31,length:v30,toString:parseFloat,constructor:"string",c:parseFloat};
        function v33(v34,v35) {
            const v39 = [1337,1337,1337,1337,1337];
            function v40(v41,v42,v43,v44) {
                'use strict'
                try {
                    const v45 = new Float64Array(v43);
                    function v47(v48,v49,v50,v51,v52) {
                        'use strict'
                        return v44;
                    }
                    const v53 = v47.toLocaleString();
                    const v55 = [];
                    const v56 = {a:v55};
                    const v57 = {__proto__:eval,constructor:v56,length:v55};
                    const v59 = 9007199254740992 | 9007199254740992;
                    const v61 = Object();
                    const v64 = [-1000.0,-1000.0];
                    const v69 = [Reflect,13.37,64];
                    const v70 = [-1024];
                    const v71 = v69.splice(v59,0,13.37,v70,v61);
                    const v73 = Object.defineProperty(this,1337,v44);
                } catch(v74) {
                    try {
                        const v75 = v41[3];
                    } catch(v76) {
                        v74.valueOf = v74;
                    }
                }
                return v40;
            }
            const v77 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v79 = new Proxy(v39,v77);
            v79[1] = "MIN_VALUE";
        }
        const v80 = v33();
    }
}
const v81 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v83 = new Proxy(v19,v81);
v83[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

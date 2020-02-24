function main() {
const v3 = [13.37];
const v5 = [1337];
const v6 = [v5,13.37,Math];
const v7 = {d:"undefined",a:v3};
const v8 = {length:13.37,valueOf:v5,toString:1337,__proto__:"undefined",a:1337,d:v7};
let v9 = "undefined";
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
                    }
                    const v53 = v47.toLocaleString();
                    const v55 = [];
                    const v56 = {a:v55};
                    const v57 = {__proto__:eval,constructor:v56,length:v55};
                    let v59 = 0;
                    const v60 = v57.__proto__(v53);
                    const v62 = Object.defineProperty(this,1337,v44);
                } catch(v63) {
                    try {
                        const v64 = v41[3];
                    } catch(v65) {
                        function v67(v68,v69,v70,v71,v72) {
                        }
                        const v74 = [13.37];
                        const v76 = {set:v67,get:gc};
                        const v78 = Object.defineProperty(v74,"__proto__",v76);
                        v63.valueOf = v63;
                    }
                }
                return v40;
            }
            const v79 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v81 = new Proxy(v39,v79);
            v81[1] = "MIN_VALUE";
        }
        const v82 = v33();
    }
}
const v83 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v85 = new Proxy(v19,v83);
v85[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

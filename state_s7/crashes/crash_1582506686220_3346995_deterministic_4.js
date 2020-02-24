function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [];
const v6 = {e:1337,a:v5,length:v2,__proto__:1337,toString:v4};
const v7 = {e:-2,d:1337,b:1337};
let v8 = v7;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        v23[3] = v23;
    } catch(v24) {
        const v29 = [-2331916614,-2331916614,-2331916614];
        const v30 = [3664180981,3664180981,"string","string"];
        const v31 = {valueOf:v30,length:v29,toString:parseFloat,constructor:"string",c:parseFloat};
        function v32(v33,v34) {
            const v38 = [1337,1337,1337,1337,1337];
            function v39(v40,v41,v42,v43) {
                'use strict'
                try {
                    const v44 = new Float64Array(v42);
                    function v46(v47,v48,v49,v50,v51) {
                        'use strict'
                    }
                    const v52 = v46.toLocaleString();
                    const v54 = [];
                    const v55 = {a:v54};
                    const v57 = (1337).__proto__;
                    const v58 = {__proto__:eval,constructor:v55,length:v54};
                    let v60 = 0;
                    const v61 = v58.__proto__(v52);
                    const v63 = Object.defineProperty(this,1337,v43);
                } catch(v64) {
                    try {
                        const v65 = v40[3];
                        function v67(v68,v69,v70,v71,v72) {
                        }
                        const v74 = [13.37];
                        const v76 = {set:v67,get:gc};
                        const v78 = Object.defineProperty(v74,"__proto__",v76);
                    } catch(v79) {
                        v64.valueOf = v64;
                    }
                }
                return v39;
            }
            const v80 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v82 = new Proxy(v38,v80);
            v82[1] = "MIN_VALUE";
        }
        const v83 = v32();
    }
}
const v84 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v86 = new Proxy(v18,v84);
v86[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

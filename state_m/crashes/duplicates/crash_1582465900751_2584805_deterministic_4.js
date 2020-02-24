function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = ["byteOffset",NaN,13.37];
const v8 = {a:1000,__proto__:v7,d:v4,valueOf:"byteOffset",toString:NaN};
const v9 = {e:v8,d:13.37,length:v7};
let v10 = NaN;
const v12 = [13.37,13.37,13.37,13.37];
const v15 = [9007199254740993,9007199254740993,9007199254740993];
let v16 = v15;
const v18 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v19(v20,v21,v22,v23) {
    'use strict'
}
const v24 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v26 = new Proxy(v18,v24);
const v27 = [1337,1337,1337,1337];
const v28 = [];
const v29 = {b:1337,c:v12,d:13.37,a:v27,length:v28,valueOf:1337};
const v33 = [1337,1337,1337,1337,1337];
function v34(v35,v36,v37,v38) {
    'use strict'
    try {
        v38[3] = v38;
    } catch(v39) {
        const v44 = [-2331916614,-2331916614,-2331916614];
        const v45 = [3664180981,3664180981,"string","string"];
        const v46 = {valueOf:v45,length:v44,toString:parseFloat,constructor:"string",c:parseFloat};
        function v47(v48,v49) {
            const v53 = [1337,1337,1337,1337,1337];
            function v54(v55,v56,v57,v58) {
                'use strict'
                try {
                    const v59 = new Float64Array(v57);
                    function v62(v63,v64,v65,v66,v67) {
                        'use strict'
                    }
                    const v68 = v62.toLocaleString();
                    const v70 = [];
                    const v71 = {a:v70};
                    const v72 = {__proto__:eval,constructor:v71,length:v70};
                    let v75 = 0;
                    const v76 = v72.__proto__(v68,v75,19873,Symbol);
                    const v78 = Object.defineProperty(this,1337,v58);
                } catch(v79) {
                    try {
                        const v80 = v55[3];
                    } catch(v81) {
                        v79.valueOf = v79;
                    }
                }
                return v54;
            }
            const v82 = {deleteProperty:v54,set:v54,getPrototypeOf:v54,call:v54,preventExtensions:v54,isExtensible:v54,construct:v54,get:v54,ownKeys:v54,setPrototypeOf:v54,has:v54};
            const v84 = new Proxy(v53,v82);
            v84[1] = "MIN_VALUE";
        }
        const v85 = v47();
    }
}
const v86 = {deleteProperty:v34,set:v34,getPrototypeOf:v34,call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:v34,has:v34};
const v88 = new Proxy(v33,v86);
v88[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

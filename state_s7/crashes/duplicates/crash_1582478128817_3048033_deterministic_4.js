function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = ["match",1583934458];
const v7 = {c:"match",length:v3,a:v5};
const v8 = {a:13.37,c:13.37,__proto__:v7,length:1583934458,toString:1337};
let v9 = 1337;
const v11 = [9007199254740993,9007199254740993,9007199254740993];
let v12 = v11;
const v14 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v15(v16,v17,v18,v19) {
    'use strict'
}
const v20 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v22 = new Proxy(v14,v20);
const v24 = [13.37,13.37,13.37,13.37];
const v27 = new Int16Array();
const v28 = [1337,1337,1337,1337];
const v29 = [];
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
            const v82 = {deleteProperty:v54,set:v54,length:v54,call:v54,preventExtensions:v54,isExtensible:v54,construct:v54,get:v54,ownKeys:v54,setPrototypeOf:v54,has:v54};
            const v84 = new Proxy(v53,v82);
            v84[19873] = "MIN_VALUE";
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

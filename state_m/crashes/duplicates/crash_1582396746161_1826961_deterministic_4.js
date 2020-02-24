function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [13.37,v5,"undefined",v3];
const v7 = {d:13.37,valueOf:v5,b:v6,constructor:13.37,toString:v3};
const v8 = {d:"undefined",__proto__:1337,a:-1889386552,toString:"undefined",e:v6};
let v9 = v7;
const v11 = [1337];
let v12 = "undefined";
let v14 = undefined;
let v16 = 0;
const v17 = [];
const v19 = [v17,-1882595336,-1882595336,-1882595336,-1882595336];
function v20(v21,v22,v23,v24) {
    'use strict'
}
const v25 = {c:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v27 = new Proxy(v19,v25);
let v29 = 0;
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

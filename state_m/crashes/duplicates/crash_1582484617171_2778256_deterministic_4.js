function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [];
const v6 = {d:1337,length:v2};
const v7 = {valueOf:Float64Array,toString:v6,__proto__:v2,length:Float64Array};
let v8 = 13.37;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v15 = 2.2250738585072014e-308 / 9007199254740991;
const v16 = [v15];
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
}
const v25 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v27 = new Proxy(v19,v25);
const v28 = [];
const v29 = {b:1337,c:v10,d:13.37,a:v12,length:v28,valueOf:1337};
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

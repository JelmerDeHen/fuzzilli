function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337];
const v6 = [v3];
const v7 = {a:v6,d:13.37,e:v3,length:v3};
const v8 = {a:13.37,__proto__:v7,d:this,constructor:-9007199254740991};
let v9 = v3;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v21 = [13.37,13.37,13.37];
const v23 = [1337,1337,1337,1337,1337];
function v24(v25,v26,v27,v28) {
    'use strict'
    return v25;
}
const v29 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v21,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,__proto__:v24,has:v24};
const v31 = new Proxy(v23,v29);
const v32 = String.raw(v31,1337);
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

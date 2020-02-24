function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337];
const v7 = [1337,Array,1337];
const v8 = {b:Array,c:Array,constructor:-65535,__proto__:v4,a:13.37,valueOf:v6,toString:v7};
const v9 = {length:13.37,d:-65535,constructor:v8,e:v7,valueOf:"replace",toString:1337};
let v10 = "replace";
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
const v20 = [1337,1337,1337,1337,1337];
function v21(v22,v23,v24,v25) {
    'use strict'
    try {
        v25[3] = v25;
    } catch(v26) {
        const v31 = [-2331916614,-2331916614,-2331916614];
        const v32 = [3664180981,3664180981,"string","string"];
        const v33 = {valueOf:v32,length:v31,toString:parseFloat,constructor:"string",c:parseFloat};
        function v34(v35,v36) {
            const v40 = [1337,1337,1337,1337,1337];
            function v41(v42,v43,v44,v45) {
                'use strict'
                try {
                    const v46 = new Float64Array(v44);
                    function v48(v49,v50,v51,v52,v53) {
                        'use strict'
                    }
                    const v54 = v48.toLocaleString();
                    const v56 = Object.defineProperty(this,1337,v45);
                } catch(v57) {
                    try {
                        const v58 = v42[3];
                    } catch(v59) {
                        v57.valueOf = v57;
                        const v61 = [13.37,13.37,13.37,13.37,13.37];
                        function v62(v63,v64) {
                        }
                        const v65 = v61.some(v62);
                    }
                }
                return v41;
            }
            const v66 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:v41,has:v41};
            const v68 = new Proxy(v40,v66);
            v68[1] = "MIN_VALUE";
        }
        const v69 = v34();
    }
}
const v70 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v72 = new Proxy(v20,v70);
v72[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

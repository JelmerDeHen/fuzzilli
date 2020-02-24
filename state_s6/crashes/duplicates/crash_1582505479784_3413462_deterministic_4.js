function main() {
const v3 = [13.37,13.37];
const v5 = [1337];
const v6 = [Int32Array];
const v7 = {a:13.37,e:13.37,c:1305116288,d:13.37};
const v8 = {__proto__:v7,length:Int32Array,valueOf:1305116288,e:13.37,c:Int32Array};
let v9 = 1337;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    const v29 = [-2331916614,-2331916614,-2331916614];
    const v30 = [3664180981,3664180981,"string",1337];
    const v31 = {valueOf:v30,length:v29,toString:parseFloat,constructor:"string",c:parseFloat};
    function v32(v33,v34) {
        function v37(v38,v39,v40,v41) {
            'use strict'
            try {
                const v42 = new Float64Array(v40);
                function v44(v45,v46,v47,v48,v49) {
                    'use strict'
                    return v44;
                }
                const v50 = v44.toLocaleString();
                const v52 = [];
                const v53 = {a:v52};
                const v54 = {__proto__:eval,constructor:v53,length:v52};
                const v56 = Object.defineProperty(this,1337,v41);
            } catch(v57) {
                try {
                    const v58 = v38[3];
                } catch(v59) {
                    v57.valueOf = v57;
                }
            }
            return v37;
        }
        const v60 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
        const v62 = new Proxy(v33,v60);
        v62[1] = "MIN_VALUE";
    }
    const v63 = v32(v31);
}
const v64 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v66 = new Proxy(Proxy,v64);
v66[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

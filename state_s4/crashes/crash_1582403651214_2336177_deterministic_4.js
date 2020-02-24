function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337];
const v6 = [v3,1337,2147483649,"match"];
const v7 = {a:v5,valueOf:v6,d:v3,b:13.37,c:2147483649,length:13.37};
const v8 = {a:v3,valueOf:v3,toString:v7,b:13.37,length:v3};
let v9 = "match";
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
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
                const v56 = {__proto__:eval,constructor:v55,length:v54};
                const v58 = Object.defineProperty(this,1337,v43);
                v44.__proto__ = v38;
            } catch(v59) {
                try {
                    const v60 = v40[3];
                } catch(v61) {
                    v59.valueOf = v59;
                }
            }
            return v39;
        }
        const v62 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
        const v64 = new Proxy(v38,v62);
        v64[1] = "MIN_VALUE";
    }
    const v65 = v32();
}
const v66 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v68 = new Proxy(v19,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

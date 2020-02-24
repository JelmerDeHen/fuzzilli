function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [13.37,"undefined",Proxy];
const v8 = {b:2473693986,length:v7,constructor:v7,valueOf:v4,__proto__:2473693986,a:2473693986,toString:1337};
const v9 = {constructor:v6};
let v10 = Proxy;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    const v28 = [-2331916614,-2331916614,-2331916614];
    const v29 = [3664180981,3664180981,"string","string"];
    const v30 = {valueOf:v29,length:v28,toString:parseFloat,constructor:"string",c:parseFloat};
    function v31(v32,v33) {
        const v37 = [1337,1337,1337,1337,1337];
        function v38(v39,v40,v41,v42) {
            'use strict'
            try {
                const v43 = new Float64Array(v41);
                function v45(v46,v47,v48,v49,v50) {
                    'use strict'
                }
                const v51 = v45.toLocaleString();
                const v53 = [];
                const v54 = {a:v53};
                const v55 = {__proto__:eval,constructor:v54,length:v53};
                const v56 = v43.__proto__;
                const v58 = Object.defineProperty(this,1337,v42);
            } catch(v59) {
                try {
                    const v60 = v39[3];
                } catch(v61) {
                    v59.valueOf = v59;
                }
            }
            return v38;
        }
        const v62 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
        const v64 = new Proxy(v37,v62);
        v64[1] = "MIN_VALUE";
    }
    const v65 = v31();
}
const v66 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v68 = new Proxy(v18,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

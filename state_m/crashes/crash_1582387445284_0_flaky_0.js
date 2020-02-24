function main() {
const v4 = [13.37];
const v6 = [1337,1337];
const v7 = [1337];
const v8 = {b:v6,e:v4,valueOf:9007199254740992,constructor:1337,c:v7,toString:9007199254740992};
const v9 = {a:13.37,toString:9007199254740992,c:1337,constructor:"caller",length:Int8Array};
let v10 = 13.37;
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
                const v57 = new Int32Array();
                v57.constructor = Int8Array;
                const v58 = {__proto__:eval,constructor:v54,length:v53};
                const v60 = Object.defineProperty(this,1337,v42);
            } catch(v61) {
                try {
                    const v62 = v39[3];
                } catch(v63) {
                    v61.valueOf = v61;
                }
            }
            return v38;
        }
        const v64 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
        const v66 = new Proxy(v37,v64);
        v66[1] = "MIN_VALUE";
    }
    const v67 = v31();
}
const v68 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v70 = new Proxy(v18,v68);
v70[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

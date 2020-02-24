function main() {
const v4 = [13.37];
const v6 = [1337,1337];
const v7 = [v6,NaN,"uA9nDYLceK"];
const v8 = {b:v7,toString:13.37,a:1337,constructor:v6,valueOf:v4,__proto__:v4};
const v9 = {b:v8,c:v8,toString:v6,valueOf:v8};
let v10 = 3864359268;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        v23[3] = v23;
    } catch(v24) {
        const v29 = [-2331916614,-2331916614,-2331916614];
        const v30 = [3664180981,3664180981,"string","string"];
        const v31 = {valueOf:v30,length:v29,toString:parseFloat,constructor:"string",c:parseFloat};
        function v32(v33,v34) {
            const v37 = [1337,1337,1337,1337,1337];
            function v38(v39,v40,v41,v42) {
                'use strict'
                try {
                    const v43 = new Float64Array(v41);
                    function v46(v47,v48,v49,v50,v51) {
                        'use strict'
                    }
                    const v52 = v46.toLocaleString();
                    const v54 = [];
                    const v55 = {a:v54};
                    const v56 = {__proto__:eval,constructor:v55,length:v54};
                    const v58 = v56.__proto__(v52,v43,19873,Symbol);
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
            v66[1] = "string";
        }
        const v67 = v32();
    }
}
const v68 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v70 = new Proxy(v18,v68);
v70[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

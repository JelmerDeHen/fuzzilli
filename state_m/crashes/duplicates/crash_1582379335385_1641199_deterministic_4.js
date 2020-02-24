function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = [2411096718,13.37];
const v7 = {__proto__:"symbol",a:v3,b:2411096718,c:"symbol"};
const v8 = {__proto__:v6};
let v9 = v8;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        const v28 = [-2331916614,-2331916614,-2331916614];
        const v29 = [3664180981,3664180981,"string","string"];
        const v30 = {valueOf:v29,length:v28,toString:parseFloat,constructor:"string",c:parseFloat};
        function v31(v32,v33) {
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
                    let v59 = 0;
                    const v60 = v56.__proto__(v52,v59,19873,Symbol);
                    const v62 = Object.defineProperty(this,1337,v42);
                } catch(v63) {
                    try {
                        const v64 = v39[3];
                    } catch(v65) {
                        v63.valueOf = v63;
                    }
                }
                return v38;
            }
            const v66 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
            const v68 = new Proxy(v37,v66);
            v68[1] = "MIN_VALUE";
        }
        const v69 = v31();
    }
}
const v70 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v72 = new Proxy(v17,v70);
v72[1] = "MIN_VALUE";
let v74 = 0;
for (let v78 = 0; v78 < 2; v78++) {
    function v79(v80,v81,v82,v83,v84) {
    }
}
}
%NeverOptimizeFunction(main);
main();

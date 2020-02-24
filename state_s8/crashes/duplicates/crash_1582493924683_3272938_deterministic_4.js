function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [];
const v7 = {valueOf:v6,e:gc,a:13.37,__proto__:"symbol"};
const v8 = {e:v7};
let v9 = 1337;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
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
            const v38 = [1337,1337,1337,1337,1337];
            function v39(v40,v41,v42,v43) {
                'use strict'
                try {
                    const v44 = new Float64Array(v42);
                    function v47(v48,v49,v50,v51,v52) {
                        'use strict'
                    }
                    const v53 = v47.toLocaleString();
                    const v55 = [];
                    const v56 = {a:v55};
                    const v57 = {__proto__:eval,constructor:v56,length:v55};
                    const v60 = [1337];
                    let v61 = v60;
                    let v63 = undefined;
                    let v65 = -128;
                    const v66 = v65 + 1;
                    const v69 = 2.2250738585072014e-308 + 9007199254740991;
                    let v71 = 0;
                    const v72 = v57.__proto__(v53,v71,19873,Symbol);
                    const v74 = Object.defineProperty(this,1337,v43);
                } catch(v75) {
                    try {
                        const v76 = v40[3];
                    } catch(v77) {
                        v75.valueOf = v75;
                    }
                }
                return v39;
            }
            const v78 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v80 = new Proxy(v38,v78);
            v80[1] = "MIN_VALUE";
        }
        const v81 = v32();
    }
}
const v82 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v84 = new Proxy(v18,v82);
v84[1] = v14;
}
%NeverOptimizeFunction(main);
main();

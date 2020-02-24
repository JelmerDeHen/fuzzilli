function main() {
const v3 = [13.37,13.37];
const v4 = ["number",v3,Array];
const v6 = [1337];
const v7 = [];
const v8 = {valueOf:v6};
const v9 = {b:v6,__proto__:v3,constructor:v6,length:13.37,valueOf:v3,a:1337,e:v8};
let v10 = 1337;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
    } catch(v25) {
        const v30 = [-2331916614,-2331916614,-2331916614];
        const v31 = [3664180981,3664180981,"string","string"];
        const v32 = {valueOf:v31,length:v30,toString:parseFloat,constructor:"string",c:parseFloat};
        function v33(v34,v35) {
            let v37 = 1337;
            for (const v38 in v34) {
            }
            const v41 = [1337,1337,1337,1337,1337];
            function v42(v43,v44,v45,v46) {
                'use strict'
                try {
                    const v47 = new Float64Array(v45);
                    function v50(v51,v52,v53,v54,v55) {
                        'use strict'
                    }
                    const v56 = v50.toLocaleString();
                    const v58 = [];
                    const v59 = {a:v58};
                    const v60 = {__proto__:eval,constructor:v59,length:v58};
                    let v63 = 0;
                    const v64 = v60.__proto__(v56,v63,19873,Symbol);
                    const v66 = Object.defineProperty(this,1337,v46);
                } catch(v67) {
                    try {
                        const v68 = v43[3];
                    } catch(v69) {
                        v67.valueOf = v67;
                    }
                }
                return v42;
            }
            const v70 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:v42,has:v42};
            const v72 = new Proxy(v41,v70);
            v72[1] = "MIN_VALUE";
        }
        const v73 = v33();
    }
}
const v74 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v76 = new Proxy(v19,v74);
v76[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

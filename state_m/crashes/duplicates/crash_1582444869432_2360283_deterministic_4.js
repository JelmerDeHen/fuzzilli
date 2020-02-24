function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [v5,v5];
const v7 = {a:1337,d:v3,length:v3,e:13.37};
const v8 = {b:13.37,a:"string",c:1337,length:13.37,e:arguments};
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        v17[3] = v17;
    } catch(v18) {
        const v23 = [-2331916614,-2331916614,-2331916614];
        const v24 = [3664180981,3664180981,"string","string"];
        const v25 = {valueOf:v24,length:v23,toString:parseFloat,constructor:"string",c:parseFloat};
        function v26(v27,v28) {
            const v32 = [1337,1337,1337,1337,1337];
            function v33(v34,v35,v36,v37) {
                'use strict'
                try {
                    const v38 = new Float64Array(v36);
                    function v41(v42,v43,v44,v45,v46) {
                        'use strict'
                    }
                    const v47 = v41.toLocaleString();
                    const v49 = [];
                    const v50 = {a:v49};
                    const v51 = {__proto__:eval,constructor:v50,length:v49};
                    let v53 = v28;
                    const v54 = v51.__proto__(v47,v53,19873,Symbol);
                    const v56 = Object.defineProperty(this,1337,v37);
                } catch(v57) {
                    try {
                        const v58 = v34[3];
                    } catch(v59) {
                        v57.valueOf = v57;
                    }
                }
                return v33;
            }
            const v60 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
            let v62 = arguments;
            const v64 = new Proxy(v32,v60);
            v64[1] = "MIN_VALUE";
        }
        const v65 = v26(v25);
    }
}
const v66 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v68 = new Proxy(v12,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

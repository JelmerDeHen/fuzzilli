function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [13.37,v5,1337,Function];
const v7 = {__proto__:"toStringTag"};
const v8 = {valueOf:Function,length:v7,__proto__:v3,a:"toStringTag",e:v3};
let v9 = v7;
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        v18[3] = v18;
    } catch(v19) {
        const v24 = [-2331916614,-2331916614,-2331916614];
        const v25 = [3664180981,3664180981,"string","string"];
        const v26 = {valueOf:v25,length:v24,toString:parseFloat,constructor:"string",c:parseFloat};
        function v27(v28,v29) {
            const v33 = [1337,1337,1337,1337,1337];
            function v34(v35,v36,v37,v38) {
                'use strict'
                try {
                    const v39 = new Float64Array(v37);
                    function v41(v42,v43,v44,v45,v46) {
                        'use strict'
                        return v36;
                    }
                    const v47 = v41.toLocaleString();
                    const v49 = [];
                    const v50 = {a:v49};
                    const v51 = {__proto__:eval,constructor:v50,length:v49};
                    let v53 = 0;
                    const v54 = v51.__proto__(v47);
                    const v56 = Object.defineProperty(this,1337,v38);
                } catch(v57) {
                    try {
                        const v58 = v35[3];
                    } catch(v59) {
                        v57.valueOf = v57;
                    }
                }
                let v61 = 0;
                return v34;
            }
            const v62 = {deleteProperty:v34,set:v34,getPrototypeOf:v34,call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:v34,has:v34};
            const v64 = new Proxy(v33,v62);
            v64[1] = "MIN_VALUE";
        }
        const v65 = v27();
    }
}
const v66 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v68 = new Proxy(v13,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

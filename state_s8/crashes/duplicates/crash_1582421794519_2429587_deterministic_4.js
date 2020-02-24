function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [1337,-4096,13.37,v6];
const v8 = {b:-4096,length:13.37,d:JSON,__proto__:1337,constructor:v6,toString:"object"};
const v9 = {valueOf:v8,length:1337,c:v4};
let v10 = "object";
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,v7,1337];
const v15 = [];
const v16 = {b:v14,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
    } catch(v25) {
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
                    let v54 = 0;
                    const v55 = v51.__proto__(v47,v54,19873,Symbol);
                    const v57 = Object.defineProperty(this,1337,v37);
                } catch(v58) {
                    try {
                        const v59 = v34[3];
                    } catch(v60) {
                        v58.valueOf = v58;
                    }
                }
                return v33;
            }
            const v61 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
            const v63 = new Proxy(v32,v61);
            v63[1] = "MIN_VALUE";
        }
        const v64 = v26();
    }
}
const v65 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v67 = new Proxy(v19,v65);
const v68 = {};
const v69 = v20(-4096,JSON,v67);
}
%NeverOptimizeFunction(main);
main();

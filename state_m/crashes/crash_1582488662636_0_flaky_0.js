function main() {
const v1 = [13.37,13.37];
const v3 = [1337,1337,1337];
const v4 = [];
const v5 = {length:v4};
const v6 = {b:v5};
let v7 = v1;
const v9 = [13.37,13.37,13.37,13.37];
const v11 = [1337,1337,1337,1337];
const v15 = [1337,1337,1337,1337,1337];
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        v20[3] = v20;
    } catch(v21) {
        const v23 = [1337];
        let v24 = v23;
        const v26 = [-2331916614,-2331916614,-2331916614];
        function v27(v28,v29) {
            const v33 = [1337,1337,1337,1337,1337];
            function v34(v35,v36,v37,v38) {
                'use strict'
                try {
                    const v39 = new Float64Array(v37);
                    function v41(v42,v43,v44,v45,v46) {
                        'use strict'
                        return v39;
                    }
                    const v47 = v41.toLocaleString();
                    const v49 = [];
                    const v50 = {a:v49};
                    const v51 = {__proto__:eval,constructor:v50,length:v49};
                    const v53 = Object.defineProperty(this,1337,v38);
                } catch(v54) {
                    try {
                        const v55 = v35[3];
                    } catch(v56) {
                        v54.valueOf = v54;
                    }
                }
                return v34;
            }
            const v57 = {deleteProperty:v34,set:v34,getPrototypeOf:v34,call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:v34,has:v34};
            const v59 = new Proxy(v33,v57);
            v59[1] = "MIN_VALUE";
        }
        const v60 = v27();
    }
}
const v61 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
const v63 = new Proxy(v15,v61);
v63[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [1150224069,13.37,v4,v2];
const v6 = {d:v2,valueOf:v4,a:1337,length:1337,b:1150224069,c:v5};
const v8 = [1337,1337,1337,1337];
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    const v21 = [-2331916614,-2331916614,-2331916614];
    const v22 = [3664180981,3664180981,"string","string"];
    const v23 = {valueOf:v22,length:v21,toString:parseFloat,constructor:"string",c:parseFloat};
    function v24(v25,v26) {
        for (const v28 in "iterator") {
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
    }
    const v64 = v24(v23);
}
const v65 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,valueOf:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v67 = new Proxy(v11,v65);
const v68 = v67.getOwnPropertyDescriptor(v8,v5,v6);
const v69 = v6.d;
function v70(v71,v72,v73,v74) {
}
const v75 = v69.set();
const v76 = v70();
}
%NeverOptimizeFunction(main);
main();

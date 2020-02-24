function main() {
const v4 = [13.37,13.37];
const v6 = [1337];
const v7 = ["xipKXdhzjw"];
const v8 = {a:v6,b:1337,__proto__:undefined,d:1337,valueOf:v6,c:1337,e:undefined};
const v9 = {a:"xipKXdhzjw",b:1073741824,toString:1337};
let v10 = 1073741824;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        v23[3] = v23;
    } catch(v24) {
        const v26 = [-2331916614,-2331916614,-2331916614];
        function v27(v28,v29) {
            const v33 = [1337,1337,1337,1337,1337];
            function v34(v35,v36,v37,v38) {
                'use strict'
                try {
                    const v39 = new Float64Array(v37);
                    function v41(v42,v43,v44,v45,v46) {
                        'use strict'
                    }
                    const v47 = v41.toLocaleString();
                    const v49 = Object.defineProperty(this,1337,v38);
                } catch(v50) {
                    try {
                        const v51 = v35[3];
                    } catch(v52) {
                        v50.valueOf = v50;
                    }
                }
                return v34;
            }
            const v53 = {deleteProperty:v34,set:v34,getPrototypeOf:v34,call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:v34,has:v34};
            const v55 = new Proxy(v33,v53);
            v55[1] = "MIN_VALUE";
        }
        const v56 = v27();
    }
}
const v57 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v59 = new Proxy(v18,v57);
v59[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

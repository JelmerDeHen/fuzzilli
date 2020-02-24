function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [];
const v7 = {__proto__:v3,length:1337,a:v5,b:Set};
const v8 = {a:v5,valueOf:1337};
let v9 = "3qbojGa2CQ";
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        const v27 = [-2331916614,-2331916614,-2331916614];
        const v28 = [3664180981,3664180981,"string","string"];
        function v29(v30,v31) {
            const v34 = [1337,1337,1337,1337,1337];
            function v35(v36,v37,v38,v39) {
                'use strict'
                try {
                    const v40 = new Float64Array(v38);
                    function v42(v43,v44,v45,v46,v47) {
                        'use strict'
                        return v36;
                    }
                    const v48 = v42.toLocaleString();
                    const v50 = [];
                    const v51 = {a:v50};
                    const v52 = {__proto__:eval,constructor:v51,length:v50};
                    const v53 = v52.__proto__(v48);
                    const v55 = Object.defineProperty(this,v19,v39);
                } catch(v56) {
                    try {
                        const v57 = v36[3];
                    } catch(v58) {
                        v56.valueOf = v56;
                    }
                }
                return v35;
            }
            const v59 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
            const v61 = new Proxy(v34,v59);
            v61[1] = "MIN_VALUE";
        }
        const v62 = v29();
    }
}
const v63 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v65 = new Proxy(v17,v63);
v65[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

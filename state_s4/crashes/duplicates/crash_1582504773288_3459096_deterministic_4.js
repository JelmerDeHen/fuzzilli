function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337];
const v5 = [];
const v6 = {a:arguments,toString:arguments};
const v7 = {};
let v8 = v4;
const v10 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        v19[3] = v19;
    } catch(v20) {
        const v25 = [-2331916614,-2331916614,-2331916614];
        const v26 = [3664180981,3664180981,"string","string"];
        const v27 = {valueOf:v26,length:v25,toString:parseFloat,constructor:"string",c:parseFloat};
        function v28(v29,v30) {
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
                    const v50 = Object.defineProperty(this,1337,v39);
                } catch(v51) {
                    try {
                        const v52 = v36[3];
                    } catch(v53) {
                        v51.valueOf = v51;
                    }
                }
                return v35;
            }
            const v54 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
            const v56 = new Proxy(v34,v54);
            v56[1] = "MIN_VALUE";
        }
        const v57 = v28();
    }
}
const v58 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v60 = new Proxy(v14,v58);
v60[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

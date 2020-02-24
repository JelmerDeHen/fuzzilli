function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [1337,v2,v4,13.37];
const v6 = {e:eval,b:v4,d:1337,valueOf:v5};
const v7 = {length:13.37,d:eval,valueOf:1337};
let v8 = v2;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        v21[3] = v21;
    } catch(v22) {
        const v26 = [-2331916614,-2331916614,v12];
        const v27 = [3664180981,3664180981,"string","string"];
        function v28(v29,v30) {
            const v34 = [1337,1337,1337,1337,1337];
            function v35(v36,v37,v38,v39) {
                'use strict'
                try {
                    const v40 = new Float64Array(v38);
                    function v42(v43,v44,v45,v46,v47) {
                        'use strict'
                        return v38;
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
const v58 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v60 = new Proxy(v16,v58);
v60[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

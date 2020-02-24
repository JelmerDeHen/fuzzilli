function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [v4,"function",13.37,"function"];
const v6 = {};
const v7 = {};
let v8 = "function";
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        v21[3] = 1337;
    } catch(v22) {
        const v26 = [-2331916614,-2331916614,-2331916614];
        const v27 = [3664180981,3664180981,"string","string"];
        function v28(v29,v30) {
            const v34 = [1337,1337,1337,1337,v22];
            function v35(v36,v37,v38,v39) {
                'use strict'
                try {
                    const v40 = new Float64Array(v38);
                    function v42(v43,v44,v45,v46,v47) {
                        'use strict'
                        return v36;
                    }
                    const v48 = v20.toLocaleString();
                    const v50 = [];
                    const v51 = {a:v50};
                    const v52 = {__proto__:eval,constructor:v51,length:v50};
                    let v54 = 0;
                    const v55 = v52.__proto__(v48);
                    const v57 = Object.defineProperty(this,1337,v39);
                } catch(v58) {
                    try {
                        const v59 = v36[3];
                    } catch(v60) {
                        v58.valueOf = v58;
                    }
                }
                return v35;
            }
            const v61 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
            const v63 = new Proxy(v34,v61);
            v63[1] = "MIN_VALUE";
        }
        const v64 = v28();
    }
}
const v65 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v67 = new Proxy(v16,v65);
v67[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

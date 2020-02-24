function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [-736345120,v4,1337];
const v6 = {};
const v7 = {__proto__:v2};
let v8 = 13.37;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        v23[3] = v23;
    } catch(v24) {
        const v29 = [-2331916614,-2331916614,-2331916614];
        const v30 = [3664180981,3664180981,"string","string"];
        const v31 = {valueOf:v30,length:v29,toString:parseFloat,constructor:"string",c:parseFloat};
        function v32(v33,v34) {
            const v36 = [1337,1337,1337];
            const v38 = new Float32Array();
            const v39 = v38.slice();
            let v41 = 0;
            let v43 = 0;
            const v47 = [-2331916614,1337,1337,1337,1337];
            function v48(v49,v50,v51,v52) {
                'use strict'
                try {
                    const v53 = new Float64Array(v51);
                    function v56(v57,v58,v59,v60,v61) {
                        'use strict'
                    }
                    const v62 = v56.toLocaleString();
                    const v64 = [];
                    const v65 = {a:v64};
                    const v66 = {__proto__:eval,constructor:v65,length:v64};
                    let v69 = 0;
                    const v70 = v66.__proto__(v62,v69,19873,Symbol);
                    const v72 = Object.defineProperty(this,1337,v52);
                } catch(v73) {
                    try {
                        const v74 = v49[3];
                    } catch(v75) {
                        v73.valueOf = v73;
                    }
                }
                return v48;
            }
            const v76 = {deleteProperty:v48,set:v48,getPrototypeOf:v48,call:v48,preventExtensions:v48,isExtensible:v48,construct:v48,get:v48,ownKeys:v48,setPrototypeOf:v48,has:v48};
            const v78 = new Proxy(v47,v76);
            v78[1] = "MIN_VALUE";
        }
        const v79 = v29.split;
        const v80 = v32();
    }
}
const v81 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v83 = new Proxy(v18,v81);
v83[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

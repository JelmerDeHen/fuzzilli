function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [1337,"EPSILON",1337,v4];
const v8 = {__proto__:v6,valueOf:v6,length:Math,e:v4,toString:"EPSILON"};
const v9 = {b:9007199254740991,valueOf:9007199254740991,toString:v8};
let v10 = 1337;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
const v20 = [1337,1337,1337,1337,1337];
function v21(v22,v23,v24,v25) {
    'use strict'
    try {
        v25[3] = v25;
    } catch(v26) {
        const v31 = [-2331916614,-2331916614,-2331916614];
        const v32 = [3664180981,3664180981,"string","string"];
        const v33 = {valueOf:v32,length:v31,toString:parseFloat,constructor:"string",c:parseFloat};
        function v34(v35,v36) {
            const v40 = [1337,1337,1337,1337,1337];
            const v42 = new Int8Array();
            const v44 = new Map();
            const v45 = v44.values();
            const v47 = [1337];
            let v48 = v47;
            let v50 = undefined;
            let v52 = 0;
            const v53 = v52 + 1;
            function v54(v55,v56,v57,v58) {
                'use strict'
                try {
                    const v59 = new Float64Array(v57);
                    function v61(v62,v63,v64,v65,v66) {
                        'use strict'
                    }
                    const v67 = v61.toLocaleString();
                    const v69 = [];
                    const v70 = {a:v69};
                    const v71 = {__proto__:eval,constructor:v70,length:v69};
                    const v72 = v71.__proto__(v67);
                    const v74 = Object.defineProperty(this,1337,v58);
                } catch(v75) {
                    try {
                        const v76 = v55[3];
                    } catch(v77) {
                        v75.valueOf = v75;
                    }
                }
                return v54;
            }
            const v78 = {deleteProperty:v54,set:v54,getPrototypeOf:v54,call:v54,preventExtensions:v54,isExtensible:v54,construct:v54,get:v54,ownKeys:v54,setPrototypeOf:v54,has:v54};
            const v80 = new Proxy(v40,v78);
            v80[1] = "MIN_VALUE";
        }
        const v81 = v34();
    }
}
const v82 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v84 = new Proxy(v20,v82);
v84[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = new Int16Array();
const v4 = v3.slice();
const v6 = [13.37,13.37,13.37,13.37,13.37];
const v8 = [1337,1337];
const v9 = [1337,4294967296,v6,1337];
const v10 = {a:"boolean"};
const v11 = {};
let v12 = v10;
const v14 = [13.37,13.37,13.37,13.37];
const v15 = "boolean".slice();
const v16 = [];
const v18 = [1337,1337,1337,1337];
const v19 = [];
const v20 = {b:1337,c:v14,d:13.37,a:v18,length:v19,valueOf:1337};
const v24 = [1337,1337,1337,1337,1337];
function v25(v26,v27,v28,v29) {
    'use strict'
    try {
        v29[3] = v29;
    } catch(v30) {
        const v35 = [-2331916614,-2331916614,-2331916614];
        const v36 = [3664180981,3664180981,"string","string"];
        const v37 = {valueOf:v36,length:v35,toString:parseFloat,constructor:"string",c:parseFloat};
        function v38(v39,v40) {
            const v44 = [1337,1337,1337,1337,1337];
            function v45(v46,v47,v48,v49) {
                'use strict'
                try {
                    const v50 = new Float64Array(v48);
                    function v53(v54,v55,v56,v57,v58) {
                        'use strict'
                    }
                    const v59 = v53.toLocaleString();
                    const v61 = v59.__proto__;
                    const v62 = [];
                    const v63 = {a:v62};
                    const v64 = {__proto__:eval,constructor:v63,length:v62};
                    let v67 = 0;
                    const v68 = v64.__proto__(v59,v67,19873,Symbol,eval);
                    const v70 = Object.defineProperty(this,1337,v49);
                } catch(v71) {
                    try {
                        const v72 = v46[3];
                    } catch(v73) {
                        v71.valueOf = v71;
                    }
                }
                return v45;
            }
            const v74 = {deleteProperty:v45,set:v45,getPrototypeOf:v45,call:v45,preventExtensions:v45,isExtensible:v45,construct:v45,get:v45,ownKeys:v45,setPrototypeOf:v45,has:v45};
            const v76 = new Proxy(v44,v74);
            v76[1] = "MIN_VALUE";
        }
        const v77 = v38();
    }
}
const v78 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
const v80 = new Proxy(v24,v78);
v80[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

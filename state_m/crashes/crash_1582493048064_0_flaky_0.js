function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [13.37,-3399105330];
const v7 = {b:v6};
const v8 = {__proto__:v6,constructor:13.37,valueOf:WeakMap};
let v9 = 13.37;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
let v16 = 0;
const v17 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
    } catch(v25) {
        function v26(v27,v28) {
            const v33 = [1337,1337,1337,1337,1337];
            function v34(v35,v36,v37,v38) {
                'use strict'
                try {
                    const v39 = new Float64Array(v37);
                    function v42(v43,v44,v45,v46,v47) {
                        'use strict'
                    }
                    const v48 = v42.toLocaleString();
                    const v50 = [];
                    const v51 = {a:v50};
                    const v52 = {__proto__:eval,constructor:v51,length:v50};
                    let v55 = 0;
                    const v56 = v52.__proto__(v48,v55,19873,Symbol);
                    const v58 = Object.defineProperty(this,1337,v38);
                } catch(v59) {
                    try {
                        const v60 = v36[3];
                    } catch(v61) {
                        v59.valueOf = v59;
                    }
                }
                return v34;
            }
            const v62 = {deleteProperty:v34,set:v34,getPrototypeOf:"ruHq55V2**",call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:v34,has:v34};
            const v64 = new Proxy(v33,v62);
            v64[4294967297] = "MIN_VALUE";
        }
        const v65 = v26();
    }
}
const v67 = Symbol.toPrimitive;
const v68 = "MIN_VALUE"[v67];
const v69 = "MIN_VALUE".__proto__;
const v70 = v20(v14,Symbol,v17);
}
%NeverOptimizeFunction(main);
main();

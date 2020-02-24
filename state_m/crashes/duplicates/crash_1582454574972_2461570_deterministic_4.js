function main() {
let v4 = 13.37;
const v5 = v4 === -65535;
const v6 = "string".__proto__;
const v7 = [13.37,13.37,13.37,13.37,13.37];
const v9 = [1337,1337,1337,1337,1337];
const v10 = [];
const v11 = {length:v9};
const v12 = {length:v11,c:eval,constructor:v11};
let v13 = eval;
const v15 = [13.37,13.37,13.37,13.37];
const v17 = [1337,1337,1337,v12];
const v18 = [];
const v19 = {b:1337,c:v15,d:13.37,a:v17,length:v18,valueOf:1337};
const v22 = {e:"string",length:v17,d:13.37,...v15};
const v23 = eval[v12];
const v24 = v12.length;
const v26 = [1337,1337,1337,1337,1337];
function v27(v28,v29,v30,v31) {
    'use strict'
    try {
        v31[3] = v31;
    } catch(v32) {
        const v37 = [-2331916614,-2331916614,-2331916614];
        const v38 = [3664180981,3664180981,"string","string"];
        const v39 = {valueOf:v38,length:v37,toString:parseFloat,constructor:"string",c:parseFloat};
        function v40(v41,v42) {
            const v46 = [1337,1337,1337,1337,1337];
            function v47(v48,v49,v50,v51) {
                'use strict'
                try {
                    const v52 = new Float64Array(v50);
                    function v55(v56,v57,v58,v59,v60) {
                        'use strict'
                    }
                    const v61 = v55.toLocaleString();
                    const v63 = [];
                    const v64 = {a:v46};
                    const v65 = {__proto__:eval,constructor:v64,length:v63};
                    let v68 = 0;
                    const v69 = v65.__proto__(v61,v68,19873,Symbol);
                    const v71 = Object.defineProperty(this,1337,v51);
                } catch(v72) {
                    try {
                        const v73 = v48[3];
                    } catch(v74) {
                        v72.valueOf = v72;
                    }
                }
                return v47;
            }
            const v75 = {deleteProperty:v47,set:v47,getPrototypeOf:v47,call:v47,preventExtensions:v47,isExtensible:v47,construct:v47,get:v47,ownKeys:v47,setPrototypeOf:v47,has:v47};
            const v77 = new Proxy(v46,v75);
            v77[1] = "MIN_VALUE";
        }
        const v78 = v37.__proto__;
        const v79 = v40();
    }
}
const v80 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
const v82 = new Proxy(v26,v80);
v82[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

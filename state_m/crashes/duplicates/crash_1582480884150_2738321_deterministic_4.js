function main() {
const v1 = [13.37,13.37];
const v3 = [1337,1337,1337,1337,1337];
const v4 = [1337];
const v5 = {valueOf:v3,constructor:13.37,b:13.37,c:v1};
const v6 = {valueOf:1337,a:v5,__proto__:v4,toString:v5,c:1337};
let v7 = v3;
const v9 = [13.37,13.37,13.37,13.37];
const v11 = [1337,1337,1337,1337];
const v12 = [];
const v13 = {b:1337,c:v9,d:13.37,a:v11,length:v12,valueOf:1337};
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        const v28 = [-2331916614,-2331916614,-2331916614];
        const v29 = [3664180981,3664180981,"string","string"];
        const v30 = {valueOf:v29,length:v28,toString:parseFloat,constructor:"string",c:parseFloat};
        function v31(v32,v33) {
            const v38 = ["EbVA7q923p","EbVA7q923p",13.37,13.37];
            const v40 = new Uint32Array();
            const v41 = v40.slice();
            const v43 = [1337,1337,1337,1337,1337];
            function v44(v45,v46,v47,v48) {
                'use strict'
                try {
                    const v49 = new Float64Array(v47);
                    function v52(v53,v54,v55,v56,v57) {
                        'use strict'
                    }
                    const v58 = v52.toLocaleString();
                    const v60 = [];
                    const v61 = {a:v60};
                    const v62 = {__proto__:eval,constructor:v61,length:v60};
                    let v65 = 0;
                    const v66 = v62.__proto__(v58,v65,19873,Symbol);
                    const v68 = Object.defineProperty(this,1337,v48);
                } catch(v69) {
                    try {
                        const v70 = v45[3];
                    } catch(v71) {
                        v69.valueOf = v69;
                    }
                }
                return v44;
            }
            const v72 = {deleteProperty:v44,set:v44,getPrototypeOf:v44,call:v44,preventExtensions:v44,isExtensible:v44,construct:v44,get:v44,ownKeys:v44,setPrototypeOf:v44,has:v44};
            const v74 = new Proxy(v43,v72);
            v74[1] = "MIN_VALUE";
        }
        const v75 = v28.__proto__;
        const v76 = v31();
    }
}
const v77 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v79 = new Proxy(v17,v77);
v79[1] = "MIN_VALUE";
let v81 = 0;
const v82 = [];
}
%NeverOptimizeFunction(main);
main();

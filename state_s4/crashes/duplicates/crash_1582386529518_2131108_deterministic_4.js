function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [13.37];
const v7 = {toString:v6,constructor:v3,valueOf:13.37,d:"caller",e:v5};
const v8 = {c:1337,__proto__:1337,toString:v5,a:Uint16Array};
let v9 = Uint16Array;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = v5[2147483648];
const v16 = {set:v14};
const v18 = Object.defineProperty(v3,"e",v16);
const v22 = [1337,1337,1337,1337,1337];
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        v27[3] = v27;
    } catch(v28) {
        const v33 = [-2331916614,-2331916614,-2331916614];
        const v34 = [3664180981,3664180981,"string","string"];
        const v35 = {valueOf:v34,length:v33,toString:parseFloat,constructor:"string",c:parseFloat};
        function v36(v37,v38) {
            const v42 = [1337,1337,1337,1337,1337];
            function v43(v44,v45,v46,v47) {
                'use strict'
                try {
                    const v48 = new Float64Array(v46);
                    function v51(v52,v53,v54,v55,v56) {
                        'use strict'
                    }
                    const v57 = v51.toLocaleString();
                    const v59 = [];
                    const v60 = {a:v59};
                    const v61 = {__proto__:eval,constructor:v60,length:v59};
                    let v64 = 0;
                    const v65 = v61.__proto__(v57,v64,19873,Symbol);
                    const v67 = Object.defineProperty(this,1337,v47);
                } catch(v68) {
                    try {
                        const v69 = v44[3];
                    } catch(v70) {
                        v68.valueOf = v68;
                    }
                }
                return v43;
            }
            const v71 = v27 && 1337;
            const v72 = {deleteProperty:v43,set:v43,getPrototypeOf:v43,call:v43,preventExtensions:v43,isExtensible:v43,construct:v43,get:v43,ownKeys:v43,setPrototypeOf:v43,has:v43};
            const v74 = new Proxy(v42,v72);
            v74[1] = "MIN_VALUE";
        }
        const v75 = v36();
    }
}
const v76 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v78 = new Proxy(v22,v76);
v78[1] = "MIN_VALUE";
const v79 = v7 / v16;
}
%NeverOptimizeFunction(main);
main();

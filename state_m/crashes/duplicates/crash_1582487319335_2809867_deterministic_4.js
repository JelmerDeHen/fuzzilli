function main() {
const v2 = [13.37];
const v4 = [v2,1337];
const v5 = [1337,1337];
const v6 = {a:v4,b:v4,constructor:v2,length:v5,toString:v5};
const v7 = {c:v6,b:v5,e:v5,d:v6,length:"species",valueOf:v2};
let v8 = v7;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = {c:v14,toString:-1887532812,valueOf:"e",length:v12,e:v12,d:v14,a:-1887532812,b:v12};
const v16 = {a:13.37,toString:v15};
const v18 = new Uint16Array();
for (const v19 in v4) {
}
const v23 = [1337,1337,1337,1337,1337];
function v24(v25,v26,v27,v28) {
    'use strict'
    try {
        v28[3] = v28;
    } catch(v29) {
        const v34 = [-2331916614,-2331916614,-2331916614];
        const v35 = [3664180981,3664180981,"string","string"];
        const v36 = {valueOf:v35,length:v34,toString:parseFloat,constructor:"string",c:parseFloat};
        function v37(v38,v39) {
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
        const v75 = v37();
    }
}
const v76 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
const v78 = new Proxy(v23,v76);
v78[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
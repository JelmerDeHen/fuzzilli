function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [13.37,Infinity,v4,4];
const v8 = {c:"toString",d:Infinity,__proto__:4,length:Infinity};
const v9 = {d:1337,constructor:1337,length:4,a:v4,toString:v7,__proto__:v8,valueOf:4};
let v10 = 13.37;
const v14 = [Uint8ClampedArray];
const v15 = [v14,653485477,13.37];
const v19 = [13.37,"unscopable"];
const v20 = {a:v19};
const v25 = [13.37,1337];
const v26 = [v15,13.37,-4294967296];
let v27 = v25;
const v28 = {get:eval};
const v30 = [13.37,13.37,13.37,13.37];
const v32 = [1337,1337,1337,1337];
const v36 = [1337,1337,1337,1337,1337];
function v37(v38,v39,v40,v41) {
    'use strict'
    try {
        v41[3] = v41;
    } catch(v42) {
        const v47 = [-2331916614,-2331916614,-2331916614];
        const v48 = [3664180981,3664180981,"string","string"];
        const v49 = {valueOf:v48,length:v47,toString:parseFloat,constructor:"string",c:parseFloat};
        function v50(v51,v52) {
            const v56 = [1337,1337,1337,1337,1337];
            function v57(v58,v59,v60,v61) {
                'use strict'
                try {
                    const v62 = new Float64Array(v60);
                    function v65(v66,v67,v68,v69,v70) {
                        'use strict'
                    }
                    const v71 = v65.toLocaleString();
                    const v73 = [];
                    const v74 = {a:v73};
                    const v75 = {__proto__:eval,constructor:v74,length:v73};
                    let v78 = 0;
                    const v79 = v75.__proto__(v71,v78,19873,Symbol);
                    const v81 = Object.defineProperty(this,1337,v61);
                } catch(v82) {
                    try {
                        const v83 = v58[3];
                    } catch(v84) {
                        v82.valueOf = v82;
                    }
                }
                return v57;
            }
            const v85 = {deleteProperty:v57,set:v57,getPrototypeOf:v57,call:v57,preventExtensions:v57,isExtensible:v57,construct:v57,get:v57,ownKeys:v57,setPrototypeOf:v57,has:v57};
            const v87 = new Proxy(v56,v85);
            v87[1] = "MIN_VALUE";
        }
        const v88 = v50();
    }
}
const v89 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
const v91 = new Proxy(v36,v89);
v91[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

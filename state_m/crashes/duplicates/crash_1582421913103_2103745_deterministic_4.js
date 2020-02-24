function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [13.37,isFinite,"number",1337];
const v8 = {c:isFinite,a:"number",d:v7,__proto__:v6,e:"number"};
const v9 = {c:isFinite,d:v4,constructor:1073741824,toString:v8,length:1337};
let v10 = v9;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
}
const v25 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v27 = new Proxy(v19,v25);
const v30 = [1337,1337,1337,1337,1337];
function v31(v32,v33,v34,v35) {
    'use strict'
    try {
        v35[3] = v35;
    } catch(v36) {
        const v41 = [-2331916614,-2331916614,-2331916614];
        const v42 = [3664180981,3664180981,"string","string"];
        const v43 = {valueOf:v42,length:v41,toString:parseFloat,constructor:"string",c:parseFloat};
        function v44(v45,v46) {
            const v49 = 2.2250738585072014e-308 / 9007199254740991;
            const v50 = [v49];
            const v54 = [1337,1337,1337,1337,1337];
            function v55(v56,v57,v58,v59) {
                'use strict'
                try {
                    const v60 = new Float64Array(v58);
                    function v63(v64,v65,v66,v67,v68) {
                        'use strict'
                    }
                    const v69 = v63.toLocaleString();
                    const v71 = [];
                    const v72 = {a:v71};
                    const v73 = {__proto__:eval,constructor:v72,length:v71};
                    let v76 = 0;
                    const v77 = v73.__proto__(v69,v76,19873,Symbol);
                    const v79 = Object.defineProperty(this,1337,v59);
                } catch(v80) {
                    try {
                        const v81 = v56[3];
                    } catch(v82) {
                        v80.valueOf = v80;
                    }
                }
                return v55;
            }
            const v83 = {deleteProperty:v55,set:v55,getPrototypeOf:v55,call:v55,preventExtensions:v55,isExtensible:v55,construct:v55,get:v55,ownKeys:v55,setPrototypeOf:v55,has:v55};
            const v85 = new Proxy(v54,v83);
            v85[1] = "MIN_VALUE";
        }
        const v86 = v44();
    }
}
const v87 = {deleteProperty:v31,set:v31,getPrototypeOf:v31,call:v31,preventExtensions:v31,isExtensible:v31,construct:v31,get:v31,ownKeys:v31,setPrototypeOf:v31,has:v31};
const v89 = new Proxy(v30,v87);
v89[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

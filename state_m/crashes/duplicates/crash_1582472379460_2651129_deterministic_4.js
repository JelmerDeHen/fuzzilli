function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [v4,-631975840,v6];
const v8 = {valueOf:-631975840,toString:v6,a:v7};
const v9 = {valueOf:v8,b:v6,toString:JSON,__proto__:v7};
let v10 = "E";
const v12 = new Float32Array();
const v13 = v6[-2147483649];
const v14 = {call:v13,setPrototypeOf:v13,construct:v13,apply:v13,ownKeys:v13,has:v13,isExtensible:v13,defineProperty:v13};
const v16 = new Proxy(v7,v14);
const v17 = {getPrototypeOf:v13,defineProperty:v16,call:v13,deleteProperty:v13,setPrototypeOf:v13,construct:v13,has:v16,isExtensible:v13,set:v16,get:v13,getOwnPropertyDescriptor:v16,preventExtensions:v16};
const v19 = new Proxy(v9,v17);
const v20 = v12.slice();
const v22 = [13.37,13.37,13.37,13.37];
const v24 = [1337,1337,1337,1337];
const v25 = [];
const v29 = [1337,1337,1337,1337,1337];
function v30(v31,v32,v33,v34) {
    'use strict'
    try {
        v34[3] = v34;
    } catch(v35) {
        const v40 = [-2331916614,-2331916614,-2331916614];
        const v41 = [3664180981,3664180981,"string","string"];
        const v42 = {valueOf:v41,length:v40,toString:parseFloat,constructor:"string",c:parseFloat};
        function v43(v44,v45) {
            const v49 = [1337,1337,1337,1337,1337];
            function v50(v51,v52,v53,v54) {
                'use strict'
                try {
                    const v55 = new Float64Array(v53);
                    function v58(v59,v60,v61,v62,v63) {
                        'use strict'
                    }
                    const v64 = v58.toLocaleString();
                    const v66 = [];
                    const v67 = {a:v66};
                    const v68 = {__proto__:eval,constructor:v67,length:v66};
                    let v71 = 0;
                    const v72 = v68.__proto__(v64,v71,19873,Symbol);
                    const v74 = Object.defineProperty(this,1337,v54);
                } catch(v75) {
                    try {
                        const v76 = v51[3];
                    } catch(v77) {
                        v75.valueOf = v75;
                    }
                }
                return v50;
            }
            const v78 = {deleteProperty:v50,set:v50,getPrototypeOf:v50,call:v50,preventExtensions:v50,isExtensible:v50,construct:v50,get:v50,ownKeys:v50,setPrototypeOf:v50,has:v50};
            const v80 = new Proxy(v49,v78);
            v80[1] = "MIN_VALUE";
        }
        const v81 = v43();
    }
}
const v82 = {deleteProperty:v30,set:v30,getPrototypeOf:v30,call:v30,preventExtensions:v30,isExtensible:v30,construct:v30,get:v30,ownKeys:v30,setPrototypeOf:v30,has:v30};
const v84 = new Proxy(v29,v82);
v84[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
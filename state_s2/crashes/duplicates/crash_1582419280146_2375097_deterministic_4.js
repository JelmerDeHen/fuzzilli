function main() {
const v4 = [13.37,13.37];
const v6 = [1337];
const v7 = [v4];
const v8 = {d:Int8Array,e:"bv0Rp73Cs/",__proto__:"bv0Rp73Cs/"};
const v9 = {b:v8,constructor:-3343989284,valueOf:13.37,d:-3343989284};
let v10 = v7;
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
            function v41(v42,v43,v44,v45) {
                'use strict'
                try {
                    const v46 = new Float64Array(v44);
                    function v49(v50,v51,v52,v53,v54) {
                        'use strict'
                    }
                    const v55 = v49.toLocaleString();
                    const v57 = [];
                    const v58 = {a:v57};
                    const v59 = {__proto__:eval,constructor:v58,length:v57};
                    let v61 = v42;
                    const v62 = v59.__proto__(v55,v61,19873,Symbol);
                    const v64 = Object.defineProperty(this,1337,v45);
                } catch(v65) {
                    try {
                        const v66 = v42[3];
                    } catch(v67) {
                        v65.valueOf = v65;
                    }
                }
                return v41;
            }
            const v68 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,__proto__:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:v41,has:v41};
            const v70 = new Proxy(v40,v68);
            v70[1] = "MIN_VALUE";
        }
        const v71 = v34();
    }
}
const v72 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v74 = new Proxy(v20,v72);
v74[1] = "MIN_VALUE";
const v75 = {set:v74};
const v77 = Object.defineProperty();
for (let v81 = 0; v81 < 100; v81++) {
    const v82 = v74(v4,1337,v74,v7);
}
}
%NeverOptimizeFunction(main);
main();

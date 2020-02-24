function main() {
const v4 = [13.37];
const v6 = [1337];
const v7 = [3029487629];
const v8 = {b:1337,a:v6,__proto__:v6,length:1337};
const v9 = {valueOf:"object",__proto__:13.37,toString:v8};
let v10 = v9;
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
                    const v57 = [255];
                    let v58 = v57;
                    const v60 = new Float64Array();
                    const v61 = v60.slice();
                    const v63 = [];
                    const v64 = {a:v63};
                    const v65 = {__proto__:eval,constructor:v64,length:v63};
                    let v68 = 0;
                    const v69 = v65.__proto__(v55,v68,19873,Symbol);
                    const v71 = Object.defineProperty(this,1337,v45);
                } catch(v72) {
                    try {
                        const v73 = v42[3];
                    } catch(v74) {
                        v72.valueOf = v72;
                    }
                }
                return v41;
            }
            const v75 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:v41,has:v41};
            const v77 = new Proxy(v40,v75);
            v77[1] = "MIN_VALUE";
        }
        const v78 = v34();
    }
}
const v79 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v81 = new Proxy(v20,v79);
v81[1] = "MIN_VALUE";
const v82 = v10(NaN,v8,v10);
}
%NeverOptimizeFunction(main);
main();

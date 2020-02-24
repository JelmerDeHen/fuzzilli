function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = ["iterator",v6,-2147483647,13.37];
const v8 = {__proto__:this,toString:v7,constructor:v4,a:-2147483647,d:13.37};
const v9 = {__proto__:v4,toString:v6,constructor:v4,d:-2147483647};
let v10 = this;
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
                    function v48(v49,v50,v51,v52,v53) {
                        'use strict'
                    }
                    const v54 = v48.toLocaleString();
                    const v56 = [];
                    const v57 = {a:v56};
                    const v58 = {__proto__:eval,constructor:v57,length:v56};
                    let v60 = 0;
                    const v61 = v58.__proto__(v54);
                    const v63 = Object.defineProperty(this,1337,v45);
                } catch(v64) {
                    try {
                        const v65 = v42[3];
                    } catch(v66) {
                        v64.valueOf = v64;
                        const v69 = Object.defineProperty(v43,"length");
                    }
                }
                return v41;
            }
            const v70 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:v41,has:v41};
            const v72 = new Proxy(v40,v70);
            v72[1] = "MIN_VALUE";
        }
        const v73 = v34();
    }
}
const v74 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v76 = new Proxy(v20,v74);
v76[1] = "MIN_VALUE";
const v77 = Float64Array instanceof Proxy;
let v78 = 1337;
const v80 = [1337,1337,1337];
const v81 = {__proto__:v9,toString:v8,d:v14,call:1337,...1337,...Proxy,...v15};
}
%NeverOptimizeFunction(main);
main();

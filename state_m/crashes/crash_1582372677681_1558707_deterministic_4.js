function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = [4294967296];
const v7 = {e:v3,b:4294967296,valueOf:"search",__proto__:v6};
const v8 = {b:4294967296,d:13.37,toString:"search",c:v5,__proto__:4294967296};
let v9 = 1337;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337];
const v15 = [1337,"U8Sf0oI+2+"];
const v16 = {b:1337,valueOf:v12,length:v15};
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
                    const v47 = v43 + v44;
                    let v50 = 0;
                    do {
                        let v53 = 0;
                        do {
                            const v55 = Symbol.iterator;
                            const v56 = v42[v55];
                            const v57 = v53 + 1;
                            v53 = v57;
                        } while (v53 < 9);
                        const v58 = v50 + 1;
                        v50 = v58;
                    } while (v50 < 8);
                    function v61(v62,v63,v64,v65,v66) {
                        'use strict'
                    }
                    const v67 = v61.toLocaleString();
                    const v69 = [];
                    const v70 = {a:v69};
                    const v71 = {__proto__:eval,constructor:v70,length:v69};
                    let v74 = 0;
                    const v75 = v71.__proto__(v67,v74,19873,Symbol);
                    const v77 = Object.defineProperty(this,1337,v45);
                } catch(v78) {
                }
                return v41;
            }
            const v79 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:v41,has:v41};
            const v81 = new Proxy(v40,v79);
            v81[1] = "MIN_VALUE";
        }
        const v82 = v34();
    }
}
const v83 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v3,has:v21};
const v85 = new Proxy(v20,v83);
v85[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

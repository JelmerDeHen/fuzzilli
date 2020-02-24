function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [1337,"string",v4,Infinity];
const v8 = {e:"string"};
const v9 = {e:v8,b:v7,valueOf:"string",length:Infinity,__proto__:1337,d:2493082875,c:v6};
let v10 = v8;
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
                    let v62 = 0;
                    const v63 = v59.__proto__(v55,v62,19873,Symbol);
                    const v65 = Object.defineProperty(this,1337,v45);
                    const v66 = {get:v34,set:v43};
                    const v68 = Object.defineProperty();
                    const v69 = v42();
                    for (const v70 in v44) {
                    }
                } catch(v71) {
                    try {
                        const v72 = v42[3];
                    } catch(v73) {
                        v71.valueOf = v71;
                    }
                }
                return v41;
            }
            const v74 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:v41,has:v41};
            const v76 = new Proxy(v40,v74);
            v76[1] = "MIN_VALUE";
        }
        const v77 = v34();
    }
}
const v78 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v80 = new Proxy(v20,v78);
v80[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

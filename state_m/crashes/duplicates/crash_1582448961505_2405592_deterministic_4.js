function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [];
const v7 = {d:1337,__proto__:v3,valueOf:1337};
const v8 = {a:Float32Array,toString:1566532623};
let v9 = 1566532623;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
    } catch(v25) {
        const v30 = [-2331916614,-2331916614,-2331916614];
        const v31 = [3664180981,3664180981,"string","string"];
        const v32 = {valueOf:v31,length:v30,toString:parseFloat,constructor:"string",c:parseFloat};
        function v33(v34,v35) {
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
                    let v61 = "ruHq55V2**";
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
            const v68 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:v41,has:v41};
            const v70 = new Proxy(v40,v68);
            v70[1] = "MIN_VALUE";
        }
        const v71 = v33();
    }
}
const v72 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v74 = new Proxy(v19,v72);
v74[1] = "MIN_VALUE";
const v75 = 1566532623 + v15;
const v76 = {setPrototypeOf:v74,getPrototypeOf:v20,construct:v74,defineProperty:v74,getOwnPropertyDescriptor:v20,deleteProperty:v74,preventExtensions:v74,set:v20};
const v78 = Proxy();
const v79 = !"MIN_VALUE";
const v80 = v20(v14,"MIN_VALUE",v75);
}
%NeverOptimizeFunction(main);
main();

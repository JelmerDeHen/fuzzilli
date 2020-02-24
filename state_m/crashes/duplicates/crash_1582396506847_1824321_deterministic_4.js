function main() {
const v3 = [1000000000000.0,1000000000000.0,1000000000000.0];
const v5 = [1337,1337,1337,1337];
const v6 = [1000000000000.0,v5,"undefined",v3];
const v7 = {d:v3,valueOf:v5,b:v6,constructor:1000000000000.0,toString:v3};
const v8 = {d:"undefined",__proto__:1337,a:-1889386552,toString:"undefined",e:v6};
let v9 = v5;
const v12 = ["5hV/2mbTBY","5hV/2mbTBY",1320432668,1320432668];
const v13 = v12.__proto__;
const v16 = [13.37];
const v18 = [1337,1337];
const v19 = [-4294967295,13.37,v16];
const v22 = [];
const v23 = {length:1337,d:1337,d:v22,a:1337,toString:"symbol"};
function v24(v25,v26,v27,v28) {
    'use strict'
}
const v29 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,__proto__:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
const v31 = new Proxy(v23,v29);
const v35 = [1337,1337,1337,1337,1337];
function v36(v37,v38,v39,v40) {
    'use strict'
    try {
        v40[3] = v40;
    } catch(v41) {
        const v46 = [-2331916614,-2331916614,-2331916614];
        const v47 = [3664180981,3664180981,"string","string"];
        const v48 = {valueOf:v47,length:v46,toString:parseFloat,constructor:"string",c:parseFloat};
        function v49(v50,v51) {
            const v55 = [1337,1337,1337,1337,1337];
            function v56(v57,v58,v59,v60) {
                'use strict'
                try {
                    const v61 = new Float64Array(v59);
                    function v64(v65,v66,v67,v68,v69) {
                        'use strict'
                    }
                    const v70 = v64.toLocaleString();
                    const v72 = [];
                    const v73 = {a:v72};
                    const v74 = {__proto__:eval,constructor:v73,length:v72};
                    let v77 = 0;
                    const v78 = v74.__proto__(v70,v77,19873,Symbol);
                    const v80 = Object.defineProperty(this,1337,v60);
                } catch(v81) {
                    try {
                        const v82 = v57[3];
                    } catch(v83) {
                        v81.valueOf = v81;
                    }
                }
                return v56;
            }
            const v84 = {deleteProperty:v56,set:v56,getPrototypeOf:v56,call:v56,preventExtensions:v56,isExtensible:v56,construct:v56,get:v56,ownKeys:v56,setPrototypeOf:v56,has:v56};
            const v86 = new Proxy(v55,v84);
            v86[1] = "MIN_VALUE";
        }
        const v87 = v49();
    }
}
const v88 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
const v90 = new Proxy(v35,v88);
v90[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

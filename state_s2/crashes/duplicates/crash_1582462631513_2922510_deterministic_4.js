function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [];
const v6 = {b:v5,d:-128,a:-128,__proto__:-128,c:v2};
const v7 = {toString:13.37,__proto__:v6,e:v4};
let v8 = 13.37;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
const v21 = [];
const v22 = {b:69494579,d:69494579,constructor:"boolean",a:v21,c:1337,valueOf:"boolean"};
const v23 = [1337,1337,1337,1337,1337];
function v24(v25,v26,v27,v28) {
    'use strict'
    try {
        v28[3] = v28;
    } catch(v29) {
        const v34 = [-2331916614,-2331916614,-2331916614];
        const v35 = [3664180981,3664180981,"string","string"];
        const v36 = {valueOf:v35,length:v34,toString:parseFloat,constructor:"string",c:parseFloat};
        function v37(v38,v39) {
            const v43 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
            const v45 = new Float32Array();
            const v46 = v45.slice();
            const v48 = [1337,1337,1337,1337,1337];
            function v49(v50,v51,v52,v53) {
                'use strict'
                try {
                    const v54 = new Float64Array(v52);
                    function v57(v58,v59,v60,v61,v62) {
                        'use strict'
                    }
                    const v63 = v57.toLocaleString();
                    const v65 = [];
                    const v66 = {a:v65};
                    const v67 = {__proto__:eval,constructor:v66,length:v65};
                    let v70 = 0;
                    const v71 = v67.__proto__(v63,v70,19873,Symbol);
                    const v73 = Object.defineProperty(this,1337,v53);
                } catch(v74) {
                    try {
                        const v75 = v50[3];
                    } catch(v76) {
                        v74.toString = v74;
                    }
                }
                return v49;
            }
            const v77 = {deleteProperty:v49,set:v49,getPrototypeOf:v49,call:v49,preventExtensions:v49,isExtensible:v49,construct:v49,get:v49,ownKeys:v49,setPrototypeOf:v49,has:v49};
            const v79 = new Proxy(v48,v77);
            v79[1] = "MIN_VALUE";
        }
        const v80 = v34.__proto__;
        const v81 = v37();
    }
}
const v82 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
const v84 = new Proxy(v23,v82);
v84[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

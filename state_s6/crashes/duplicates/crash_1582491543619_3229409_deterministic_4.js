function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = {b:v5};
const v7 = {d:v6,length:4294967296,valueOf:1337,a:13.37,e:4294967296,__proto__:v3};
const v8 = v7.includes();
const v11 = [13.37,13.37,13.37];
const v13 = [1337,1337];
const v14 = [];
const v15 = {a:"o5R9jvkC6H",e:"o5R9jvkC6H",d:"o5R9jvkC6H",toString:v14,c:v14};
const v16 = {a:13.37,b:-2821009372,toString:v15,valueOf:v13,c:v15};
let v17 = v15;
const v19 = [13.37,13.37,13.37,13.37];
const v21 = [1337,1337,1337,1337];
const v22 = [];
const v26 = [1337,1337,1337,1337,1337];
function v27(v28,v29,v30,v31) {
    'use strict'
    try {
        v31[3] = v31;
    } catch(v32) {
        const v37 = [-2331916614,-2331916614,-2331916614];
        const v38 = [3664180981,3664180981,"string","string"];
        const v39 = {valueOf:v38,length:v37,toString:parseFloat,constructor:"string",c:parseFloat};
        function v40(v41,v42) {
            let v47 = 13.37;
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
                        v74.valueOf = v74;
                    }
                }
                return v49;
            }
            const v77 = {deleteProperty:v49,set:v49,getPrototypeOf:v49,call:v49,preventExtensions:v49,isExtensible:v49,construct:v49,get:v49,ownKeys:v49,setPrototypeOf:v49,has:v49};
            const v79 = new Proxy(v48,v77);
            v79[1] = "MIN_VALUE";
        }
        const v80 = v37.__proto__;
        const v81 = v40();
    }
}
const v82 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
const v84 = new Proxy(v26,v82);
v84[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

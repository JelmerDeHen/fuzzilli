function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337,1337];
const v4 = [v1,v1];
const v5 = {};
const v6 = {b:1337,c:1337};
let v7 = v1;
const v9 = [13.37,13.37,13.37,13.37];
const v11 = [1337,1337,1337,1337];
const v12 = [];
const v13 = {b:1337,c:v9,d:13.37,a:v11,length:v12,valueOf:1337};
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        const v28 = [-2331916614,-2331916614,-2331916614];
        const v29 = [3664180981,3664180981,"string","string"];
        const v30 = {valueOf:v29,length:v28,toString:parseFloat,constructor:"string",c:parseFloat};
        function v31(v32,v33) {
            const v37 = [1337,1337,1337,1337,1337];
            function v38(v39,v40,v41,v42) {
                'use strict'
                try {
                    const v43 = new Float64Array(v41);
                    function v46(v47,v48,v49,v50,v51) {
                        'use strict'
                    }
                    const v52 = v46.toLocaleString();
                    const v54 = [];
                    const v55 = {a:v54};
                    const v56 = {__proto__:eval,constructor:v55,length:v54};
                    const v63 = [13.37];
                    const v64 = {__proto__:v63,a:v63,constructor:1337,e:13.37,length:"number",b:13.37};
                    const v65 = 13.37 && v64;
                    let v67 = v65;
                    const v68 = JSON.stringify(v67);
                    const v69 = JSON.parse(v68);
                    let v70 = 0;
                    const v71 = v56.__proto__(v52,v70,19873,Symbol);
                    const v73 = Object.defineProperty(this,1337,v42);
                } catch(v74) {
                    try {
                        const v75 = v39[3];
                    } catch(v76) {
                        v74.valueOf = v74;
                    }
                }
                return v38;
            }
            const v77 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
            const v79 = new Proxy(v37,v77);
            v79[1] = "MIN_VALUE";
        }
        const v80 = v31();
    }
}
const v81 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v83 = new Proxy(v17,v81);
v83[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

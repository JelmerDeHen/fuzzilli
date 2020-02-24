function main() {
const v1 = [13.37,13.37,13.37];
const v3 = [1337,1337,1337];
const v4 = [];
const v5 = {};
const v6 = {length:13.37,b:v5,__proto__:v3};
let v7 = 13.37;
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
            let v35 = 0;
            const v36 = v35 + 1;
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
                } catch(v66) {
                    const v69 = [13.37,13.37,13.37,13.37,13.37];
                    const v71 = [1337,1337,1337,1337,1337];
                    const v72 = [v69,v71,v69,Set];
                    let v73 = v72;
                    try {
                        const v74 = v42[3];
                    } catch(v75) {
                        v66.valueOf = v66;
                    }
                }
                return v41;
            }
            const v76 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:v41,has:v41};
            const v78 = new Proxy(v40,v76);
            v78[1] = "MIN_VALUE";
        }
        const v79 = v31();
    }
}
const v80 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v82 = new Proxy(v17,v80);
v82[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

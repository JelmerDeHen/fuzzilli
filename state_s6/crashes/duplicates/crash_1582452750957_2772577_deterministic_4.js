function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337];
const v6 = [1337,13.37];
const v7 = {a:v5,e:v3,length:v6,valueOf:Reflect};
const v9 = [13.37,13.37,13.37,13.37];
let v11 = 0;
const v12 = v11 + 1;
let v14 = 0;
const v15 = v14 + 1;
const v17 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
const v19 = new Float32Array();
const v20 = v19.slice();
const v21 = {constructor:-65535,e:v5,length:13.37,b:-65535};
let v22 = -65535;
const v24 = [13.37,13.37,13.37,13.37];
const v26 = [1337,1337,1337,1337];
const v30 = [1337,1337,1337,1337,1337];
function v31(v32,v33,v34,v35) {
    'use strict'
    try {
        v35[3] = v35;
    } catch(v36) {
        const v41 = [-2331916614,-2331916614,-2331916614];
        const v42 = [3664180981,3664180981,"string","string"];
        const v43 = {valueOf:v42,length:v41,toString:parseFloat,constructor:"string",c:parseFloat};
        function v44(v45,v46) {
            const v50 = [1337,1337,1337,1337,1337];
            function v51(v52,v53,v54,v55) {
                'use strict'
                try {
                    const v56 = new Float64Array(v54);
                    function v59(v60,v61,v62,v63,v64) {
                        'use strict'
                    }
                    const v65 = v59.toLocaleString();
                    const v67 = [];
                    const v68 = {a:v67};
                    const v69 = {__proto__:eval,constructor:v68,length:v67};
                    let v72 = 0;
                    const v73 = v69.__proto__(v65,v72,19873,Symbol);
                    const v75 = Object.defineProperty(this,1337,v55);
                } catch(v76) {
                    try {
                        const v77 = v52[3];
                    } catch(v78) {
                        v76.valueOf = v76;
                    }
                }
                return v51;
            }
            const v79 = {deleteProperty:v51,set:v51,getPrototypeOf:v51,call:v51,preventExtensions:v51,isExtensible:v51,construct:v51,get:v51,ownKeys:v51,setPrototypeOf:v51,has:v51};
            const v81 = new Proxy(v50,v79);
            v81[1] = "MIN_VALUE";
        }
        const v82 = v44();
    }
}
const v83 = {deleteProperty:v31,set:v31,getPrototypeOf:v31,call:v31,preventExtensions:v31,isExtensible:v31,construct:v31,get:v31,ownKeys:v31,setPrototypeOf:v31,has:v31};
const v85 = new Proxy(v30,v83);
v85[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

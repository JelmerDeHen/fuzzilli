function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [-2147483648];
const v7 = {e:-2147483648,__proto__:v5};
const v8 = {a:v7,__proto__:v7};
let v9 = DataView;
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
            const v39 = [1337,1337,1337,1337,1337];
            function v40(v41,v42,v43,v44) {
                'use strict'
                try {
                    const v45 = new Float64Array(v43);
                    function v48(v49,v50,v51,v52,v53) {
                        'use strict'
                    }
                    const v54 = v48.toLocaleString();
                    const v56 = [];
                    const v57 = {a:v56};
                    const v58 = {__proto__:eval,constructor:v57,length:v56};
                    try {
                        const v62 = [-2.220446049250313e-16,-2.220446049250313e-16];
                        let v63 = v62;
                        const v65 = Float32Array();
                        const v66 = v65.slice();
                        const v67 = ArrayBuffer();
                        let v69 = 0;
                    } catch(v70) {
                    }
                    let v72 = 0;
                    const v73 = v58.__proto__(v54,v72,19873,Symbol);
                    const v75 = Object.defineProperty(this,1337,v44);
                } catch(v76) {
                    try {
                        const v77 = v41[3];
                    } catch(v78) {
                        v76.valueOf = v76;
                    }
                }
                return v40;
            }
            const v79 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v81 = new Proxy(v39,v79);
            v81[1] = "MIN_VALUE";
        }
        const v82 = v33();
    }
}
const v83 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v85 = new Proxy(v19,v83);
v85[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

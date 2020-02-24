function main() {
const v4 = [13.37];
const v6 = [1337,1337];
const v7 = ["a",-2147483647];
const v8 = {valueOf:v6,e:v6};
const v9 = {__proto__:eval,constructor:eval};
let v10 = -2147483647;
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    let v20 = 13.37;
    const v21 = {b:v20};
    const v26 = [NaN,13.37,2];
    let v27 = Uint8ClampedArray;
    const v29 = {constructor:NaN};
    const v31 = [13.37,13.37,13.37,13.37];
    const v33 = [1337,1337,1337,1337];
    const v34 = [];
    const v35 = {b:1337,c:v31,d:13.37,a:v33,length:v34,valueOf:1337};
    const v39 = [1337,1337,1337,1337,1337];
    function v40(v41,v42,v43,v44) {
        'use strict'
        try {
            v44[3] = v44;
        } catch(v45) {
            const v50 = [-2331916614,-2331916614,-2331916614];
            const v51 = [3664180981,3664180981,"string","string"];
            const v52 = {valueOf:v51,length:v50,toString:parseFloat,constructor:"string",c:parseFloat};
            function v53(v54,v55) {
                const v59 = [1337,1337,1337,1337,1337];
                function v60(v61,v62,v63,v64) {
                    'use strict'
                    try {
                        const v65 = new Float64Array(v63);
                        function v68(v69,v70,v71,v72,v73) {
                            'use strict'
                        }
                        const v74 = v68.toLocaleString();
                        const v76 = [];
                        const v77 = {a:v76};
                        const v78 = {__proto__:eval,constructor:v77,length:v76};
                        let v81 = 0;
                        const v82 = v78.__proto__(v74,v81,19873,Symbol);
                        const v84 = Object.defineProperty(this,1337,v64);
                    } catch(v85) {
                        try {
                            const v86 = v61[3];
                        } catch(v87) {
                            v85.valueOf = v85;
                        }
                    }
                    return v60;
                }
                const v88 = {deleteProperty:v60,set:v60,getPrototypeOf:v60,call:v60,preventExtensions:v60,isExtensible:v60,construct:v60,get:v60,ownKeys:v60,setPrototypeOf:v60,has:v60};
                const v90 = new Proxy(v59,v88);
                v90[1] = "MIN_VALUE";
            }
            const v91 = v53();
        }
    }
    const v92 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
    const v94 = new Proxy(v39,v92);
    v94[1] = "MIN_VALUE";
    const v96 = Object.freeze(v26,2939890574);
}
const v97 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v99 = new Proxy(v13,v97);
v99[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

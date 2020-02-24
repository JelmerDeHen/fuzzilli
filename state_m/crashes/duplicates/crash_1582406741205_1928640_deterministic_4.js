function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [v4];
const v6 = {length:v5,c:v4,valueOf:NaN,d:NaN};
const v7 = {toString:NaN,a:v2,length:v4};
let v8 = 13.37;
const v9 = {};
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
}
const v17 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v19 = new Proxy(v11,v17);
let v22 = 0;
while (v22 < 6) {
    const v27 = [1337,1337,1337,1337,1337];
    function v28(v29,v30,v31,v32) {
        'use strict'
        try {
            v32[3] = v32;
        } catch(v33) {
            const v38 = [-2331916614,-2331916614,-2331916614];
            const v39 = [3664180981,3664180981,"string","string"];
            const v40 = {valueOf:v39,length:v38,toString:parseFloat,constructor:"string",c:parseFloat};
            function v41(v42,v43) {
                const v47 = [1337,1337,1337,1337,1337];
                function v48(v49,v50,v51,v52) {
                    'use strict'
                    try {
                        const v53 = new Float64Array(v51);
                        function v56(v57,v58,v59,v60,v61) {
                            'use strict'
                        }
                        const v62 = v56.toLocaleString();
                        const v64 = [];
                        const v65 = {a:v64};
                        const v66 = {__proto__:eval,constructor:v65,length:v64};
                        let v69 = 0;
                        const v70 = v66.__proto__(v62,v69,19873,Symbol);
                        const v72 = Object.defineProperty(this,1337,v52);
                    } catch(v73) {
                        try {
                            const v74 = v49[3];
                        } catch(v75) {
                            v73.valueOf = v73;
                        }
                    }
                    return v48;
                }
                const v76 = {deleteProperty:v48,set:v48,getPrototypeOf:v48,call:v48,preventExtensions:v48,isExtensible:v48,construct:v48,get:v48,ownKeys:v48,setPrototypeOf:v48,has:v48};
                const v78 = new Proxy(v47,v76);
                v78[1] = "MIN_VALUE";
            }
            const v79 = v41();
        }
    }
    const v80 = {deleteProperty:v28,set:v28,getPrototypeOf:v28,call:v28,preventExtensions:v28,isExtensible:v28,construct:v28,get:v28,ownKeys:v28,setPrototypeOf:v28,has:v28};
    const v82 = new Proxy(v27,v80);
    v82[1] = "MIN_VALUE";
    let v83 = 0;
    function v84(v85,v86,v87) {
    }
}
}
%NeverOptimizeFunction(main);
main();

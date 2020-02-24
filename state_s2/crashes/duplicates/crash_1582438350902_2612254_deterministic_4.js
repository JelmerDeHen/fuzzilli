function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337];
const v6 = [-2147483649,13.37,v5,13.37];
const v7 = {e:"MAX_VALUE",c:v5,a:v6,constructor:"MAX_VALUE"};
const v8 = {__proto__:v3,toString:-2147483649,valueOf:-2147483649,c:1337};
let v9 = 1337;
const v12 = [13.37];
const v14 = [1337,1337];
const v15 = {length:v12,b:v14,__proto__:"POSITIVE_INFINITY",toString:v14,d:1337};
const v17 = [13.37,13.37,13.37,13.37,13.37];
const v19 = new Int8Array();
const v21 = new Map();
const v22 = v21.values();
function v23(v24,v25) {
    let v27 = 0;
    let v29 = 0;
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
                        function v67(v68,v69,v70,v71,v72) {
                            'use strict'
                        }
                        const v73 = v67.toLocaleString();
                        const v75 = [];
                        const v76 = {a:v75};
                        const v77 = {__proto__:eval,constructor:v76,length:v75};
                        let v79 = 0;
                        const v80 = v77.__proto__(v73);
                        const v82 = Object.defineProperty(this,1337,v64);
                    } catch(v83) {
                        try {
                            const v84 = v61[3];
                        } catch(v85) {
                            v83.valueOf = v83;
                        }
                    }
                    return v60;
                }
                const v86 = {deleteProperty:v60,set:v60,getPrototypeOf:v60,call:v60,preventExtensions:v60,isExtensible:v60,construct:v60,get:v60,ownKeys:v60,setPrototypeOf:v60,has:v60};
                const v88 = new Proxy(v59,v86);
                v88[1] = "MIN_VALUE";
            }
            const v89 = v53();
        }
    }
    const v90 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
    const v92 = new Proxy(v39,v90);
    v92[1] = "MIN_VALUE";
    const v93 = v29 + 1;
    const v94 = v93 < v27;
    for (let v98 = 0; v98 < 9; v98++) {
        let v100 = 0;
        for (const v101 of v22) {
        }
    }
}
for (const v102 in v15) {
}
for (const v103 in v7) {
}
const v104 = v23();
const v105 = v23();
}
%NeverOptimizeFunction(main);
main();

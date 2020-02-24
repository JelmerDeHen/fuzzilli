function main() {
const v1 = [13.37,13.37];
const v3 = [1337];
const v4 = [];
const v5 = {valueOf:v3};
const v6 = {b:v3,__proto__:v1,constructor:v3,length:13.37,valueOf:v1,a:1337,e:v5};
let v7 = 1337;
const v9 = new Int8Array();
const v11 = new Map();
const v12 = v11.keys();
function v13(v14,v15) {
    for (const v17 in "boolean") {
        let v19 = 0;
        let v21 = 0;
        const v22 = v21 + 1;
        const v23 = v19 + 1;
    }
    const v26 = [13.37,13.37,13.37,13.37];
    const v28 = [1337,1337,1337,1337];
    const v29 = [];
    const v30 = {b:1337,c:v26,d:13.37,a:v28,length:v29,valueOf:1337};
    const v34 = [1337,1337,1337,1337,1337];
    function v35(v36,v37,v38,v39) {
        'use strict'
        try {
            v39[3] = v39;
        } catch(v40) {
            const v45 = [-2331916614,-2331916614,-2331916614];
            const v46 = [3664180981,3664180981,"string","string"];
            const v47 = {valueOf:v46,length:v45,toString:parseFloat,constructor:"string",c:parseFloat};
            function v48(v49,v50) {
                const v54 = [1337,1337,1337,1337,1337];
                function v55(v56,v57,v58,v59) {
                    'use strict'
                    try {
                        const v60 = new Float64Array(v58);
                        function v63(v64,v65,v66,v67,v68) {
                            'use strict'
                        }
                        const v69 = v63.toLocaleString();
                        const v71 = [];
                        const v72 = {a:v71};
                        const v73 = {__proto__:eval,constructor:v72,length:v71};
                        let v76 = 0;
                        const v77 = v73.__proto__(v69,v76,19873,Symbol,eval);
                        const v79 = Object.defineProperty(this,1337,v59);
                    } catch(v80) {
                        try {
                            const v81 = v56[3];
                        } catch(v82) {
                            v80.valueOf = v80;
                        }
                    }
                    return v55;
                }
                const v83 = {deleteProperty:v55,set:v55,getPrototypeOf:v55,call:v55,preventExtensions:v55,isExtensible:v55,construct:v55,get:v55,ownKeys:v55,setPrototypeOf:v55,has:v55};
                const v85 = new Proxy(v54,v83);
                v85[1] = "MIN_VALUE";
            }
            const v86 = v48();
        }
    }
    const v87 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
    const v89 = new Proxy(v34,v87);
    v89[1] = "MIN_VALUE";
    for (let v92 = 0; v92 < 9; v92++) {
        let v94 = 0;
        for (const v95 of v12) {
        }
        const v96 = v94 + 1;
        for (const v97 of v30) {
            const v98 = v97.isFrozen();
        }
    }
}
const v100 = [1337];
let v101 = v100;
const v102 = v13();
const v103 = v13();
}
%NeverOptimizeFunction(main);
main();

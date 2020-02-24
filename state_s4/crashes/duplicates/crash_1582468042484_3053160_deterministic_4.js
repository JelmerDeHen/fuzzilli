function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [];
const v6 = {valueOf:"undefined",__proto__:v4};
const v7 = {};
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
            for (let v40 = 0; v40 < 1; v40++) {
                let v41 = v40;
            }
            const v42 = v13 != parseFloat;
            let v43 = v19;
            const v44 = v9.e;
            let v45 = v20;
            const v46 = [v21,v33];
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
        const v79 = v31();
    }
}
const v80 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v82 = new Proxy(v17,v80);
v82[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

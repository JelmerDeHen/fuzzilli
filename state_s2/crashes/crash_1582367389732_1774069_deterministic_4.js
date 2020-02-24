function main() {
const v1 = [13.37,13.37];
const v3 = [1337,1337];
const v4 = [v3,v3,13.37];
const v5 = {};
const v6 = {toString:v3};
let v7 = v1;
const v9 = [13.37,13.37,13.37,13.37];
const v11 = [1337,1337,1337,1337];
const v12 = [];
const v13 = {b:1337,c:v9,d:13.37,a:v11,length:v12,valueOf:1337};
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        v21[3] = v21;
    } catch(v22) {
        const v27 = [-2331916614,-2331916614,-2331916614];
        const v28 = [3664180981,3664180981,"string","string"];
        const v29 = {valueOf:v28,length:v27,toString:parseFloat,constructor:"string",c:parseFloat};
        function v30(v31,v32) {
            const v36 = [1337,1337,1337,1337,1337];
            function v37(v38,v39,v40,v41) {
                'use strict'
                try {
                    const v42 = new Float64Array(v40);
                    function v45(v46,v47,v48,v49,v50) {
                        'use strict'
                    }
                    const v51 = v45.toLocaleString();
                    const v53 = [];
                    const v54 = {a:v53};
                    const v55 = {__proto__:eval,constructor:v54,length:v53};
                    let v58 = 0;
                    const v59 = v55.__proto__(v51,v58,19873,Symbol);
                    const v61 = Object.defineProperty(this,1337,v41);
                } catch(v62) {
                    try {
                        const v63 = v38[3];
                    } catch(v64) {
                        v62.valueOf = v62;
                    }
                }
                return v37;
            }
            const v65 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
            const v67 = new Proxy(v36,v65);
            v67[1] = "MIN_VALUE";
        }
        const v68 = v30();
    }
}
const v69 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v71 = new Proxy(v16,v69);
const v72 = [v7,v12];
const v73 = v17();
const v74 = v17();
}
%NeverOptimizeFunction(main);
main();

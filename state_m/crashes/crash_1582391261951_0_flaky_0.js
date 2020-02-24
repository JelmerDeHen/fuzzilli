function main() {
const v1 = [13.37,13.37,13.37];
const v3 = [1337,1337,1337];
const v4 = [1337];
const v5 = {constructor:13.37,e:v1};
const v6 = {d:v3};
let v7 = v5;
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
        const v24 = [-2331916614,-2331916614,-2331916614];
        function v25(v26,v27) {
            const v31 = [1337,1337,1337,1337,1337];
            function v32(v33,v34,v35,v36) {
                'use strict'
                try {
                    const v37 = new Float64Array(v35);
                    function v40(v41,v42,v43,v44,v45) {
                        'use strict'
                    }
                    const v46 = v40.toLocaleString();
                    const v48 = [];
                    const v49 = {a:v48};
                    const v50 = {__proto__:eval,constructor:v49,length:v48};
                    let v53 = 0;
                    const v54 = v50.__proto__(v46,v53,19873,Symbol);
                    const v56 = Object.defineProperty(this,1337,v36);
                } catch(v57) {
                    try {
                        const v58 = v33[3];
                    } catch(v59) {
                        v57.valueOf = v57;
                    }
                }
                return v32;
            }
            const v60 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
            const v62 = new Proxy(v31,v60);
            v62[1] = "MIN_VALUE";
        }
        const v63 = v25();
    }
}
const v64 = v9.concat(v5,v6,v1,13.37);
const v65 = v17(1337);
const v66 = v17();
}
%NeverOptimizeFunction(main);
main();

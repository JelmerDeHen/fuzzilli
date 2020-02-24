function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [v5,-3192746315];
const v7 = {a:v5,toString:v6,__proto__:v5,length:v5,valueOf:13.37};
const v8 = {d:-3192746315};
let v9 = v5;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        v23[3] = v23;
    } catch(v24) {
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
const v64 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v66 = new Proxy(v18,v64);
let v67 = v66;
const v68 = 13.37 * "boolean";
const v69 = "boolean".repeat();
for (let v73 = 0; v73 < 4; v73++) {
    let v74 = v13;
    const v75 = v19();
}
}
%NeverOptimizeFunction(main);
main();

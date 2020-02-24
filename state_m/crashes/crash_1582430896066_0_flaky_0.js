function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337];
const v5 = [v4];
const v6 = {c:Uint32Array};
const v7 = {__proto__:v2,d:1337,length:v6,valueOf:v4,a:v4,c:1337};
let v8 = 1337;
const v10 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        v19[3] = v19;
    } catch(v20) {
        function v21(v22,v23) {
            const v27 = [1337,1337,1337,1337,1337];
            function v28(v29,v30,v31,v32) {
                'use strict'
                try {
                    const v33 = new Float64Array(v31);
                    function v36(v37,v38,v39,v40,v41) {
                        'use strict'
                    }
                    const v42 = v36.toLocaleString();
                    const v44 = [];
                    const v45 = {a:v44};
                    const v46 = {__proto__:eval,constructor:v45,length:v44};
                    let v49 = 0;
                    const v50 = v46.__proto__(v42,v49,19873,Symbol);
                    const v52 = Object.defineProperty(this,1337,v32);
                } catch(v53) {
                    try {
                        const v54 = v29[3];
                    } catch(v55) {
                        v53.valueOf = v53;
                    }
                }
                return v28;
            }
            const v56 = {deleteProperty:v28,set:v28,getPrototypeOf:v28,call:v28,preventExtensions:v28,isExtensible:v28,construct:v28,get:v28,ownKeys:v28,setPrototypeOf:v28,has:v28};
            const v58 = new Proxy(v27,v56);
            v58[1] = "MIN_VALUE";
        }
        const v59 = v21();
    }
}
const v60 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v62 = new Proxy(v14,v60);
const v63 = v15(1337,v7,v14);
const v64 = typeof v7;
const v66 = v64 === "function";
let v67 = v10;
const v68 = v62();
}
%NeverOptimizeFunction(main);
main();

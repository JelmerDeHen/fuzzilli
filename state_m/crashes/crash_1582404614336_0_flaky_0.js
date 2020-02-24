function main() {
const v4 = [1337,1337,1337,Function,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    function v10(v11,v12) {
        const v16 = [1337,1337,1337,1337,1337];
        function v17(v18,v19,v20,v21) {
            'use strict'
            try {
                const v22 = new Float64Array(v20);
                function v24(v25,v26,v27,v28,v29) {
                    'use strict'
                }
                const v30 = v24.toLocaleString();
                const v32 = [];
                const v33 = {a:v32};
                const v34 = {__proto__:eval,constructor:v33,length:v32};
                const v35 = v34.__proto__(v30);
                const v37 = Object.defineProperty(this,1337,v21);
            } catch(v38) {
                try {
                    const v40 = new Uint32Array();
                    const v41 = v40.slice();
                } catch(v42) {
                    v38.valueOf = v38;
                }
            }
            return v17;
        }
        const v43 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
        const v45 = new Proxy(v16,v43);
        v45[1] = "MIN_VALUE";
    }
    const v46 = v10();
}
const v47 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
const v49 = new Proxy(v4,v47);
v49[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

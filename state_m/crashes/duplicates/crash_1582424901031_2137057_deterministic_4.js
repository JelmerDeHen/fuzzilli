function main() {
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
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
                    let v36 = 0;
                    const v37 = v34.__proto__(v30);
                    const v39 = Object.defineProperty(this,1337,v21);
                } catch(v40) {
                    try {
                        const v41 = v18[3];
                    } catch(v42) {
                        v40.valueOf = v40;
                        const v43 = v11();
                    }
                }
                return v17;
            }
            const v44 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
            const v46 = new Proxy(v16,v44);
            v46[1] = "MIN_VALUE";
        }
        const v47 = v10();
    }
}
const v48 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v50 = new Proxy(v3,v48);
v50[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

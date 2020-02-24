function main() {
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    function v9(v10,v11) {
        const v15 = [1337,1337,1337,1337,1337];
        function v16(v17,v18,v19,v20) {
            'use strict'
            try {
                const v21 = new Float64Array(v19);
                function v23(v24,v25,v26,v27,v28) {
                    'use strict'
                }
                const v29 = v23.toLocaleString();
                const v31 = [];
                let v34 = 0;
                do {
                    const v35 = v34 + 1;
                    v34 = v35;
                } while (v34 < 4096);
                const v36 = {a:v31};
                const v37 = {__proto__:eval,constructor:v36,length:v31};
                let v39 = 0;
                const v40 = v37.__proto__(v29);
                const v42 = Object.defineProperty(this,1337,v20);
            } catch(v43) {
                const v44 = v17[3];
            }
            return v16;
        }
        const v45 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
        const v47 = new Proxy(v15,v45);
        v47[1] = "MIN_VALUE";
    }
    const v48 = v9();
}
const v49 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v51 = new Proxy(v3,v49);
v51[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

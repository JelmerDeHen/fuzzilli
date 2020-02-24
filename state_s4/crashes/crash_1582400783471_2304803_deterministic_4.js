function main() {
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    function v9(v10,v11) {
        const v15 = [1337,1337,1337,1337,1337];
        function v16(v17,v18,v19,v20) {
            'use strict'
            for (const v21 of "MIN_VALUE") {
                let v24 = 0;
                do {
                    const v25 = v21 - 1;
                    const v26 = v24 + 1;
                    v24 = v26;
                } while (v24 < 7);
            }
            try {
                const v27 = new Float64Array(v19);
                const v30 = Object.defineProperty(this,1337,v20);
            } catch(v31) {
                const v32 = v17[3];
            }
            return v16;
        }
        const v33 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
        const v35 = new Proxy(v15,v33);
        v35[1] = "MIN_VALUE";
    }
    const v36 = v9();
}
const v37 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v39 = new Proxy(v3,v37);
v39[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

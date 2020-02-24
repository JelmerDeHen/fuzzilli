function main() {
const v1 = [13.37];
const v3 = [1337,1337];
const v4 = [];
for (const v6 in "object") {
    const v9 = [1337,1337,1337,1337,1337];
    function v10(v11,v12,v13,v14) {
        'use strict'
        try {
            v14[3] = v14;
        } catch(v15) {
            const v18 = [1337,1337,1337,1337,1337];
            const v20 = [13.37];
            const v22 = [1337,1337,1337,1337,1337];
            function v23(v24,v25,v26,v27) {
                'use strict'
                try {
                    v26.constructor = v20;
                    let v28 = v18;
                    const v29 = v27.setInt32(v28,v28,v28);
                } catch(v30) {
                }
                return v23;
            }
            const v31 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
            const v33 = new Proxy(v22,v31);
            v33.constructor = v20;
            const v34 = [-4.0,-4.0,-4.0,-4.0,-4.0];
            function v35(v36,v37,v38,v39) {
                'use strict'
            }
            const v40 = v34.map(v35);
        }
        return v9;
    }
    const v41 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
    const v43 = new Proxy(v9,v41);
    v43[1] = "MAX_SAFE_INTEGER";
}
}
%NeverOptimizeFunction(main);
main();

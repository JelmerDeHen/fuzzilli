function main() {
function v0(v1,v2) {
    function v3(v4,v5) {
        const v8 = [1337,1337,1337,1337,1337];
        function v9(v10,v11,v12,v13) {
            'use strict'
            try {
                v13[3] = v13;
                const v17 = [1337,1337,1337,1337,1337];
                function v18(v19,v20,v21,v22) {
                    'use strict'
                    try {
                        v22[3] = v22;
                    } catch(v23) {
                        const v25 = [-2331916614,-2331916614,-2331916614];
                        try {
                            "3ghe5a+2Dz"[536870912] = v25;
                        } catch(v26) {
                        }
                    }
                    return v17;
                }
                const v27 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
                const v29 = new Proxy(v17,v27);
                v29[1] = "MIN_VALUE";
            } catch(v30) {
            }
            return v8;
        }
        const v31 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
        const v33 = new Proxy(v8,v31);
        v33[1] = "MIN_VALUE";
    }
    const v34 = v3();
}
const v35 = v0();
}
%NeverOptimizeFunction(main);
main();

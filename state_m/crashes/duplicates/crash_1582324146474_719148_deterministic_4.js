function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
        const v10 = [1337,1337,1337,1337,1337];
        function v11(v12,v13,v14,v15) {
            'use strict'
            try {
                v15[3] = v15;
            } catch(v16) {
                function v17(v18,v19) {
                    for (const v21 of "pvU0UUjoya") {
                        const v23 = String();
                    }
                }
                const v24 = v17();
            }
        }
        const v25 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
        const v27 = new Proxy(v10,v25);
        v27[1] = "MIN_VALUE";
    } catch(v28) {
    }
    return v2;
}
const v29 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:1337,has:v3};
const v31 = new Proxy(v2,v29);
v31[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

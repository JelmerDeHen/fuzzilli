function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
        const v12 = [1337,1337,1337,1337,1337];
        function v13(v14,v15,v16,v17) {
            'use strict'
            try {
                v17[3] = v17;
            } catch(v18) {
                const v20 = [-2331916614,-2331916614,-2331916614];
                try {
                    "3ghe5a+2Dz"[536870912] = v20;
                } catch(v21) {
                }
            }
            return v12;
        }
        const v22 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
        const v24 = new Proxy(v12,v22);
        v24[1] = "MIN_VALUE";
    }
}
const v25 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v27 = new Proxy(v2,v25);
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

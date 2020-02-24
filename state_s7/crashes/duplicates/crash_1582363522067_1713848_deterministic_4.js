function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
        const v11 = [1337,1337,1337,1337,1337];
        function v12(v13,v14,v15,v16) {
            'use strict'
            try {
                v16[3] = v16;
            } catch(v17) {
                for (const v19 of "pvU0UUjoya") {
                    const v20 = v14.slice();
                }
            }
            return v11;
        }
        const v21 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
        const v23 = new Proxy(v11,v21);
        v23[1] = "MIN_VALUE";
    }
}
const v24 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:1337,has:v3};
const v26 = new Proxy(v2,v24);
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

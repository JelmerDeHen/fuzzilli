function main() {
const v1 = [1337];
const v4 = [1337,1337,1337,1337,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        v9[3] = v9;
        const v12 = [1337,1337,1337,1337,1337];
        function v13(v14,v15,v16,v17) {
            'use strict'
            try {
                v17[3] = v17;
            } catch(v18) {
                for (const v20 of "pvU0UUjoya") {
                    const v22 = String();
                }
            }
            return v12;
        }
        const v23 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
        const v25 = new Proxy(v12,v23);
        v25[1] = "MIN_VALUE";
    } catch(v26) {
    }
    return v1;
}
const v27 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
const v29 = new Proxy(v4,v27);
v29[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
    try {
        v4[3] = v4;
    } catch(v5) {
        function v6(v7,v8) {
            const v11 = [1337,1337,1337,1337,1337];
            function v12(v13,v14,v15,v16) {
                'use strict'
                try {
                    const v17 = v12();
                    const v18 = v0();
                    for (const v19 of v14) {
                    }
                } catch(v20) {
                }
                return v12;
            }
            const v21 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
            const v23 = new Proxy(v11,v21);
            v23[1] = "MIN_VALUE";
        }
        const v24 = v6();
    }
}
const v25 = v0();
}
%NeverOptimizeFunction(main);
main();

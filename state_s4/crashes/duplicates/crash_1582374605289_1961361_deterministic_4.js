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
                function v18(v19,v20) {
                    const v23 = [1337,1337,1337,1337,1337];
                    function v24(v25,v26,v27,v28) {
                        'use strict'
                        try {
                            function v29(v30,v31,v32,v33,v34) {
                                'use strict'
                            }
                            const v35 = v29.toLocaleString();
                        } catch(v36) {
                            const v37 = v25[3];
                        }
                    }
                    const v38 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
                    const v40 = new Proxy(v23,v38);
                    v40[1] = "MIN_VALUE";
                }
                const v41 = v18();
            }
        }
        const v42 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
        const v44 = new Proxy(v11,v42);
        v44[1] = "MIN_VALUE";
    }
}
const v45 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v47 = new Proxy(v2,v45);
v47[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

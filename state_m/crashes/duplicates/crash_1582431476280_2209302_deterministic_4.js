function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
            const v11 = [1337,1337,1337,1337,1337];
            function v12(v13,v14,v15,v16) {
                'use strict'
            }
            const v17 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
            const v19 = Proxy();
            const v21 = [505430.5915189937,505430.5915189937,505430.5915189937,505430.5915189937];
            function v22(v23,v24) {
            }
            for (let v28 = 0; v28 < 100; v28++) {
                const v29 = v22();
            }
        } catch(v30) {
            const v32 = [13.37,13.37,13.37,13.37,13.37];
            function v33(v34,v35,v36,v37) {
                'use strict'
                const v40 = Object.freeze(this);
            }
            const v41 = v32.map(v33,v32);
        }
        return v4;
    }
    const v42 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    const v44 = new Proxy(v4,v42);
    v44[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

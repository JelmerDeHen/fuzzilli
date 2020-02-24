function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [-9007199254740993,1337];
const v6 = {valueOf:13.37};
for (const v8 in "object") {
    const v11 = [1337,1337,1337,1337,1337];
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            v16[3] = v16;
            const v17 = {deleteProperty:v13,get:v15,ownKeys:v15,construct:v14,setPrototypeOf:v12,call:v14,isExtensible:v12};
            const v19 = new Proxy(v8,v17);
            const v20 = {};
            let v22 = 0;
            const v23 = v17[127];
            const v24 = v22 + 1;
        } catch(v25) {
            const v27 = [13.37,13.37,13.37,13.37,13.37];
            function v28(v29,v30,v31,v32) {
                'use strict'
                const v34 = [13.37,13.37,13.37,v16,13.37];
                const v37 = Object.freeze(this);
            }
            const v38 = v27.map(v28,v27);
        }
        return v11;
    }
    const v39 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
    const v41 = new Proxy(v11,v39);
    v41[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

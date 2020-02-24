function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [v2,1337,4];
for (const v7 in "object") {
    const v10 = [1337,1337,1337,1337,1337];
    function v11(v12,v13,v14,v15) {
        'use strict'
        try {
            v15[3] = v15;
        } catch(v16) {
            for (const v18 in "boolean") {
            }
            let v20 = 0;
            const v22 = [13.37,13.37,13.37,13.37,13.37];
            function v23(v24,v25,v26,v27) {
                'use strict'
                const v30 = Object.freeze(this);
            }
            const v31 = v22.filter(v23,v22);
        }
        return v10;
    }
    const v32 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
    const v34 = new Proxy(v10,v32);
    v34[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

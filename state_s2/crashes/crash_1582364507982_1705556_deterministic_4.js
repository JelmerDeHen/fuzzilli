function main() {
const v2 = [13.37];
const v4 = [1337];
const v5 = [v2,653485477,13.37];
for (const v7 in "object") {
    const v10 = [1337,1337,1337,1337,1337];
    function v11(v12,v13,v14,v15) {
        'use strict'
        const v18 = [1337,1337,1337,1337,1337];
        const v20 = [1337,1337,1337,1337,1337];
        function v21(v22,v23,v24,v25) {
            'use strict'
        }
        const v26 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,c:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
        const v28 = new Proxy(v20,v26);
        const v30 = v21(43769,13.37,v18);
        try {
            v15[3] = v15;
        } catch(v31) {
            let v33 = 0;
            const v35 = [13.37,13.37,13.37,13.37,13.37];
            function v36(v37,v38,v39,v40) {
                'use strict'
                const v43 = Object.freeze(this);
            }
            const v44 = v35.filter(v36,v35);
        }
        return v10;
    }
    const v45 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
    const v47 = new Proxy(v10,v45);
    v47[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

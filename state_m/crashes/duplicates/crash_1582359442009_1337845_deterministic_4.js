function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [v2,1337,Set,1337];
for (const v7 in "object") {
    const v10 = [1337,1337,1337,1337,1337];
    function v11(v12,v13,v14,v15) {
        'use strict'
        try {
            v15[3] = v15;
        } catch(v16) {
            let v18 = 0;
            const v20 = [13.37,13.37,13.37,13.37,13.37];
            function v21(v22,v23,v24,v25) {
                'use strict'
                const v28 = Object.freeze(this);
            }
            const v29 = v20.filter(v21,v20);
            const v30 = v18 + 1;
            const v32 = [1337,1337,1337,1337];
            const v33 = {valueOf:v32};
            const v35 = {e:v33,d:"d"};
            let v38 = -128;
            const v39 = v35 <= 0;
            const v40 = v39 + v39;
        }
        return v10;
    }
    const v41 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
    const v43 = new Proxy(v10,v41);
    v43[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
            const v12 = Function("arguments",Function);
        } catch(v13) {
            let v15 = 0;
            const v17 = [13.37,13.37,13.37,13.37,13.37];
            function v18(v19,v20,v21,v22) {
                'use strict'
                const v25 = Object.freeze(this);
            }
            const v26 = v17.filter(v18,v17);
            const v27 = v15 + 1;
        }
        return v4;
    }
    const v28 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    const v30 = new Proxy(v4,v28);
    v30[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

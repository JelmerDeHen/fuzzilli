function main() {
const v3 = [13.37,13.37];
const v5 = [1337];
const v6 = [65537,"LXfNJHvK0*",65537,"LXfNJHvK0*"];
for (const v8 in "object") {
    const v11 = [1337,1337,1337,1337,1337];
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            v16[3] = v16;
            const v17 = !v15;
            for (const v18 in v13) {
                v14.length = 1;
            }
        } catch(v20) {
            const v22 = [13.37,13.37,13.37,13.37,13.37];
            function v23(v24,v25,v26,v27) {
                'use strict'
                const v29 = [13.37,13.37,13.37,v16,13.37];
                const v32 = Object.freeze(this);
            }
            const v33 = v22.map(v23,v22);
        }
        return v11;
    }
    const v34 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
    const v36 = new Proxy(v11,v34);
    v36[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

function main() {
for (const v1 in "object") {
    const v3 = [1337,v1,1337,1337,1337];
    function v4(v5,v6,v7,v8) {
        'use strict'
    }
    const v9 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
    const v11 = new Proxy(v3,v9);
}
for (const v13 in "object") {
    const v16 = [1337,1337,1337,1337,1337];
    function v17(v18,v19,v20,v21) {
        'use strict'
        try {
            v21[3] = v21;
        } catch(v22) {
            let v24 = 0;
            const v25 = v24 + 1;
            const v28 = 2.2250738585072014e-308 / 3890419937;
            const v29 = [v28];
            v16[-1865659147] = v19;
            let v30 = v29;
            const v32 = Math.acosh(v30);
        }
        return v16;
    }
    const v33 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
    const v35 = new Proxy(v16,v33);
    v35[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

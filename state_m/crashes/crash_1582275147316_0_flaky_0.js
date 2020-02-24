function main() {
const v1 = [1337,1337,1337,1337,1337];
function v2(v3,v4) {
    const v7 = [1337,1337,1337,1337,1337];
    function v8(v9,v10,v11,v12) {
        'use strict'
        try {
            v12[3] = v12;
        } catch(v13) {
            const v15 = [1337,1337];
            const v20 = "unscopable".concat(100);
            const v21 = [-372074.99096011615,v15,-372074.99096011615];
            const v22 = Function(v21);
        }
        return v7;
    }
    const v23 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
    const v25 = new Proxy(v7,v23);
    v25[1] = "MIN_VALUE";
    for (const v27 in "boolean") {
        let v30 = 0;
        do {
            const v31 = v30 + 1;
            v30 = v31;
        } while (v30 < 7);
    }
}
const v32 = v1.forEach(v2);
}
%NeverOptimizeFunction(main);
main();

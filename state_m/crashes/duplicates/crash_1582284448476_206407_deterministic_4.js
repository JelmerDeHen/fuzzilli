function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337];
const v5 = [1337,1337,1337,1337,1337];
function v6(v7,v8) {
    const v11 = [1337,1337,1337,1337,1337];
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            v16[3] = v16;
        } catch(v17) {
            const v19 = [1337,1337];
            const v23 = "unscopable".concat(100);
            const v24 = [-372074.99096011615,v19,-372074.99096011615];
        }
        return v11;
    }
    const v25 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
    const v27 = new Proxy(v11,v25);
    v27[1] = "MIN_VALUE";
    for (const v29 in "boolean") {
        let v32 = 0;
        do {
            const v33 = v32 + 1;
            v32 = v33;
        } while (v32 < 7);
    }
}
const v34 = v5.forEach(v6);
}
%NeverOptimizeFunction(main);
main();

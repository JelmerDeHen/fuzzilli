function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337,1337];
const v5 = [1337,1337,1337,1337,1337];
function v6(v7,v8) {
    const v10 = [1337,1337,1337,1337,1337];
    function v11(v12,v13,v14,v15) {
        'use strict'
        try {
            v15[3] = v15;
        } catch(v16) {
            const v18 = [1337,1337];
            const v22 = "unscopable".concat(100);
            const v23 = [-372074.99096011615,v18,-372074.99096011615];
        }
        return v10;
    }
    const v24 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v7,has:v11};
    const v26 = new Proxy(v10,v24);
    v26[1] = v3;
    for (const v28 in "boolean") {
        let v31 = 0;
        do {
            const v32 = v31 + 1;
            v31 = v32;
        } while (v31 < 7);
    }
}
const v33 = v5.forEach(v6);
}
%NeverOptimizeFunction(main);
main();

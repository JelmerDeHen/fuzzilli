function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6) {
    const v9 = [1337,1337,1337,1337,1337];
    function v10(v11,v12,v13,v14) {
        'use strict'
        try {
            v14[3] = v14;
        } catch(v15) {
            const v17 = [1337,1337];
            function v18(v19,v20) {
                const v21 = {apply:v13,get:v6,has:v19,set:v6,isExtensible:v10,getOwnPropertyDescriptor:v15,setPrototypeOf:v18,construct:v11,getPrototypeOf:v11,deleteProperty:v13};
            }
            const v24 = "unscopable".concat(100);
        }
        return v9;
    }
    const v25 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
    const v27 = new Proxy(v9,v25);
    v27[1] = "MIN_VALUE";
    for (const v29 in "boolean") {
        let v32 = 0;
        do {
            const v33 = v32 + 1;
            v32 = v33;
        } while (v32 < 7);
    }
}
const v34 = v3.forEach(v4);
}
%NeverOptimizeFunction(main);
main();

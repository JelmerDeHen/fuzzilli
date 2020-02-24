function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            const v12 = gc();
            let v14 = 0;
            const v15 = !v14;
            const v16 = typeof v12;
            const v19 = new Int8Array();
            v19.constructor = Float64Array;
        }
        return v4;
    }
    const v20 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    const v22 = new Proxy(v4,v20);
    v22[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            const v11 = v4.reduceRight(v5);
            const v13 = [v9,1337];
            const v16 = "unscopable".concat();
            const v17 = [-372074.99096011615,v13,-372074.99096011615];
            const v19 = [1337,1337];
        }
        return v4;
    }
    const v20 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:1337,has:v5};
    const v22 = new Proxy(v4,v20);
    v22[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

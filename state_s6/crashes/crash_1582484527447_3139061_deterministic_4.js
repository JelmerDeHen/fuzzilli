function main() {
const v1 = [1337,1337];
function v2(v3,v4,v5,v6) {
    'use strict'
    try {
        const v9 = [1337,1337,1337,1337,1337];
        function v10(v11,v12,v13,v14) {
            'use strict'
        }
        const v15 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
        const v16 = v1.reduceRight(v2,v4);
        const v18 = new Proxy(v9,v15);
        v18[1] = "MIN_VALUE";
    } catch(v19) {
    }
}
const v20 = v2();
}
%NeverOptimizeFunction(main);
main();

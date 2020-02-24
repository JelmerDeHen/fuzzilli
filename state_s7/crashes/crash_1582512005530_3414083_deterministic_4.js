function main() {
const v1 = [1337,1337,1337,1337];
function v2(v3,v4,v5,v6) {
    'use strict'
    try {
        const v9 = [1337,1337,1337,1337,1337];
        function v10(v11,v12,v13,v14) {
            'use strict'
        }
        let v15 = v1;
        const v16 = v15.reduceRight(v2);
        const v17 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
        const v19 = new Proxy(v9,v17);
        v19[1] = "MIN_VALUE";
    } catch(v20) {
    }
}
const v21 = v2();
}
%NeverOptimizeFunction(main);
main();

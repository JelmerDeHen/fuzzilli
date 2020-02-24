function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
    try {
        const v7 = [1337,1337,1337,1337,1337];
        const v8 = v7.filter(v0);
        function v9(v10,v11,v12,v13) {
            'use strict'
        }
        const v14 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
        const v16 = new Proxy(v7,v14);
        v16[1] = "MIN_VALUE";
    } catch(v17) {
    }
}
const v18 = v0();
}
%NeverOptimizeFunction(main);
main();

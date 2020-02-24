function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
        v6.valueOf = v7;
    } catch(v8) {
        const v10 = [13.37,13.37,13.37,13.37,13.37];
        function v11(v12,v13,v14,v15) {
            'use strict'
            const v18 = [13.37,13.37,13.37,v7,13.37];
            const v20 = [1337,v18,13.37,6];
            const v24 = Object.freeze(this,"a",v20);
            return v7;
        }
        const v25 = v10.map(v11,v10);
    }
    return v2;
}
const v26 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v28 = new Proxy(v2,v26);
v28[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

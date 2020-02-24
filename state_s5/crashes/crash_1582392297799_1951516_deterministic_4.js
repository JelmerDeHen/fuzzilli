function main() {
const v2 = [1337,1337,"MIN_VALUE",1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        let v10 = 0;
        while (v10 <= 4) {
            const v11 = v10 + 1;
            v10 = v11;
        }
        const v12 = v2.forEach(v3);
        const v13 = "MIN_VALUE".__proto__;
    } catch(v14) {
    }
}
const v15 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:1337,has:v3};
const v17 = new Proxy(v2,v15);
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

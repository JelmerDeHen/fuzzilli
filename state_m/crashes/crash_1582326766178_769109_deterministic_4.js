function main() {
const v1 = [13.37];
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v9 = v3.reduce(v4);
        const v10 = v5.find();
    } catch(v11) {
        let v14 = 0;
        while (v14 < 10) {
            const v15 = v14 + 1;
            v14 = v15;
        }
    }
}
const v16 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v18 = new Proxy(v3,v16);
v18.constructor = v1;
}
%NeverOptimizeFunction(main);
main();

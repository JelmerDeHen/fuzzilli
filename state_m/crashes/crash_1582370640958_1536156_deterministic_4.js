function main() {
const v2 = [13.37,13.37];
for (const v4 in "object") {
    const v7 = [1337,v4,1337,1337,1337];
    function v8(v9,v10,v11,v12) {
        'use strict'
        try {
            const v13 = v4 > v10;
            const v14 = v8(v2,...v7,4294967295);
            let v16 = 0;
            const v17 = v7.__proto__;
            const v18 = v16 + 1;
        } catch(v19) {
            let v21 = 0;
            const v22 = v21 + 1;
        }
    }
    const v23 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
    const v25 = new Proxy(v7,v23);
    v25[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

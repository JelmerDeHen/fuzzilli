function main() {
const v2 = {e:1337,b:String};
const v4 = [1337,1337,1337,1337,1337];
const v6 = [13.37];
const v8 = [1337,1337,1337,1337,1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        let v16 = 0;
        do {
            const v17 = v16 + 1;
            v16 = v17;
        } while (v16 < 9);
        const v18 = v2.__proto__;
        v12.constructor = v6;
        let v19 = v4;
        const v20 = v13.cosh();
    } catch(v21) {
        const v22 = v4 + v21;
    }
}
const v23 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v25 = new Proxy(v8,v23);
v25.constructor = v6;
}
%NeverOptimizeFunction(main);
main();

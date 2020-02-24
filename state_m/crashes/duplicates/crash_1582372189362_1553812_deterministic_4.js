function main() {
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8.d = Proxy;
        v8[3] = v8;
    } catch(v10) {
        const v12 = [-2331916614,-2331916614,-2331916614];
        try {
            "3ghe5a+2Dz"[536870912] = v12;
        } catch(v13) {
        }
    }
    return v3;
}
const v14 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v16 = new Proxy(v3,v14);
v16[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

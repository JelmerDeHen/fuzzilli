function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        for (let v11 = 0; v11 < 8; v11++) {
        }
        const v12 = v3(v4,v6,0);
    } catch(v13) {
        for (let v17 = 0; v17 < 3; v17++) {
        }
    }
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v20 = new Proxy(v2,v18);
v20[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

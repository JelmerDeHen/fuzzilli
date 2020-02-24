function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v9 = [13.37,13.37,13.37,13.37,13.37];
        const v11 = [1337,1337,1337,1337,1337];
        const v12 = v9.reduce(v3);
        const v13 = [v11,v9,v9,13.37];
        const v14 = {__proto__:v13,c:v13};
        for (let v18 = 0; v18 < 10; v18++) {
            for (const v20 in "object") {
            }
        }
    } catch(v21) {
    }
}
const v22 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v24 = new Proxy(v2,v22);
v24[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

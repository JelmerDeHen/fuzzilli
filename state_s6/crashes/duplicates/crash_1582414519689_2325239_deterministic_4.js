function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        let v12 = 0;
        do {
            const v13 = v12 + 1;
            v12 = v13;
        } while (v12 < 4);
        v6.__proto__ = v7;
        const v14 = [13.37];
        const v16 = [1337,13.37,v14,-1155643050];
        let v17 = v14;
        const v19 = [1337,1337];
        const v21 = [1337,1337,1337,1337,1337];
        const v22 = [v21];
        const v23 = v19[-4096];
        const v24 = v16[-3357639552];
        const v25 = 13.37 == v16;
        let v27 = 0;
        v7[3] = v7;
    } catch(v28) {
        const v29 = {construct:v28};
    }
}
const v30 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v32 = new Proxy(v2,v30);
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

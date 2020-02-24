function main() {
const v2 = [1337,-9007199254740992,-9007199254740992,-9007199254740992,-9007199254740992];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v9 = new ArrayBuffer();
        const v12 = [13.37,13.37,1337,1337];
        let v15 = 0;
        do {
            const v16 = v15 + 1;
            v15 = v16;
        } while (v15 < 6);
        const v17 = -9007199254740992 == v7;
        const v18 = v3();
        const v20 = [v12,-9007199254740992,v12];
        const v21 = v20.push();
        const v22 = v21 + 1;
        const v24 = v9.slice(1024);
        let v25 = v7;
    } catch(v26) {
    }
}
const v27 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v29 = new Proxy(v2,v27);
const v31 = v3(v29,1,v29);
}
%NeverOptimizeFunction(main);
main();

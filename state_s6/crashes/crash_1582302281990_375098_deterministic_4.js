function main() {
const v1 = [13.37,13.37,13.37];
const v3 = [1337,1337,1337,1337,1337];
const v6 = [1337,1337,1337,1337,1337];
function v7(v8,v9,v10,v11) {
    'use strict'
    let v13 = 0;
    const v14 = v13 + 1;
    let v17 = 0;
    for (let v21 = 0; v21 < 8; v21++) {
    }
    const v22 = v17 + 1;
    const v23 = !2;
    try {
        const v24 = {};
        const v26 = [13.37];
        const v27 = v7();
        const v28 = [v26,v8];
    } catch(v29) {
    }
}
const v30 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
const v32 = new Proxy(v6,v30);
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

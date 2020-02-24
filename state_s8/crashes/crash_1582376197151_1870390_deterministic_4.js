function main() {
const v1 = [1337,1337,1337];
let v2 = v1;
const v5 = [1337,1337,1337,1337,1337];
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        let v13 = 0;
        do {
            const v14 = v13 + 1;
            v13 = v14;
        } while (v13 < 10);
        const v15 = v2.filter(v6);
        const v16 = [v7,1337,v10,v15];
    } catch(v17) {
    }
}
const v18 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
const v20 = new Proxy(v5,v18);
v20[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

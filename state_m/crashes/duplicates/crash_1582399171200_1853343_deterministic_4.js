function main() {
const v1 = [1337,1337,1337,1337,1337];
const v4 = [1337,1337,1337,1337,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v11 = v7.b;
        let v14 = 0;
        while (v14 < 3) {
            let v15 = Infinity;
            v15 = 1337;
            const v16 = v14 + 1;
            v14 = v16;
        }
        const v17 = v5(v11,v1,v14);
        const v18 = [v7,Infinity,0];
        let v20 = 0;
        const v21 = v5[0];
        const v22 = v20 + 1;
        const v23 = ArrayBuffer();
        const v24 = v23.slice();
    } catch(v25) {
    }
}
const v26 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
const v28 = new Proxy(v4,v26);
const v30 = v5(v28,1,v28);
}
%NeverOptimizeFunction(main);
main();

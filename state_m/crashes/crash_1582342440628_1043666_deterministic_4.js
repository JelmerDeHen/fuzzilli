function main() {
const v2 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v10 = [1337,1337,1337,1337,1337];
        let v11 = v10;
        let v14 = 0;
        while (v14 < 5) {
            const v15 = v14 + 1;
            v14 = v15;
        }
        const v16 = v11.reduceRight(v4);
        for (let v20 = 0; v20 < 100; v20++) {
        }
    } catch(v21) {
    }
}
const v22 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:1,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v24 = new Proxy(v2,v22);
v24[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

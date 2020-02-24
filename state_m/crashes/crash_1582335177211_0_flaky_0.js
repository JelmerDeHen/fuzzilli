function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337];
const v6 = [1337,"boolean",13.37,Map];
let v7 = v5;
const v10 = [1337,1337,1337,1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        const v19 = [1337,1337];
        const v21 = new ArrayBuffer();
        for (let v25 = 0; v25 < 100; v25++) {
            const v26 = v11();
        }
        let v28 = 0;
        const v29 = v28 + 1;
        const v30 = [13.37];
        const v32 = [1337,13.37,v30,-1155643050];
    } catch(v33) {
    }
}
const v34 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
const v36 = new Proxy(v10,v34);
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

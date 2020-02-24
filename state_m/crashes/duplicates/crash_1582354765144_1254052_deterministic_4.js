function main() {
const v0 = {};
let v2 = 13.37;
const v5 = [1337,1337,1337,1337,1337];
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        v2 = v9;
        let v14 = 0;
        const v15 = v14 + 1;
        let v17 = 0;
        const v19 = [1337,1337,1337];
        const v20 = v17 + 1;
        for (let v24 = 0; v24 < 2; v24++) {
        }
        v0.__proto__ = v2;
        const v25 = [13.37];
        const v27 = [1337,13.37,v25,-1155643050];
        const v29 = [1337,1337];
        const v31 = [1337,1337,1337,1337,1337];
        const v32 = [v31];
        const v33 = v29[-4096];
        const v34 = v27[-3357639552];
        const v35 = 13.37 == v27;
        v10[3] = v10;
    } catch(v36) {
        const v37 = {construct:v36};
    }
}
const v38 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
const v40 = new Proxy(v5,v38);
v40[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

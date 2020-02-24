function main() {
const v2 = ["caller",13.37,13.37,13.37];
const v4 = [1337];
const v5 = [];
const v6 = {};
const v7 = {valueOf:v4};
let v8 = 1337;
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        for (let v21 = 0; v21 < 100; v21++) {
            const v22 = v12();
        }
        const v23 = v6[1000];
        const v24 = v2 + 1;
        for (let v28 = 0; v28 < 4; v28++) {
        }
        const v29 = [13.37,13.37,13.37,13.37,13.37];
        const v32 = {get:Number,set:this};
        const v34 = [1337];
        let v35 = v34;
    } catch(v36) {
    }
}
const v37 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v39 = new Proxy(v11,v37);
v39[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

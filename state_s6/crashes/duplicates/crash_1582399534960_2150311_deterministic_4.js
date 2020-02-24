function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [];
const v6 = {constructor:1337,b:1337,valueOf:Number,d:v5};
const v9 = [1337,1337,1337,1337,1337];
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        const v17 = [1337,1337];
        const v19 = new ArrayBuffer();
        let v22 = 0;
        do {
            const v23 = v22 + 1;
            v22 = v23;
        } while (v22 < 4);
        let v25 = 0;
        let v26 = v6;
        v14["MIN_VALUE"] = 13.37;
        const v27 = {set:v12};
        const v29 = Object.defineProperty();
        const v31 = {get:v11};
        const v33 = Object.defineProperty(v13,2914309620);
    } catch(v34) {
        const v35 = {construct:v34};
    }
}
const v36 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
const v38 = new Proxy(v9,v36);
v38[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

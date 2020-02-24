function main() {
const v1 = [1337,1337,1337];
const v3 = eval();
let v6 = 0;
do {
    const v8 = [1337];
    let v9 = v8;
    let v11 = undefined;
    const v12 = v6 + 1;
    v6 = v12;
} while (v6 < 3);
for (const v14 in "object") {
    const v17 = [1337,1337,1337,1337,1337];
    function v18(v19,v20,v21,v22) {
        'use strict'
        try {
            v22["MIN_VALUE"] = v1;
        } catch(v23) {
            const v25 = Symbol.toPrimitive;
            const v28 = "unscopable".concat(100);
        }
    }
    const v29 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:1337,has:v18};
    const v31 = new Proxy(v17,v29);
    v31[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

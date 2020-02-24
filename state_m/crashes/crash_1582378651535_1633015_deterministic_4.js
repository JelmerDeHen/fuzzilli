function main() {
let v2 = 0;
let v4 = 0;
const v6 = [1337];
let v7 = v6;
let v9 = undefined;
for (const v11 in "object") {
    const v14 = [1337,1337,1337,1337,1337];
    function v15(v16,v17,v18,v19) {
        'use strict'
        try {
            for (const v20 of "number") {
                v2 = v20;
            }
            const v22 = new Float32Array();
            v19[3] = v19;
        } catch(v23) {
            const v25 = Symbol.toPrimitive;
            const v27 = ["EXkcpBKht7"];
            let v28 = "EXkcpBKht7";
            const v29 = v27.includes();
            const v31 = [v19,1337];
            const v35 = "unscopable".concat(100);
            const v36 = [-372074.99096011615,v31,-372074.99096011615];
            const v38 = [1337,1337];
        }
        return v14;
    }
    const v39 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:1337,has:v15};
    const v41 = new Proxy(v14,v39);
    v41[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

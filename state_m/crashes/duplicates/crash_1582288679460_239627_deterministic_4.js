function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v9 = [13.37,13.37,13.37,13.37];
        const v10 = [Map,v9,13.37,"function"];
        const v13 = [1337,1337,1337,1337,1337];
        function v14(v15,v16,v17,v18) {
            'use strict'
            try {
                v18[3] = v18;
            } catch(v19) {
                const v22 = "unscopable".concat(100);
            }
            return v13;
        }
        const v23 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
        const v25 = new Proxy(v13,v23);
        v25[1] = "MIN_VALUE";
        let v27 = 0;
        do {
            const v28 = v27 + 1;
            v27 = v28;
        } while (v27 < 8);
    }
}
const v29 = v0();
const v31 = eval();
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [];
const v7 = {d:Symbol,b:v6,c:"3XqbRMOFT5",length:v6};
const v10 = [1337,1337,1337,1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        let v18 = 0;
        do {
            const v19 = v18 + 1;
            v18 = v19;
        } while (v18 < 2);
        const v20 = v11();
    } catch(v21) {
        for (let v25 = 0; v25 < 10; v25++) {
        }
    }
}
const v26 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:1337,has:v11};
const v28 = new Proxy(v10,v26);
v28[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

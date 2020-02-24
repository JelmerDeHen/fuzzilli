function main() {
const v1 = Symbol.toPrimitive;
const v4 = [1337,1337,1337,1337,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v10 = v5(1337,v6,v1,v9);
        v9[3] = v9;
    } catch(v11) {
        const v13 = [13.37,13.37,13.37,13.37,13.37];
        function v14(v15,v16,v17,v18) {
            'use strict'
            const v21 = Object.freeze(this);
        }
        const v22 = v13.map(v14,v13);
    }
}
const v23 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
const v25 = new Proxy(v4,v23);
v25[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = [1337];
const v5 = [1337,1337,1337,1337,1337];
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v11 = Array.isArray();
        let v15 = 0;
        while (v15 < 4) {
            function v16(v17,v18,v19) {
                return v7;
            }
            const v20 = v15 + 1;
            v15 = v20;
        }
        const v21 = v6(v11,v1);
        const v22 = v7 === 0;
        let v23 = 0;
        let v25 = 0;
        let v27 = 0;
        const v28 = v27 + 1;
        const v29 = v25 + 1;
        const v30 = v7[v15];
        let v31 = 0;
    } catch(v32) {
    }
}
const v33 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,c:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
const v35 = new Proxy(v5,v33);
v35[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

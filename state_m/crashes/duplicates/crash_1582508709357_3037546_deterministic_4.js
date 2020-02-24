function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [v2,v4];
const v6 = {toString:13.37,a:v4,b:1337,__proto__:gc,c:v2};
const v9 = [1337,1337,1337,1337,1337];
function v10(v11,v12,v13,v14) {
    'use strict'
    const v17 = [1337,1337,1337,1337,1337];
    function v18(v19,v20,v21,v22) {
        'use strict'
        try {
            for (let v26 = 0; v26 < 8; v26++) {
            }
            const v27 = v18();
        } catch(v28) {
            const v29 = v19[3];
        }
    }
    const v30 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
    const v32 = new Proxy(v17,v30);
    v32[1] = "MIN_VALUE";
}
const v33 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
const v35 = new Proxy(v9,v33);
v35[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

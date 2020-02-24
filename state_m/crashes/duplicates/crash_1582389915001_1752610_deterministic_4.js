function main() {
const v1 = [13.37,13.37];
const v3 = [1337,v1,v1,13.37];
const v5 = [13.37,13.37,13.37,13.37];
function v6(v7,v8) {
    const v11 = [1337,1337,"MIN_VALUE",1337,1337];
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            let v19 = 0;
            while (v19 <= 4) {
                const v20 = v19 + 1;
                v19 = v20;
            }
            v16[3] = 0;
        } catch(v21) {
            const v22 = [];
            const v23 = {a:v22};
            const v24 = {__proto__:v16,constructor:v23,length:v22};
        }
        return v16;
    }
    const v25 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:1337,has:v12};
    const v27 = new Proxy(v11,v25);
    v27[1] = "MIN_VALUE";
}
const v28 = v5.sort(v6);
}
%NeverOptimizeFunction(main);
main();

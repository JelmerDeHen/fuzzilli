function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [v5,"OF7hHKLqvG",v3,-2275804757];
const v8 = [13.37,13.37,13.37,13.37];
function v9(v10,v11) {
    const v14 = [1337,1337,"MIN_VALUE",1337,1337];
    function v15(v16,v17,v18,v19) {
        'use strict'
        try {
            let v22 = 0;
            while (v22 <= 4) {
                const v23 = v22 + 1;
                v22 = v23;
            }
            v19[3] = 0;
        } catch(v24) {
            const v25 = [];
            const v26 = {a:v25};
            const v27 = {__proto__:v19,constructor:v26,length:v25};
        }
        return v19;
    }
    const v28 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:1337,has:v15};
    const v30 = new Proxy(v14,v28);
    v30[1] = "MIN_VALUE";
}
const v31 = v8.sort(v9);
}
%NeverOptimizeFunction(main);
main();

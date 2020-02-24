function main() {
const v2 = arguments + 1;
const v4 = [1337,1337,"MIN_VALUE",1337,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    const v12 = arguments + 1;
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
    let v32 = 0;
    const v33 = v32 + 1;
    v9[3] = 0;
    let v34 = v2;
    const v35 = [];
    const v36 = {a:v35};
}
const v37 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:1337,has:v5};
const v39 = new Proxy(v4,v37);
v39[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

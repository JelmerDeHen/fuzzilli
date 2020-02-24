function main() {
const v2 = [13.37];
const v4 = [1337];
const v5 = [v4];
const v6 = {length:1337,b:13.37,c:-1,d:v5,a:v4};
const v7 = {__proto__:1337,b:-1,a:v2};
let v8 = -1;
for (const v10 in "object") {
    const v13 = [1337,1337,1337,1337,1337];
    function v14(v15,v16,v17,v18) {
        'use strict'
        try {
            v18[3] = v18;
        } catch(v19) {
            let v21 = 0;
            const v23 = [13.37,13.37,13.37,13.37,13.37];
            function v24(v25,v26,v27,v28) {
                'use strict'
                const v31 = Object.freeze(this);
            }
            const v32 = v23.filter(v24,v23);
            const v33 = v21 + 1;
        }
        const v35 = new Uint8Array();
        const v36 = v35.slice();
        return v13;
    }
    const v37 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
    const v39 = new Proxy(v13,v37);
    const v40 = {};
    v39[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

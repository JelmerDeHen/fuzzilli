function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {toString:parseFloat,__proto__:2198332970,constructor:v6,d:v3,a:v6};
const v8 = {__proto__:1337,toString:v3,length:1337,valueOf:v7,d:v6};
for (const v10 in "object") {
    const v13 = [1337,1337,1337,1337,1337];
    function v14(v15,v16,v17,v18) {
        'use strict'
        try {
            v18[3] = v18;
        } catch(v19) {
            let v21 = 0;
            const v23 = {};
            const v24 = [v23,v23,v23,v23];
            const v25 = [13.37,13.37,13.37,13.37,13.37];
            function v26(v27,v28,v29,v30) {
                'use strict'
                const v33 = Object.freeze(this);
            }
            const v34 = v25.filter(v26,v25);
            const v35 = v21 + 1;
        }
        return v13;
    }
    const v36 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
    const v38 = new Proxy(v13,v36);
    v38[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

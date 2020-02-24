function main() {
const v2 = [];
const v3 = {length:1337,e:1337,c:v2,a:1337,toString:"symbol"};
function v5(v6,v7,v8,v9) {
    'use strict'
    for (const v11 in "object") {
        const v14 = [1337,1337,1337,1337,1337];
        function v15(v16,v17,v18,v19) {
            'use strict'
            try {
                v19[3] = v19;
            } catch(v20) {
                const v25 = [1337,1337,1337];
                const v26 = [3664180981,3664180981,"string","string"];
                const v27 = {valueOf:v26,length:v25,toString:parseFloat,constructor:"string",c:parseFloat};
                function v28(v29,v30) {
                    for (const v32 in "ruHq55V2**") {
                        for (const v34 of "pvU0UUjoya") {
                            const v36 = String();
                        }
                    }
                }
                const v37 = v28();
            }
            return v14;
        }
        const v38 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
        const v40 = new Proxy(v14,v38);
        v40[1] = "MIN_VALUE";
    }
}
const v41 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
const v43 = new Proxy(v3,v41);
v43[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

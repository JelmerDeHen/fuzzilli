function main() {
function v1(v2,v3,v4,v5) {
    'use strict'
    try {
        v5[3] = v5;
    } catch(v6) {
        const v10 = [1337,1337,1337,1337,1337];
        function v11(v12,v13,v14,v15) {
            'use strict'
            const v17 = eval();
            try {
                v15[3] = v15;
            } catch(v18) {
                const v23 = [-2331916614,-2331916614,-2331916614];
                const v24 = [Number,3664180981,"string","string"];
                const v25 = {valueOf:v24,length:v23,toString:parseFloat,constructor:"string",c:parseFloat};
                function v26(v27,v28) {
                    for (const v30 of "pvU0UUjoya") {
                        let v32 = v27;
                        while (v32 < 1) {
                        }
                    }
                }
                const v33 = v23.__proto__;
                const v34 = v26(v25);
            }
        }
        const v35 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
        const v37 = new Proxy(v10,v35);
        v37[1] = "MIN_VALUE";
    }
}
const v38 = {deleteProperty:v1,set:v1,getPrototypeOf:v1,call:v1,preventExtensions:v1,isExtensible:v1,construct:v1,get:v1,ownKeys:v1,setPrototypeOf:v1,has:v1};
const v40 = new Proxy(Proxy,v38);
v40[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

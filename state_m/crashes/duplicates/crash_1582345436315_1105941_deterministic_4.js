function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
        for (let v12 = 0; v12 < 6; v12++) {
            const v16 = [1337,1337,1337,1337,1337];
            function v17(v18,v19,v20,v21) {
                'use strict'
                try {
                    v21[3] = v21;
                } catch(v22) {
                    const v27 = [-2331916614,-2331916614,-2331916614];
                    const v28 = [Number,3664180981,"string","string"];
                    const v29 = {valueOf:v28,length:v27,toString:parseFloat,constructor:"string",c:parseFloat};
                    function v30(v31,v32) {
                        for (const v34 of "pvU0UUjoya") {
                            let v36 = v31;
                            while (v36 < 1) {
                            }
                        }
                    }
                    const v37 = v27.__proto__;
                    const v38 = new v30(v29);
                }
            }
            const v39 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
            const v41 = new Proxy(v16,v39);
            v41[1] = "MIN_VALUE";
        }
    }
}
const v42 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v44 = new Proxy(v2,v42);
v44[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

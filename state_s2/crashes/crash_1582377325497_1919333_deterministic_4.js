function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {__proto__:"boolean",b:v3,valueOf:v6,e:Float64Array,a:Float64Array};
const v10 = [1337,1337,1337,1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
    let v18 = 0;
    while (v18 < 1337) {
        const v21 = arguments + 1;
        const v23 = [1337,1337,"MIN_VALUE",1337,1337];
        function v24(v25,v26,v27,v28) {
            'use strict'
            try {
                let v31 = 0;
                while (v31 <= 4) {
                    const v32 = v31 + 1;
                    v31 = v32;
                }
                v28[3] = 0;
            } catch(v33) {
                let v34 = v21;
                const v35 = [];
                const v36 = {a:v35};
                const v37 = {__proto__:v28,constructor:v36,length:v35};
                const v38 = v34 in v37;
            }
            return v28;
        }
        const v39 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:1337,has:v24};
        const v41 = new Proxy(v23,v39);
        v41[1] = "MIN_VALUE";
    }
}
const v42 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
const v44 = new Proxy(v10,v42);
v44[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

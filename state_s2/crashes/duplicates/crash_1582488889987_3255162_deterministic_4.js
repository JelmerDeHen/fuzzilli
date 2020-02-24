function main() {
const v4 = {__proto__:13.37,toString:WeakMap,e:1337,constructor:"d",b:13.37};
let v7 = 0;
while (v7 != 4096) {
    const v8 = v7 + 1;
    v7 = v8;
}
function v9(v10,v11) {
    for (const v13 in "SH.5whpOuu") {
        let v16 = 0;
        const v19 = arguments + 1;
        const v21 = [1337,1337,"MIN_VALUE",1337,1337];
        function v22(v23,v24,v25,v26) {
            'use strict'
            try {
                let v29 = 0;
                while (v29 <= 4) {
                    const v30 = v29 + 1;
                    v29 = v30;
                }
                v26[3] = 0;
            } catch(v31) {
                let v32 = v19;
                const v33 = [];
                const v34 = {a:v33};
                const v35 = {__proto__:v26,constructor:v34,length:v33};
            }
            return v26;
        }
        const v36 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:1337,has:v22};
        const v38 = new Proxy(v21,v36);
        v38[1] = "MIN_VALUE";
        do {
            const v39 = v16 + 1;
            v16 = v39;
        } while (v16 != 8);
        const v41 = eval();
    }
}
const v42 = v9();
}
%NeverOptimizeFunction(main);
main();

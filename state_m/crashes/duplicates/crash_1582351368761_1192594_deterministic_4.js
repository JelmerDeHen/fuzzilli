function main() {
const v3 = [13.37,13.37,13.37];
function v4(v5,v6) {
    for (let v10 = 0; v10 < 10; v10++) {
        const v13 = [1337,1337,"MIN_VALUE",1337,1337];
        function v14(v15,v16,v17,v18) {
            'use strict'
            try {
                let v21 = 0;
                while (v21 < 4) {
                    const v22 = v21 + 1;
                    v21 = v22;
                }
                v18[3] = v18;
            } catch(v23) {
                let v25 = eval;
                const v26 = [];
                const v27 = {a:v26};
                const v28 = {__proto__:v18,constructor:v27,length:v26};
                const v29 = v25 in v28;
            }
            return v18;
        }
        const v30 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:1337,has:v14};
        const v32 = new Proxy(v13,v30);
        v32[1] = "MIN_VALUE";
    }
    for (const v34 in "boolean") {
        let v37 = 0;
        do {
            function v38(v39,v40,v41,v42) {
                'use strict'
                const v44 = eval();
            }
        } while (v37 < 8);
    }
}
for (const v45 in v3) {
    const v46 = v4();
    const v47 = v4(v46,NaN,..."undefined","undefined",...v3);
}
}
%NeverOptimizeFunction(main);
main();

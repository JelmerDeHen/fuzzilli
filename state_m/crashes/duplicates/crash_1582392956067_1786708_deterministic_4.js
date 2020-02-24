function main() {
function v0(v1,v2) {
    for (const v4 in "SH.5whpOuu") {
        const v7 = arguments + 1;
        const v9 = [1337,1337,"MIN_VALUE",1337,1337];
        function v10(v11,v12,v13,v14) {
            'use strict'
            try {
                let v16 = 0;
                const v17 = v16 + 1;
                v14[3] = 0;
            } catch(v18) {
                const v19 = [];
                const v20 = {a:v19};
                const v21 = {__proto__:v14,constructor:v20,length:v19};
            }
            return v14;
        }
        const v22 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:1337,has:v10};
        const v24 = new Proxy(v9,v22);
        v24[1] = "MIN_VALUE";
    }
}
const v25 = v0();
}
%NeverOptimizeFunction(main);
main();

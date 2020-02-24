function main() {
const v2 = [13.37,13.37,13.37];
const v3 = [v2,v2];
const v4 = {e:Boolean,__proto__:13.37};
for (const v6 in "object") {
    const v9 = [1337,1337,1337,1337,1337];
    function v10(v11,v12,v13,v14) {
        'use strict'
        try {
            v14[3] = v14;
        } catch(v15) {
            try {
                const v18 = [13.37,13.37];
                const v19 = v18[1024];
                v4.__proto__ = v3;
                const v20 = v15[128];
                const v21 = v13(...v18);
                const v22 = {has:Function,construct:v19,toString:v19,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v19,isExtensible:v19,call:v19,set:Function,getOwnPropertyDescriptor:Function};
                const v23 = Function();
                const v24 = v13 && v11;
                for (let v28 = 0; v28 < 100; v28++) {
                    const v29 = v21();
                }
                const v31 = Proxy();
                for (const v32 in v31) {
                }
            } catch(v33) {
            }
            function v34(v35,v36) {
                let v38 = 0;
                const v39 = v38 + 1;
            }
            const v40 = v34();
        }
        return v9;
    }
    const v41 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
    const v43 = new Proxy(v9,v41);
    v43[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

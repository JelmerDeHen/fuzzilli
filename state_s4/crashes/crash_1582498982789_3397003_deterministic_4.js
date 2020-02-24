function main() {
const v1 = [13.37];
const v3 = [1337,1337,1337,1337,1337];
const v5 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [];
function v7(v8,v9) {
    const v12 = [1337,1337,1337,1337,1337];
    function v13(v14,v15,v16,v17) {
        'use strict'
        try {
            v17[3] = v17;
        } catch(v18) {
            const v23 = [1337,1337,1337];
            const v24 = [3664180981,3664180981,"string","string"];
            const v25 = {valueOf:v24,length:v23,toString:parseFloat,constructor:"string",c:parseFloat};
            let v27 = undefined;
            const v29 = Object.freeze();
            try {
                const v31 = [13.37,v27];
                const v32 = v31[1024];
                for (const v33 of "string") {
                    const v34 = ~v17;
                }
                const v35 = {set:v7,get:v32};
                for (let v39 = 0; v39 < 5; v39++) {
                }
                const v41 = Proxy();
                for (const v42 in v41) {
                }
            } catch(v43) {
            }
        }
        return v12;
    }
    const v44 = {deleteProperty:v13,set:v13,getPrototypeOf:v3,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
    const v46 = new Proxy(v12,v44);
    v46[1] = "MIN_VALUE";
}
const v47 = v5.some(v7);
}
%NeverOptimizeFunction(main);
main();

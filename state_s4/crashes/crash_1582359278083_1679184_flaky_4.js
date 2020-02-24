function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337,1337,1337];
const v4 = [];
const v5 = {};
const v6 = {toString:v3,__proto__:v4};
let v7 = 1337;
const v9 = [13.37,13.37,13.37];
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
                        const v39 = new Int8Array();
                        const v40 = v39.slice();
                        for (const v41 of "7f7Rh5ttYX") {
                        }
                    }
                }
            }
            const v42 = new v28(v27);
        }
        return v14;
    }
    const v43 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
    const v45 = new Proxy(v14,v43);
    v45[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

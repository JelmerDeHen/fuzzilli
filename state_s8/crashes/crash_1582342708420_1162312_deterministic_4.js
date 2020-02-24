function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [];
const v6 = {};
const v7 = {constructor:v4,a:9007199254740992};
let v8 = 13.37;
const v10 = [13.37,13.37,13.37];
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[3] = v20;
        } catch(v21) {
            const v28 = [1337,1337,v19];
            const v29 = [3664180981,3664180981,"string","string"];
            const v30 = {valueOf:v29,length:v28,toString:parseFloat,constructor:"string",c:parseFloat};
            function v31(v32,v33) {
                for (const v34 in v2) {
                    for (const v36 of "pvU0UUjoya") {
                        const v38 = [13.37,13.37];
                        let v39 = v38;
                        const v41 = String(v39);
                        for (const v42 of v41) {
                        }
                    }
                }
            }
            const v43 = v28.__proto__;
            const v44 = new v31();
            const v47 = Math.hypot(-1970853828,13.37,"boolean");
        }
        return v15;
    }
    const v48 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v50 = new Proxy(v15,v48);
    v50[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

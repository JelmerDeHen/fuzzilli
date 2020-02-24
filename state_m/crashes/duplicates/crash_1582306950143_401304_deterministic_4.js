function main() {
let v2 = 0;
do {
    let v5 = 0;
    do {
        const v6 = v5 + 1;
        v5 = v6;
    } while (v5 < 6);
    const v7 = v2 + 1;
    v2 = v7;
} while (v2 < 6);
let v10 = 0;
do {
    const v11 = v10 + 1;
    v10 = v11;
} while (v10 < 5);
for (const v13 in "object") {
    const v16 = [1337,1337,1337,1337,1337];
    function v17(v18,v19,v20,v21) {
        'use strict'
        try {
            v21[3] = v21;
        } catch(v22) {
            const v27 = [1337,1337,1337];
            const v28 = [3664180981,3664180981,"string","string"];
            const v29 = {valueOf:v28,length:v27,toString:parseFloat,constructor:"string",c:parseFloat};
            function v30(v31,v32) {
                for (const v34 in "ruHq55V2**") {
                    for (const v36 of "pvU0UUjoya") {
                        const v38 = String();
                    }
                }
            }
            const v39 = v27.__proto__;
            const v40 = new v30();
            const v44 = [v17];
            const v46 = [255,255,255];
            const v47 = {a:255,toString:arguments,c:v44,__proto__:v46,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v16;
    }
    const v48 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
    const v50 = new Proxy(v16,v48);
    v50[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

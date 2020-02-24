function main() {
const v2 = [13.37];
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            while (v13 < 6) {
                const v14 = v13 + 1;
                v13 = v14;
            }
            const v15 = v10 + 1;
            v10 = v15;
        } while (v10 < 8);
    }
    for (const v17 in "object") {
        const v20 = [1337,1337,1337,1337,1337];
        function v21(v22,v23,v24,v25) {
            'use strict'
            try {
                v25[3] = v25;
            } catch(v26) {
                const v30 = [1337,1337,1337];
                const v31 = [3664180981,3664180981,"string","string"];
                const v35 = [v21];
                const v37 = [255,255,255];
                const v38 = {a:255,toString:arguments,c:v35,__proto__:v37,valueOf:DataView,constructor:"gM8oAednYn"};
            }
            return v20;
        }
        const v39 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
        const v41 = new Proxy(v20,v39);
        v41[1] = "MIN_VALUE";
    }
}
const v42 = v2.fill(13.37);
const v43 = v3();
const v44 = v3();
}
%NeverOptimizeFunction(main);
main();

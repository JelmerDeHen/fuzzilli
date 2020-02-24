function main() {
const v1 = eval();
let v4 = 0;
do {
    const v5 = v4 + 1;
    v4 = v5;
} while (v4 < 5);
for (const v7 in "object") {
    let v11 = 0;
    do {
        function v12(v13,v14,v15,v16) {
            'use strict'
        }
        const v17 = v11 + 1;
        v11 = v17;
    } while (v11 < 8);
    const v19 = [1337,1337,1337,1337,1337];
    function v20(v21,v22,v23,v24) {
        'use strict'
        try {
            v24[3] = v24;
        } catch(v25) {
            const v31 = [1337,1337,1337];
            const v32 = [3664180981,3664180981,"string","string"];
            function v33(v34,v35) {
                return v24;
            }
            const v38 = Math.hypot(-1970853828,13.37,"boolean");
            const v39 = [v20];
            const v41 = [255,255,255];
            let v43 = 0;
        }
        return v19;
    }
    const v44 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
    const v46 = new Proxy(v19,v44);
    v46[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

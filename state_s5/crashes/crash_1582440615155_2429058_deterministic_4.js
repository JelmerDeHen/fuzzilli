function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337];
const v5 = {__proto__:v4};
for (const v7 in "object") {
    const v10 = [1337,1337,1337,1337,1337];
    function v11(v12,v13,v14,v15) {
        'use strict'
        try {
            v15[3] = 5;
            const v17 = v10.find();
            const v19 = {set:v17};
            const v21 = Object.defineProperty(v5,"c");
            const v22 = Uint32Array();
            const v23 = v22.slice();
        } catch(v24) {
            const v26 = [13.37,13.37,13.37,13.37,13.37];
            function v27(v28,v29,v30,v31) {
                'use strict'
                const v33 = [13.37,13.37,13.37,v15,13.37];
                const v36 = Object.freeze(this);
            }
            const v37 = v26.map(v27,v26);
        }
        return v10;
    }
    const v38 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
    const v40 = new Proxy(v10,v38);
    v40[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

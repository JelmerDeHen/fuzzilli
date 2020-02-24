function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [Int32Array];
const v8 = {a:"undefined"};
const v9 = {valueOf:"undefined",b:-3782879276,constructor:"undefined",__proto__:13.37,length:"undefined"};
for (const v11 in "object") {
    const v14 = [1337,1337,1337,1337,1337];
    function v15(v16,v17,v18,v19) {
        'use strict'
        try {
            v19[3] = v19;
        } catch(v20) {
            let v23 = 255;
            const v24 = v23 + 1;
            let v25 = 0;
            const v27 = [13.37,13.37,v19,13.37,13.37];
            function v28(v29,v30,v31,v32) {
                'use strict'
                const v35 = Object.freeze(this);
            }
            const v36 = v27.filter(v28,v27);
            const v37 = v25 + 1;
        }
        return v14;
    }
    const v38 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
    const v40 = new Proxy(v14,v38);
    v40[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

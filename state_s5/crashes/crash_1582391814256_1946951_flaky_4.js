function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [v4,-1006754406,v4];
const v8 = {toString:v6,valueOf:13.37};
const v9 = {d:"species",e:v6};
let v10 = v9;
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            const v21 = {e:v7};
            const v22 = v16(v4,v18,"object",v10);
            const v23 = ~"object";
            v20[3] = v20;
        } catch(v24) {
            const v26 = [13.37,13.37,13.37,13.37,13.37];
            function v27(v28,v29,v30,v31) {
                'use strict'
                const v34 = [13.37,13.37,13.37,v20,13.37];
                const v36 = [1337,v34,13.37,6];
                const v40 = Object.freeze(this,"a",v36);
                return v34;
            }
            const v41 = v26.map(v27,v26);
        }
        return v15;
    }
    const v42 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v44 = new Proxy(v15,v42);
    v44[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

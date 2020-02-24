function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [WeakSet,v4];
for (const v7 in "object") {
    const v10 = [1337,1337,1337,1337,1337];
    function v11(v12,v13,v14,v15) {
        'use strict'
        try {
            v15[3] = v15;
        } catch(v16) {
            const v21 = [1468489541,-1000000.0,2];
            const v23 = {get:Uint8ClampedArray};
            const v25 = Object.seal(v21,65537);
            let v27 = 0;
            const v29 = [13.37,13.37,13.37,13.37,13.37];
            function v30(v31,v32,v33,v34) {
                'use strict'
                const v37 = Object.freeze(this);
            }
            const v38 = v29.filter(v30,v29);
            const v39 = v27 + 1;
        }
        return v10;
    }
    const v40 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
    const v42 = new Proxy(v10,v40);
    v42[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

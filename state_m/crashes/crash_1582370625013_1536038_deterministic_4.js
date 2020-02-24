function main() {
const v1 = [1000000000000.0,1000000000000.0,1000000000000.0];
const v3 = [1337,1337,1337,1337,1337];
const v4 = [1337,v1,v1];
for (const v6 in "object") {
    const v10 = [1337,1337,1337,1337,1337];
    function v11(v12,v13,v14,v15) {
        'use strict'
        try {
            v15[4028257092] = v15;
        } catch(v16) {
            const v17 = v15 instanceof Uint32Array;
            const v20 = 2.2250738585072014e-308 % 3890419937;
            const v21 = [v20];
            let v22 = v21;
            const v24 = Math.acosh(v22);
        }
        return v10;
    }
    const v25 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
    const v27 = new Proxy(v10,v25);
    v27[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

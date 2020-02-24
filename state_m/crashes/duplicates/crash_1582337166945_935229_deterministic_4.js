function main() {
const v3 = [1337];
const v4 = {d:"boolean",e:String,a:String,constructor:1337,length:v3};
for (const v6 in "object") {
    const v9 = [1337,1337,1337,1337,1337];
    function v10(v11,v12,v13,v14) {
        'use strict'
        try {
            v14[3] = v14;
        } catch(v15) {
            const v19 = [1337,1337,1337];
            const v20 = {valueOf:v4,length:v19,toString:parseFloat,constructor:"string",c:parseFloat};
            function v21(v22,v23) {
                for (const v25 of "pvU0UUjoya") {
                    const v28 = String();
                    for (const v29 of "7f7Rh5ttYX") {
                    }
                }
            }
            const v30 = v19.__proto__;
            const v31 = v21();
        }
        return v9;
    }
    const v32 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
    const v34 = new Proxy(v9,v32);
    v34[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

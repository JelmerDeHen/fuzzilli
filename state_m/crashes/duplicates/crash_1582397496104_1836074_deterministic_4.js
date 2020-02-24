function main() {
for (const v3 in "object") {
    const v6 = [1337,1337,1337,1337,1337];
    function v7(v8,v9,v10,v11) {
        'use strict'
        try {
            v11[3] = v11;
        } catch(v12) {
            const v17 = [1337,1337,1337];
            const v18 = [3664180981,3664180981,"string","string"];
            const v19 = {valueOf:v18,length:v17,toString:parseFloat,constructor:"string",c:parseFloat};
            const v20 = v17.__proto__;
            for (const v22 of "pvU0UUjoya") {
                const v23 = {getOwnPropertyDescriptor:v22,defineProperty:v22,construct:v19,ownKeys:v9,has:Number,isExtensible:v8,apply:v20,get:String,preventExtensions:v22,call:v19};
                const v25 = new Proxy(v20,v23);
            }
        }
        return v6;
    }
    const v26 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
    const v28 = new Proxy(v6,v26);
    v28[1] = "jcDx45EsBA";
}
}
%NeverOptimizeFunction(main);
main();

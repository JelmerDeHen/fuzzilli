function main() {
function v0(v1,v2) {
    for (const v4 in "object") {
        const v7 = [1337,1337,1337,1337,1337];
        function v8(v9,v10,v11,v12) {
            'use strict'
            try {
                v12[3] = v12;
            } catch(v13) {
                const v18 = [1337,1337,1337];
                const v19 = [3664180981,3664180981,"string","string"];
                const v20 = {valueOf:v19,length:v18,toString:parseFloat,constructor:"string",c:parseFloat};
                const v21 = v18.__proto__;
                const v25 = [v8];
                const v27 = [255,255,255];
                let v29 = 0;
                const v30 = {a:255,toString:arguments,c:v25,__proto__:v27,valueOf:DataView,constructor:"gM8oAednYn"};
            }
            return v7;
        }
        const v31 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
        const v33 = new Proxy(v7,v31);
        v33[1] = "MIN_VALUE";
    }
}
const v34 = v0();
}
%NeverOptimizeFunction(main);
main();

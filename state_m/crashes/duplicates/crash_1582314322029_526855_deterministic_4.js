function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
    for (const v6 in "object") {
        const v9 = [1337,1337,1337,1337,1337];
        function v10(v11,v12,v13,v14) {
            'use strict'
            try {
                v14[3] = v14;
            } catch(v15) {
                const v20 = [1337,1337,1337];
                const v21 = [3664180981,3664180981,"string","string"];
                const v22 = {valueOf:v21,length:v20,toString:parseFloat,constructor:"string",c:parseFloat};
                const v23 = v20.__proto__;
                const v27 = [v10];
                const v29 = [255,255,255];
                let v31 = 0;
                const v32 = {a:255,toString:arguments,c:v27,__proto__:v29,valueOf:DataView,constructor:"gM8oAednYn"};
            }
            return v9;
        }
        const v33 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
        const v35 = new Proxy(v9,v33);
        v35[1] = "MIN_VALUE";
    }
}
const v36 = v0();
}
%NeverOptimizeFunction(main);
main();

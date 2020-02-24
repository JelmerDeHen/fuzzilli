function main() {
function v0(v1,v2) {
    let v5 = -128;
    while (v5 < 5) {
        const v8 = 1337 > eval;
        const v10 = eval();
        let v12 = 0;
        const v13 = v12 + 1;
        const v16 = [1337,1337,1337,1337,1337];
        function v17(v18,v19,v20,v21) {
            'use strict'
            try {
                v21[3] = v21;
            } catch(v22) {
                const v27 = [1337,1337,1337];
                const v28 = [3664180981,3664180981,"string","string"];
                const v29 = {valueOf:v28,length:v27,toString:parseFloat,constructor:"string",c:parseFloat};
                const v30 = v27.__proto__;
                const v34 = [v17];
                const v36 = [255,255,255];
                let v38 = 0;
                const v39 = {a:255,toString:arguments,c:v34,__proto__:v36,valueOf:DataView,constructor:"gM8oAednYn"};
            }
            return v16;
        }
        const v40 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
        const v42 = new Proxy(v16,v40);
        v42[1] = "MIN_VALUE";
    }
}
const v43 = v0();
}
%NeverOptimizeFunction(main);
main();

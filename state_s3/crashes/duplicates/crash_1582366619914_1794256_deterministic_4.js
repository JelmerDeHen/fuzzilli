function main() {
function v0(v1,v2) {
    let v5 = 0;
    do {
        let v7 = -1024;
        const v10 = 1337 > eval;
        const v12 = eval();
        let v14 = 0;
        const v17 = [1337,1337,1337,1337,1337];
        function v18(v19,v20,v21,v22) {
            'use strict'
            try {
                v22[3] = v22;
            } catch(v23) {
                const v28 = [1337,1337,1337];
                const v29 = [3664180981,3664180981,"string","string"];
                const v30 = {valueOf:v29,length:v28,toString:parseFloat,constructor:"string",c:parseFloat};
                const v31 = v28.__proto__;
                const v35 = [v18];
                const v37 = [255,255,255];
                let v39 = 0;
                const v40 = {a:255,toString:arguments,c:v35,__proto__:v37,valueOf:DataView,constructor:"gM8oAednYn"};
            }
            return v17;
        }
        const v41 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
        const v43 = new Proxy(v17,v41);
        v43[1] = "MIN_VALUE";
    } while (v5 < 8);
}
const v44 = v0();
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = [13.37,13.37,13.37];
const v3 = typeof 0;
const v6 = [530086.5682938832,530086.5682938832,530086.5682938832];
const v7 = [v1,v6];
const v8 = v7.toLocaleString();
let v9 = v8;
const v10 = [v3,"number",...v9];
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[3] = v20;
        } catch(v21) {
            const v26 = [1337,1337,1337];
            const v27 = [3664180981,3664180981,"string","string"];
            const v28 = {valueOf:v27,length:v26,toString:parseFloat,constructor:"string",c:parseFloat};
            function v29(v30,v31) {
                return v19;
            }
            const v32 = v26.__proto__;
            const v36 = [v16];
            const v38 = [255,255,255];
            const v39 = {a:255,toString:arguments,c:v36,__proto__:v38,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v15;
    }
    const v40 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v42 = new Proxy(v15,v40);
    v42[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

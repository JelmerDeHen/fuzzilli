function main() {
const v1 = eval();
let v4 = 0;
do {
    const v5 = v4 + 1;
    v4 = v5;
} while (v4 < 10);
for (const v7 in "undefined") {
}
for (const v9 in "object") {
    const v12 = [1337,1337,1337,1337,1337];
    function v13(v14,v15,v16,v17) {
        'use strict'
        try {
            v17[3] = v17;
        } catch(v18) {
            const v23 = [1337,1337,1337];
            const v24 = [3664180981,3664180981,"string","string"];
            const v25 = {valueOf:v24,length:v23,toString:parseFloat,constructor:"string",c:parseFloat};
            function v26(v27,v28) {
                return v15;
            }
            const v29 = v23.__proto__;
            const v33 = [v13];
            const v35 = [255,255,255];
            const v36 = {a:255,toString:arguments,c:v33,__proto__:v35,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v12;
    }
    const v37 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
    const v39 = new Proxy(v12,v37);
    v39[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

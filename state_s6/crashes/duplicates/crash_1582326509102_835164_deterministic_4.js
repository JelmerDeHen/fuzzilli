function main() {
const v1 = eval();
let v4 = 0;
while (v4 < 9) {
    const v5 = v4 + 1;
    v4 = v5;
}
for (let v9 = 0; v9 < 7; v9++) {
}
let v12 = 0;
do {
    const v13 = v12 + 1;
    v12 = v13;
} while (v12 < 5);
for (const v15 in "object") {
    const v18 = [1337,1337,1337,1337,1337];
    function v19(v20,v21,v22,v23) {
        'use strict'
        try {
            v23[3] = v23;
        } catch(v24) {
            const v29 = [1337,1337,1337];
            const v30 = [3664180981,3664180981,"string","string"];
            const v31 = {valueOf:v30,length:v29,toString:parseFloat,constructor:"string",c:parseFloat};
            const v32 = v29.__proto__;
            const v36 = [v19];
            const v38 = [255,255,255];
            let v40 = 0;
            const v41 = {a:255,toString:arguments,c:v36,__proto__:v38,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v18;
    }
    const v42 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
    const v44 = new Proxy(v18,v42);
    v44[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

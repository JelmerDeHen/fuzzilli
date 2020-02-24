function main() {
for (const v2 in "boolean") {
    const v4 = 13.37 << v2;
    let v5 = 0;
    const v6 = v5 != v4;
}
const v8 = eval();
let v11 = 0;
do {
    const v13 = Symbol.isConcatSpreadable;
    const v14 = v11 + 1;
    v11 = v14;
} while (v11 < 5);
for (const v16 in "object") {
    const v19 = [1337,1337,1337,1337,1337];
    function v20(v21,v22,v23,v24) {
        'use strict'
        try {
            v24[3] = v24;
        } catch(v25) {
            const v30 = [1337,1337,1337];
            const v31 = [3664180981,3664180981,"string","string"];
            const v32 = {valueOf:v31,length:v30,toString:parseFloat,constructor:"string",c:parseFloat};
            const v33 = v30.__proto__;
            const v37 = [v20];
            const v39 = [255,255,255];
            let v41 = 0;
            const v42 = {a:255,toString:arguments,c:v37,__proto__:v39,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v19;
    }
    const v43 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
    const v45 = new Proxy(v19,v43);
    v45[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

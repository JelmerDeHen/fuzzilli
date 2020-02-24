function main() {
let v2 = 0;
do {
    let v4 = 0;
    const v5 = [];
    const v7 = new Int16Array();
    const v8 = v2 + 1;
    v2 = v8;
} while (v2 < 8);
const v10 = eval();
let v13 = 0;
do {
    const v14 = v13 + 1;
    v13 = v14;
} while (v13 < 5);
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

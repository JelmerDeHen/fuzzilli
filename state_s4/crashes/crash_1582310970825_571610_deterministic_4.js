function main() {
for (let v3 = 0; v3 < 10; v3++) {
    let v5 = 0;
    const v6 = v5 + 1;
}
let v9 = 0;
do {
    const v10 = v9 + 1;
    v9 = v10;
} while (v9 < 6);
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
            function v33(v34,v35) {
                return v22;
            }
            const v36 = v30.__proto__;
            const v40 = [v20];
            const v42 = [255,255,255];
            const v43 = {a:255,toString:arguments,c:v40,__proto__:v42,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v19;
    }
    const v44 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
    const v46 = new Proxy(v19,v44);
    v46[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

function main() {
let v2 = 0;
while (v2 < 3) {
    const v3 = v2 + 1;
    v2 = v3;
}
let v6 = 0;
while (v6 < 10) {
    const v7 = v6 + 1;
    v6 = v7;
}
for (let v11 = 0; v11 < 4; v11++) {
}
const v13 = eval();
let v16 = 0;
do {
    const v17 = v16 + 1;
    v16 = v17;
} while (v16 < 5);
for (const v19 in "object") {
    const v22 = [1337,1337,1337,1337,1337];
    function v23(v24,v25,v26,v27) {
        'use strict'
        try {
            v27[3] = v27;
        } catch(v28) {
            const v33 = [1337,1337,1337];
            const v34 = [3664180981,3664180981,"string","string"];
            const v35 = {valueOf:v34,length:v33,toString:parseFloat,constructor:"string",c:parseFloat};
            const v36 = v33.__proto__;
            const v40 = [v23];
            const v42 = [255,255,255];
            let v44 = 0;
            const v45 = {a:255,toString:arguments,c:v40,__proto__:v42,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v22;
    }
    const v46 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
    const v48 = new Proxy(v22,v46);
    v48[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

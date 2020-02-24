function main() {
const v1 = eval();
for (let v5 = 0; v5 < 8; v5++) {
}
let v8 = 0;
do {
    const v9 = v8 + 1;
    v8 = v9;
} while (v8 < 5);
let v12 = 0;
while (v12 < 9) {
    const v13 = v12 + 1;
    v12 = v13;
}
for (const v15 in "object") {
    const v18 = [1337,1337,1337,1337,1337];
    function v19(v20,v21,v22,v23) {
        'use strict'
        try {
            v23[3] = v23;
        } catch(v24) {
            const v26 = [1337,1337,1337];
            const v30 = [v19];
            const v32 = [255,255,255];
            let v34 = 0;
            const v35 = {a:255,toString:arguments,c:v30,__proto__:v32,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v18;
    }
    const v36 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
    const v38 = new Proxy(v18,v36);
    v38[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

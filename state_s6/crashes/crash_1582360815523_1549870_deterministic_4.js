function main() {
const v1 = [13.37,13.37,13.37];
const v3 = typeof 0;
const v6 = [Infinity,Infinity,Infinity];
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
            const v25 = [v16];
            const v27 = [255,255,255];
            let v29 = 0;
            const v30 = {a:255,toString:arguments,c:v25,__proto__:v27,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v15;
    }
    const v31 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v33 = new Proxy(v15,v31);
    v33[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

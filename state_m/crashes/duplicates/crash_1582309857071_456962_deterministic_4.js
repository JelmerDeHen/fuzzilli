function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = ["number",v4,1337,1073741824];
const v8 = {b:v7,length:v6,a:"number",constructor:1337,__proto__:DataView,e:13.37};
const v9 = {b:v6,length:v7,d:v8,e:v6};
let v10 = 1073741824;
const v12 = [13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v16 = [1337,1337];
for (const v18 in "object") {
    const v22 = [1337,13.37,1337,1337,1337];
    function v23(v24,v25,v26,v27) {
        'use strict'
        try {
            v27[3] = v27;
        } catch(v28) {
            const v33 = [1337,1337,1337];
            const v34 = [3664180981,3664180981,"string","string"];
            const v35 = {valueOf:v34,length:v33,toString:parseFloat,constructor:"string",c:parseFloat};
            function v36(v37,v38) {
                return v27;
            }
            const v39 = v33.__proto__;
            const v43 = [v16];
            const v45 = [255,255,255];
            const v46 = {a:255,toString:arguments,c:v43,__proto__:v45,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v22;
    }
    const v47 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
    const v49 = new Proxy(v22,v47);
    v49[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

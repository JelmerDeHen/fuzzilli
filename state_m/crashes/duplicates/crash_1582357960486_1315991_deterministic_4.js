function main() {
const v4 = {d:13.37,a:"EPSILON",e:-4294967295,__proto__:1337};
const v5 = {c:1337,valueOf:13.37,a:1337,e:1337,d:v4};
const v8 = [1337,1337,v5];
const v11 = [1337,Infinity,undefined];
const v12 = [Infinity,v11];
const v13 = v12.toLocaleString();
let v14 = v13;
const v15 = [v8,..."jZZhI/kPfh",...v14];
for (const v17 in "object") {
    const v20 = [1337,1337,1337,1337,1337];
    function v21(v22,v23,v24,v25) {
        'use strict'
        try {
            v25[3] = v25;
        } catch(v26) {
            const v31 = [1337,1337,1337];
            const v32 = [3664180981,3664180981,"string","string"];
            const v33 = {valueOf:v32,length:v31,toString:parseFloat,constructor:"string",c:parseFloat};
            const v34 = v31.__proto__;
            const v38 = [v21];
            const v40 = [255,255,255];
            let v42 = 0;
            const v43 = {a:255,toString:arguments,c:v38,__proto__:v40,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v20;
    }
    const v44 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
    const v46 = new Proxy(v20,v44);
    v46[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

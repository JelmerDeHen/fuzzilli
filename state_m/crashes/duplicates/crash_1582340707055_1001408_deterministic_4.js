function main() {
const v4 = {valueOf:1337,a:-3454616784,length:"prototype",d:13.37};
let v5 = "prototype";
const v9 = [13.37];
const v11 = [1337,1337,1337];
const v12 = ["N*d4*m/H0F","N*d4*m/H0F",v11];
const v13 = {constructor:v11,b:-1662380622,c:v9,a:v9,__proto__:1337,constructor:v12};
const v15 = [13.37,13.37,v13,13.37];
for (const v16 of v15) {
}
for (const v18 in "object") {
    const v21 = [1337,1337,1337,1337,1337];
    function v22(v23,v24,v25,v26) {
        'use strict'
        try {
            v26[3] = v26;
        } catch(v27) {
            const v32 = [1337,1337,1337];
            const v33 = [3664180981,3664180981,"string","string"];
            const v34 = {valueOf:v33,length:v32,toString:parseFloat,constructor:"string",c:parseFloat};
            const v35 = v32.__proto__;
            const v39 = [v22];
            const v41 = [255,255,255];
            let v43 = 0;
            const v44 = {a:255,toString:arguments,c:v39,__proto__:v41,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v21;
    }
    const v45 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
    const v47 = new Proxy(v21,v45);
    v47[1] = "MIN_VALUE";
}
for (const v48 in v4) {
}
const v50 = Proxy();
}
%NeverOptimizeFunction(main);
main();

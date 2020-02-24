function main() {
const v3 = [1337,1337,1337];
const v4 = {d:v3,valueOf:1337,constructor:13.37};
let v5 = 1337;
for (const v7 in "object") {
    const v10 = [1337,1337,1337,1337,1337];
    function v11(v12,v13,v14,v15) {
        'use strict'
        try {
            v15[3] = v15;
        } catch(v16) {
            const v20 = [v11];
            const v22 = [255,255,255];
            const v23 = {a:255,toString:arguments,c:v20,__proto__:v22,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v10;
    }
    const v24 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
    const v26 = new Proxy(v10,v24);
    v26[1] = "MIN_VALUE";
}
const v27 = eval(...v5,eval,...v4,13.37,..."object");
}
%NeverOptimizeFunction(main);
main();

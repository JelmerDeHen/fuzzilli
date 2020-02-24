function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [127,13.37,v4];
const v6 = {toString:1337,valueOf:1337,a:13.37,d:v5,b:v5};
const v7 = {d:v2,e:13.37};
let v8 = 1337;
const v12 = [13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [v14,1337];
const v16 = {e:Number,d:798072795,toString:v12};
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
            function v35(v36,v37) {
                const v39 = [v35,13.37];
                return v26;
            }
            const v43 = [v22];
            const v45 = [255,255,255];
            const v46 = {a:255,toString:arguments,c:v43,__proto__:v45,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v21;
    }
    const v47 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
    const v49 = new Proxy(v21,v47);
    v49[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

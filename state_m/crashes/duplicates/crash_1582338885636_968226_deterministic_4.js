function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [256,Set];
const v8 = {e:v6,b:1337,valueOf:v6};
const v9 = {e:256,length:v7,a:Set,constructor:v4,valueOf:Set,__proto__:"byteLength"};
let v10 = v4;
const v15 = [13.37];
const v17 = [1337,1337];
const v18 = [6];
const v19 = {toString:v15};
for (const v21 in "object") {
    const v24 = [1337,1337,1337,1337,1337];
    function v25(v26,v27,v28,v29) {
        'use strict'
        try {
            v29[3] = v29;
        } catch(v30) {
            const v33 = {constructor:"toPrimitive",e:v24,__proto__:v25,toString:v21,length:1337};
            const v36 = [1337,1337,1337];
            const v37 = [3664180981,3664180981,"string","string"];
            const v38 = {valueOf:v37,length:v36,toString:parseFloat,constructor:"string",c:parseFloat};
            function v39(v40,v41) {
                v28.toString = WeakMap;
            }
            const v45 = [v25];
            const v47 = [255,255,255];
            const v48 = {a:255,toString:arguments,c:v45,__proto__:v47,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v24;
    }
    const v49 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
    const v51 = new Proxy(v24,v49);
    v51[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

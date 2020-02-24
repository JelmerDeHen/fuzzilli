function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [];
const v8 = {constructor:13.37,toString:"8jvLcNmWoD",__proto__:Uint8ClampedArray,e:13.37,length:"8jvLcNmWoD",valueOf:"8jvLcNmWoD",d:1024};
const v9 = {c:v8,constructor:v6};
let v10 = v7;
const v14 = [13.37,13.37,13.37];
const v16 = [1337,1337,1337,1337];
const v17 = [v16,1337];
const v18 = {e:Number,d:798072795,toString:v14};
for (const v20 in "object") {
    const v23 = [1337,1337,1337,1337,1337];
    function v24(v25,v26,v27,v28) {
        'use strict'
        try {
            v28[3] = v28;
        } catch(v29) {
            const v34 = [1337,1337,1337];
            const v35 = [3664180981,3664180981,"string","string"];
            const v36 = {valueOf:v35,length:v34,toString:parseFloat,constructor:"string",c:parseFloat};
            function v37(v38,v39) {
                v38.valueOf = v27;
                return v36;
            }
            const v40 = v34.__proto__;
            const v44 = [v24];
            const v46 = [255,255,255];
            const v47 = {a:255,toString:arguments,c:v44,__proto__:v46,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v23;
    }
    const v48 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
    const v50 = new Proxy(v23,v48);
    v50[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

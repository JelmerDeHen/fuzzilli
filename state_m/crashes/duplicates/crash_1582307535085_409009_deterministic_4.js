function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [v4,13.37,v4];
const v6 = {toString:1337,valueOf:Array,constructor:v4,e:1337};
const v7 = {e:v2,length:13.37,__proto__:13.37};
let v8 = v4;
const v12 = [13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [v14,1337];
const v16 = {e:Number,d:798072795,toString:v12};
const v17 = {e:1337};
let v18 = v12;
const v20 = [13.37];
const v22 = [1337,1337];
for (const v24 in "object") {
    const v27 = [1337,1337,1337,1337,1337];
    function v28(v29,v30,v31,v32) {
        'use strict'
        try {
            v32[3] = v32;
        } catch(v33) {
            const v40 = [1337,1337,1337];
            const v41 = [3664180981,3664180981,"string","string"];
            const v42 = {valueOf:v41,length:v40,toString:parseFloat,constructor:"string",c:parseFloat};
            const v43 = v40.__proto__;
            function v45(v46,v47) {
                return v30;
            }
            const v49 = Math.hypot(-1970853828,13.37,"boolean");
            const v53 = [v28];
            const v55 = [255,255,255];
            const v56 = {a:255,toString:arguments,c:v53,__proto__:v55,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v27;
    }
    const v57 = {deleteProperty:v28,set:v28,getPrototypeOf:v28,call:v28,preventExtensions:v28,isExtensible:v28,construct:v28,get:v28,ownKeys:v28,setPrototypeOf:v28,has:v28};
    const v59 = new Proxy(v27,v57);
    v59[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

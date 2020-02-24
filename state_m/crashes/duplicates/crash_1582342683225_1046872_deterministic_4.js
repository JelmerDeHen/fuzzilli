function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = [v4,1337,v4];
const v8 = {length:v6,__proto__:v4,valueOf:"object",e:v7,c:"object",b:Boolean};
const v9 = {d:v7};
let v10 = -268435456;
const v14 = [13.37,13.37,13.37];
const v16 = [1337,1337,1337,1337];
const v17 = [v16,1337];
const v18 = {e:Number,d:798072795,toString:v14};
const v19 = {e:1337};
let v20 = v14;
const v22 = [13.37];
const v24 = [1337,1337];
for (const v26 in "object") {
    const v29 = [1337,1337,1337,1337,1337];
    function v30(v31,v32,v33,v34) {
        'use strict'
        try {
            v34[3] = v34;
        } catch(v35) {
            const v42 = [1337,1337,1337];
            const v43 = [3664180981,3664180981,"string","string"];
            const v44 = {valueOf:v43,length:v42,toString:parseFloat,constructor:"string",c:parseFloat};
            function v45(v46,v47) {
                return v31;
            }
            const v48 = v42.__proto__;
            const v51 = Math.hypot(-1970853828,13.37,"boolean");
            const v55 = [v30];
            const v57 = [255,255,255];
            const v58 = {a:255,toString:arguments,c:v55,__proto__:v57,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v29;
    }
    const v59 = {deleteProperty:v30,set:v30,getPrototypeOf:v30,call:v30,preventExtensions:v30,isExtensible:v30,construct:v30,get:v30,ownKeys:v30,setPrototypeOf:v30,has:v30};
    const v61 = new Proxy(v29,v59);
    v61[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

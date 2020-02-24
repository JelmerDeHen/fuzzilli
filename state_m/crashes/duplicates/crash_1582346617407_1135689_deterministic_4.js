function main() {
const v4 = [13.37];
const v6 = [1337];
const v7 = [-1024,1337,1337];
const v8 = {__proto__:13.37,toString:-1024,b:1337,constructor:-1024,length:v7,e:v6};
const v9 = {__proto__:"NEGATIVE_INFINITY",b:"NEGATIVE_INFINITY",constructor:WeakSet,a:13.37,length:v8,c:v4};
let v10 = v9;
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
            function v41(v42,v43) {
                let v46 = 0;
                while (v46 < 1337) {
                    const v47 = v46 + 1;
                    v46 = v47;
                }
            }
            const v48 = v41();
            const v50 = [1337,1337,1337];
            const v51 = [3664180981,3664180981,"string","string"];
            const v52 = {valueOf:v51,length:v50,toString:parseFloat,constructor:"string",c:parseFloat};
            const v55 = Math.hypot(-1970853828,13.37,"boolean");
            const v59 = [v30];
            const v61 = [255,255,255];
            const v62 = {a:255,toString:arguments,c:v59,__proto__:v61,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v29;
    }
    const v63 = {deleteProperty:v30,set:v30,getPrototypeOf:v30,call:v30,preventExtensions:v30,isExtensible:v30,construct:v30,get:v30,ownKeys:v30,setPrototypeOf:v30,has:v30};
    const v65 = new Proxy(v29,v63);
    v65[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

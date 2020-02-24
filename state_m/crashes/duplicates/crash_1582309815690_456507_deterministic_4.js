function main() {
const v4 = [1337];
const v5 = [];
const v6 = {c:127,a:13.37,length:v5,e:v5,b:v4,__proto__:Infinity};
for (const v9 in "object") {
    const v12 = [1337,1337,v6,1337,1337];
    function v13(v14,v15,v16,v17) {
        'use strict'
        try {
            v17[3] = v17;
        } catch(v18) {
            const v23 = [1337,6,1337];
            const v24 = [3664180981,3664180981,"string","string"];
            const v25 = {valueOf:v24,length:v23,toString:parseFloat,constructor:"string",c:parseFloat};
            function v26(v27,v28) {
                for (const v30 of "pvU0UUjoya") {
                    const v33 = String();
                    for (const v34 of "7f7Rh5ttYX") {
                    }
                }
            }
            const v35 = v26();
            const v39 = [v13];
            const v41 = [255,255,255];
            const v42 = {a:255,toString:arguments,c:v39,__proto__:v41,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v12;
    }
    const v43 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
    const v45 = new Proxy(v12,v43);
    v45[1] = 4;
}
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [v4];
const v6 = {};
const v7 = {valueOf:-1024,constructor:v4};
let v8 = v2;
const v11 = [-2490171089,2103616979,2103616979,2103616979];
const v12 = {valueOf:v11};
const v14 = {e:v12,d:"d"};
const v16 = [1337];
let v18 = undefined;
let v20 = -128;
const v21 = v20 + 1;
const v24 = 1337 > eval;
let v26 = 0;
for (let v30 = 0; v30 < 5; v30++) {
}
const v31 = v26 + 1;
let v33 = 0;
for (const v35 in "object") {
    const v38 = [1337,1337,1337,1337,1337];
    function v39(v40,v41,v42,v43) {
        'use strict'
        try {
            v43[3] = v43;
        } catch(v44) {
            const v49 = [1337,1337,1337];
            const v50 = [3664180981,3664180981,"string","string"];
            const v51 = {valueOf:v50,length:v49,toString:parseFloat,constructor:"string",c:parseFloat};
            const v52 = v49.__proto__;
            const v56 = [v39];
            const v58 = [4294967295,4294967295,4294967295];
            let v60 = 0;
            const v61 = {a:4294967295,toString:arguments,c:v56,__proto__:v58,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v38;
    }
    const v62 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
    const v64 = new Proxy(v38,v62);
    v64[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

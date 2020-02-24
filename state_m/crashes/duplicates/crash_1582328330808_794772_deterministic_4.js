function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [129,v4,v4];
const v8 = {valueOf:v4,e:1337,c:"boolean",b:v6};
const v9 = 13.37 === v6;
let v10 = v9;
const v11 = 1337 != v8;
const v12 = {};
let v13 = 13.37;
const v16 = [13.37,13.37,13.37];
const v18 = [1337,1337,1337,1337];
const v19 = {set:parseInt,defineProperty:Number,getOwnPropertyDescriptor:parseInt,apply:Number};
const v20 = v8 & parseInt;
for (const v21 in v16) {
    let v22 = v21;
}
const v23 = v12[v16];
for (const v25 in "object") {
    const v28 = [1337,1337,1337,1337,1337];
    function v29(v30,v31,v32,v33) {
        'use strict'
        try {
            v33[3] = v33;
        } catch(v34) {
            const v39 = [1337,1337,1337];
            const v40 = [3664180981,3664180981,"string","string"];
            const v41 = {valueOf:v40,length:v39,toString:parseFloat,constructor:"string",c:parseFloat};
            const v42 = (1337).__proto__;
            const v46 = [v29];
            const v48 = [255,255,255];
            let v50 = 0;
            const v51 = {a:255,toString:arguments,c:v46,__proto__:v48,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v28;
    }
    const v52 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:v29,has:v29};
    const v54 = new Proxy(v28,v52);
    v54[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

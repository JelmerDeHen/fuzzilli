function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [];
const v7 = {a:13.37};
const v8 = {d:isFinite,toString:13.37,__proto__:13.37,e:v3,b:-1281726566,length:v7,c:1337};
let v9 = v5;
const v12 = arguments + 1;
const v14 = [1337,1337,"MIN_VALUE",1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        let v22 = 0;
        while (v22 <= 4) {
            const v23 = v22 + 1;
            v22 = v23;
        }
        const v24 = v15();
    } catch(v25) {
        const v26 = [];
        const v27 = {a:v26};
    }
}
const v28 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:1337,has:v15};
const v30 = new Proxy(v14,v28);
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

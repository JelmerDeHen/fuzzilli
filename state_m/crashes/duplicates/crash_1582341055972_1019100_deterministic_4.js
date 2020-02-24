function main() {
const v1 = [13.37,13.37];
const v4 = [1337,1337,"MIN_VALUE",1337,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        let v12 = 0;
        while (v12 < 2) {
            const v13 = v12 + 1;
            v12 = v13;
        }
        const v14 = 2 === v9;
        const v15 = {c:v1,toString:v12,length:v5,__proto__:v14,a:v4};
        const v16 = v15.length();
    } catch(v17) {
        const v18 = [];
        const v19 = {a:v18};
    }
}
const v20 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:1337,has:v5};
const v22 = new Proxy(v4,v20);
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

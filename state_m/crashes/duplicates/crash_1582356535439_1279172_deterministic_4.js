function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        let v10 = 0;
        do {
            const v11 = v10 + 1;
            v10 = v11;
        } while (v10 < 2);
        const v12 = v3();
    } catch(v13) {
        const v18 = [1337,1337,1337];
        const v19 = [3664180981,3664180981,"string","string"];
        const v20 = {valueOf:v19,length:v18,toString:parseFloat,constructor:"string",c:parseFloat};
    }
}
const v21 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v23 = new Proxy(v2,v21);
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

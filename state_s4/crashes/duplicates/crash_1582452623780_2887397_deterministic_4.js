function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337];
const v6 = [v5,1337,v5];
const v7 = {b:"length",a:1337,__proto__:"length",valueOf:1337,constructor:13.37};
const v8 = {b:v5,toString:13.37,valueOf:13.37,__proto__:v5,c:v3};
const v11 = [1337,1337,1337,1337];
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        for (let v23 = 0; v23 < 10; v23++) {
        }
        let v25 = 0;
        const v26 = v25 + 1;
        const v27 = v25 + 1;
        let v30 = 0;
        const v31 = Boolean();
        const v32 = v30 + 1;
        let v35 = 0;
        v19.__proto__ = v11;
        const v36 = v35 + 1;
        const v37 = 10 > v19;
        let v38 = 13.37;
        const v39 = 1337 - 4;
    } catch(v40) {
        const v45 = [-2331916614,-2331916614,-2331916614];
        const v46 = [3664180981,3664180981,"string","string"];
        const v47 = {valueOf:v46,length:v45,toString:parseFloat,constructor:"string",c:parseFloat};
    }
}
const v48 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v50 = new Proxy(v14,v48);
v50[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

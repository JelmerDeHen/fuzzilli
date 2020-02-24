function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [v5,v5,v3];
const v7 = {e:1337,c:v3,valueOf:v3};
const v8 = {c:v5,valueOf:-4294967295,length:v3,__proto__:v3};
let v9 = isFinite;
const v11 = [13.37];
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        const v20 = {};
        let v21 = v20;
        let v26 = 0;
        const v27 = v26 + 1;
        let v29 = 0;
        for (let v33 = 0; v33 < 100; v33++) {
            const v34 = v15(13.37,v21,-4294967295);
        }
        const v35 = v29 + 1;
        const v37 = [2153514987,13.37,13.37,13.37,v11];
        const v39 = [v21,v37,v37];
        const v40 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v37,__proto__:v39};
        const v41 = {a:1337,toString:v20,constructor:"NEGATIVE_INFINITY",valueOf:v40,b:13.37,c:JSON,e:JSON};
    } catch(v42) {
    }
}
const v43 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v45 = new Proxy(v14,v43);
v45[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

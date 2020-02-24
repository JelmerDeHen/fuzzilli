function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [1337,"U8Sf0oI+2+"];
const v7 = {b:1337,valueOf:v3,length:v6};
const v8 = {e:1337,a:"U8Sf0oI+2+",__proto__:v3,d:Reflect,valueOf:13.37,b:v7};
let v9 = 1337;
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14) {
    const v18 = [1337,1337,"MIN_VALUE",1337,1337];
    function v19(v20,v21,v22,v23) {
        'use strict'
        try {
            let v26 = 0;
            while (v26 < 4) {
                const v27 = v26 + 1;
                v26 = v27;
            }
            v23[3] = v23;
        } catch(v28) {
            let v30 = eval;
            const v31 = [];
            const v32 = {a:v31};
            const v33 = {__proto__:v23,constructor:v32,length:v31};
            const v34 = v30 in v33;
        }
        return v23;
    }
    const v35 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:1337,has:v19};
    const v37 = new Proxy(v18,v35);
    v37[1] = "MIN_VALUE";
    let v38 = 1024;
    let v40 = this;
}
const v41 = v11.forEach(v12);
}
%NeverOptimizeFunction(main);
main();

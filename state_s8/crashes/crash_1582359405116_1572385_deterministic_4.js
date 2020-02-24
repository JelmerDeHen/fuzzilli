function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [v4,1337,Set,1337];
const v8 = {d:v4,e:3946635865,constructor:1337,length:3946635865};
const v9 = {c:1337,d:Set,e:3946635865,b:3946635865,valueOf:v7,length:"DxlRXuajnj"};
function v10(v11,v12) {
    let v14 = -128;
    const v15 = v14 + 1;
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
            let v28 = v8;
            const v29 = v23();
        } catch(v30) {
            const v31 = [];
            const v32 = {a:v31};
            const v33 = {__proto__:v23,constructor:v32,length:v31};
        }
        return v23;
    }
    const v34 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:1337,has:v19};
    const v36 = new Proxy(v18,v34);
    v36[1] = "MIN_VALUE";
}
const v37 = v10();
const v38 = v10();
}
%NeverOptimizeFunction(main);
main();

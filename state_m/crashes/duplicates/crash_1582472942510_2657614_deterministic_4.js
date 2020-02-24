function main() {
const v1 = [13.37,13.37,13.37,13.37];
function v2(v3,v4) {
    const v5 = [];
    let v6 = v5;
    const v10 = [1337,1337,"MIN_VALUE",1337,1337];
    function v11(v12,v13,v14,v15) {
        'use strict'
        try {
            let v18 = 0;
            while (v18 <= 4) {
                const v19 = v18 + 1;
                v18 = v19;
            }
            v15[3] = 0;
        } catch(v20) {
            const v21 = [];
            const v22 = {a:v21};
            const v23 = {__proto__:v15,constructor:v22,length:v21};
        }
        return v15;
    }
    const v24 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:1337,has:v11};
    const v26 = new Proxy(v10,v24);
    v26[1] = "MIN_VALUE";
    let v27 = 13.37;
}
const v28 = v1.sort(v2);
}
%NeverOptimizeFunction(main);
main();

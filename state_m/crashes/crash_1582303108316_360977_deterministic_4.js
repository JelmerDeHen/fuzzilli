function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [];
const v6 = {d:v4,valueOf:1337,constructor:13.37};
const v7 = {a:v6,b:1337};
const v10 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        const v18 = "gM8oAednYn" - 1;
        for (let v22 = 0; v22 < 100; v22++) {
            const v23 = v11();
        }
        const v24 = v14 <= "object";
        let v25 = 1;
        if (v13) {
            const v26 = v15();
        } else {
            const v27 = v15.defineProperty(v15,v18,1,v24);
            v25 = 64;
        }
        v25 = "gM8oAednYn";
        const v29 = [1.7976931348623157e+308];
        let v30 = 1;
        const v31 = [1.7976931348623157e+308,v18,v15];
        const v32 = {e:1337,length:v25,a:v4};
        const v34 = [-140693494,-140693494,-140693494];
    } catch(v35) {
    }
}
const v36 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
const v38 = new Proxy(v10,v36);
v38[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
let v2 = 1337;
const v6 = [];
const v7 = {length:"constructor",e:1337,c:v6,a:1337,toString:"symbol"};
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        const v14 = {};
        let v15 = v14;
        for (let v20 = 0; v20 < 100; v20++) {
            const v21 = v9(v6,2153514987);
        }
        const v22 = v13[9007199254740991];
        const v23 = [v2];
        let v24 = v13;
        try {
            const v25 = Function();
        } catch(v26) {
            const v27 = v14 < v26;
        }
        const v28 = 2153514987 + 1;
        const v30 = [13.37,13.37,13.37];
        let v31 = v30;
    } catch(v32) {
    }
}
const v33 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v35 = new Proxy(v7,v33);
v35[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

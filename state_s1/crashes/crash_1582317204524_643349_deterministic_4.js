function main() {
const v1 = [-762660.3396510865];
const v2 = {d:v1,e:v1,constructor:v1,a:-762660.3396510865};
const v3 = v2.d;
const v6 = [];
const v7 = {length:1337,e:1337,c:v6,a:1337,toString:"symbol"};
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        let v14 = v13;
        let v17 = 0;
        while (v17 < 8) {
            if (v12) {
            } else {
            }
            const v18 = v17 + 1;
            v17 = v18;
        }
        v14.__proto__ = v10;
        const v19 = v3();
        const v20 = v10[v10];
        const v22 = -Infinity;
        const v23 = [v22];
        const v25 = {constructor:-4294967295,length:1337,__proto__:v23};
        const v26 = v23.includes();
    } catch(v27) {
        let v29 = 0;
        const v30 = v29 + 1;
    }
}
const v31 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v33 = new Proxy(v7,v31);
v33[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

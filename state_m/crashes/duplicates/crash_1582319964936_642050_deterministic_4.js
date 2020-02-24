function main() {
const v3 = [13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {constructor:v6,valueOf:Symbol,c:Symbol,length:v5,d:"iterator",a:Symbol,e:v3};
const v10 = [1337,1337,1337,1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        const v17 = {};
        let v18 = v17;
        let v19 = v7;
        for (const v20 of "iterator") {
            const v22 = [13.37,13.37,13.37,13.37,13.37];
        }
        const v23 = v12();
        const v26 = [2153514987,1,13.37,13.37,v16];
    } catch(v27) {
    }
}
const v28 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:1,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v30 = new Proxy(v10,v28);
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

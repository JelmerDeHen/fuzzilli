function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337];
const v5 = {constructor:-65535,e:v4,length:13.37,b:-65535};
const v8 = [1337,1337,1337,1337,1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        let v16 = 0;
        while (v16 < 2) {
            const v17 = v16 + 1;
            v16 = v17;
        }
        for (let v21 = 0; v21 < 6; v21++) {
            const v22 = v9();
        }
    } catch(v23) {
        const v24 = v5 % v5;
    }
}
const v25 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v27 = new Proxy(v8,v25);
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

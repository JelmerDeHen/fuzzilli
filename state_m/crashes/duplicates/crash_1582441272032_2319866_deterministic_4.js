function main() {
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    let v11 = 0;
    while (v11 < 9) {
        const v12 = v11 + 1;
        v11 = v12;
    }
    for (const v13 of "huW1DSBka9") {
        const v14 = v4();
    }
}
const v15 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v17 = new Proxy(v3,v15);
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

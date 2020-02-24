function main() {
const v3 = [13.37,13.37,2210168180,13.37];
const v5 = [1337,"U8Sf0oI+2+"];
const v6 = {b:1337,valueOf:v3,length:v5};
const v9 = [13.37,1337,"MIN_VALUE",1337,1337];
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        let v16 = 0;
        const v17 = v16 + 1;
        for (let v21 = 0; v21 < 3; v21++) {
        }
        const v22 = v10();
    } catch(v23) {
        let v25 = "unscopable";
        const v26 = v6 <= v25;
    }
}
const v27 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:1337,has:v10};
const v29 = new Proxy(v9,v27);
v29[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

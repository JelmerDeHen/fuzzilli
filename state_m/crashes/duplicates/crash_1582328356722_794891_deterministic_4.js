function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [];
const v6 = {e:v5,c:-128,toString:13.37};
const v7 = {b:v2};
let v8 = 13.37;
const v11 = [13.37];
const v13 = [1337,1337];
const v14 = [-4294967295,13.37,v11];
let v15 = v13;
const v18 = [];
const v19 = {length:1337,e:1337,c:v18,a:1337,toString:"symbol"};
function v21(v22,v23,v24,v25) {
    'use strict'
    try {
        for (let v30 = 0; v30 < 100; v30++) {
            const v31 = v21();
        }
        const v33 = Symbol.replace;
        const v34 = "name"[v33];
        const v35 = v4[1741742138];
        const v36 = v14.concat(1337,v15,v14,"name");
        const v37 = v35();
        let v38 = v35;
    } catch(v39) {
    }
}
const v40 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v42 = new Proxy(v19,v40);
v42[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

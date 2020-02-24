function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {valueOf:v3,b:"symbol",c:v3};
const v8 = {valueOf:13.37,a:13.37,e:1628329797,d:1337,toString:v7};
const v10 = [1337,1337,1337,1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        const v17 = [1337,1337];
        for (let v21 = 0; v21 < 100; v21++) {
            const v22 = v11();
        }
        const v24 = ArrayBuffer();
        const v26 = v10[v14];
        const v27 = v11();
        const v28 = v26();
        const v30 = {set:v27};
        const v32 = Object.defineProperty(v7,-2416545013);
        const v33 = v14 || v15;
        const v34 = v24.slice(1024);
        let v35 = v15;
        v30.__proto__ = v11;
    } catch(v36) {
    }
}
const v37 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
const v39 = new Proxy(v10,v37);
const v41 = v11(v39,1,v39);
}
%NeverOptimizeFunction(main);
main();

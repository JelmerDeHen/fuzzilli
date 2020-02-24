function main() {
let v5 = 0;
while (v5 < 4) {
    function v6(v7,v8,v9,v10,v11) {
    }
    const v12 = v5 + 1;
    v5 = v12;
}
const v14 = [1337];
const v15 = [v14,Float32Array];
const v16 = {toString:-2420271507,e:1337,constructor:v14,b:"string",c:"string"};
const v19 = [];
const v20 = {length:1337,e:1337,c:v19,a:1337,toString:"symbol"};
function v22(v23,v24,v25,v26) {
    'use strict'
    try {
        let v27 = v26;
        const v29 = -Infinity;
        const v30 = [v29];
        for (let v34 = 0; v34 < 100; v34++) {
            const v35 = v22(v27,1337,v30);
        }
        const v36 = ~0;
        const v38 = {constructor:-4294967295,length:1337,__proto__:v30};
        const v39 = v30.includes();
        const v40 = v38.toLocaleString();
        let v42 = 0;
    } catch(v43) {
    }
}
const v44 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
const v46 = new Proxy(v20,v44);
v46[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

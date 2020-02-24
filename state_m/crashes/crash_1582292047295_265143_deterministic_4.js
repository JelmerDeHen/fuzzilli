function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = [v4,"MIN_VALUE",1337,parseInt];
const v8 = {valueOf:v7,e:13.37,toString:"MIN_VALUE",constructor:1337};
const v9 = {__proto__:v4,constructor:parseInt,length:v6,toString:"MIN_VALUE",a:-3107474588,d:1337,e:"MIN_VALUE"};
let v10 = v6;
const v14 = [parseInt,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    const v20 = parseInt || v18;
    try {
        const v21 = {};
        const v23 = [1337,1337];
        let v25 = 0;
        const v26 = "MIN_VALUE"[6];
        const v27 = parseInt === -3107474588;
        for (let v31 = 0; v31 < 100; v31++) {
            const v32 = v15();
        }
        const v33 = (1337)[v26];
        const v34 = !v18;
        let v35 = parseInt;
        for (let v39 = 0; v39 < 3; v39++) {
            const v40 = {};
        }
    } catch(v41) {
    }
}
const v42 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,d:v15};
let v43 = v14;
const v45 = new Proxy(v14,v42);
for (const v46 of v43) {
}
v45[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

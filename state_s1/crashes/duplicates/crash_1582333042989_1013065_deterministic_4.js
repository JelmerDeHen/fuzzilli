function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [13.37,13.37,v2,1337];
const v6 = {e:-1501539808};
const v7 = {e:v6,length:v6,valueOf:13.37,d:v2,__proto__:v5,constructor:v4};
let v8 = v6;
const v11 = [13.37];
const v13 = [-3132770439,1337,1337];
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        const v22 = {};
        let v23 = v22;
        for (let v28 = 0; v28 < 100; v28++) {
            const v29 = v17();
        }
        const v30 = {constructor:-1501539808,toString:1337,e:v13,length:v21,valueOf:v21};
        const v31 = v18.getOwnPropertySymbols();
        const v34 = [1337,1337,1337,1337];
        const v35 = {valueOf:v34,length:v2};
        const v37 = [1337,1337,1337,1337,1337];
        function v38(v39,v40,v41,v42) {
            'use strict'
        }
        const v43 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
        const v45 = Proxy();
        const v46 = [2153514987,13.37,13.37,13.37,v21];
    } catch(v47) {
    }
}
const v48 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v50 = new Proxy(v16,v48);
v50[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

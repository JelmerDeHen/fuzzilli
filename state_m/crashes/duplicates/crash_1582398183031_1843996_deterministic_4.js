function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [];
const v8 = {constructor:1337,e:13.37,a:Promise,toString:v4};
const v9 = {a:2147483648,b:v7,e:v4,constructor:2147483648,c:"boolean"};
let v10 = 2147483648;
let v13 = 0;
const v15 = [13.37,13.37];
const v16 = v13 + 1;
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
}
const v23 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,constructor:1337,has:v18};
const v25 = new Proxy(v17,v23);
for (const v27 in "boolean") {
    let v29 = 0;
    const v31 = [1337,v6,1337,1337];
    const v34 = [1337,1337,1337,1337,1337];
    function v35(v36,v37,v38,v39) {
        'use strict'
    }
    const v40 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v31,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
    const v42 = new Proxy(v34,v40);
    const v43 = v29 + 1;
    const v44 = "MIN_VALUE"[1337];
    let v45 = 1337;
    const v48 = [1337,1337,"MIN_VALUE",1337,1337];
    function v49(v50,v51,v52,v53) {
        'use strict'
        try {
            let v55 = 0;
            v53[3] = 0;
        } catch(v56) {
            const v57 = [];
            const v58 = {a:v57};
            const v59 = {__proto__:v53,constructor:v58,length:v57};
        }
        return v53;
    }
    const v60 = {deleteProperty:v49,set:v49,getPrototypeOf:v49,call:v49,preventExtensions:v49,isExtensible:v49,construct:v49,get:v49,ownKeys:v49,setPrototypeOf:1337,has:v49};
    const v62 = new Proxy(v48,v60);
    v62[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

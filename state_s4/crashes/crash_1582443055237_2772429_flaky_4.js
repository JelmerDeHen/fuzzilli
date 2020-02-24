function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [];
const v8 = {};
const v9 = {__proto__:v8,constructor:105843101,d:Math,b:v4,c:v4};
let v10 = 13.37;
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        const v19 = v18[4294967296];
    } catch(v20) {
    }
    const v23 = arguments + 1;
    const v25 = [1337,1337,"MIN_VALUE",1337,1337];
    function v26(v27,v28,v29,v30) {
        'use strict'
        try {
            let v33 = 0;
            while (v33 <= 4) {
                const v34 = v33 + 1;
                v33 = v34;
            }
            v30[3] = 0;
        } catch(v35) {
            let v36 = v23;
            const v37 = [];
            const v38 = {a:v37};
            const v39 = {__proto__:v30,constructor:v38,length:v37};
            const v40 = v36 in v39;
        }
        return v30;
    }
    const v41 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:1337,has:v26};
    const v43 = new Proxy(v25,v41);
    v43[1] = "MIN_VALUE";
}
const v44 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:8,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v46 = new Proxy(v13,v44);
function v47(v48,v49,v50,v51) {
    'use strict'
}
let v52 = v46;
let v57 = 1;
while (v57 < 1337) {
    const v58 = v57 + 1;
    v57 = v58;
}
const v59 = new Proxy(v52,Object);
const v61 = Symbol.species;
v59[v61] = v47;
}
%NeverOptimizeFunction(main);
main();

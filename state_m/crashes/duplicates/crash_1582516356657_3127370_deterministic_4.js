function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [13.37,1337,"object"];
const v7 = {a:1337,e:v5};
const v8 = {toString:13.37,length:v7,valueOf:v3,b:v3,constructor:-2161677345};
let v9 = 13.37;
const v12 = arguments + 1;
const v14 = [1337,1337,"MIN_VALUE",1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        let v22 = 0;
        while (v22 <= 4) {
            const v23 = v22 + 1;
            const v26 = arguments + 1;
            const v28 = [1337,1337,"MIN_VALUE",1337,1337];
            function v29(v30,v31,v32,v33) {
                'use strict'
                try {
                    let v35 = 0;
                    v33[3] = 0;
                } catch(v36) {
                    let v37 = v26;
                    const v38 = [];
                    const v39 = {a:v38};
                    const v40 = {__proto__:v33,constructor:v39,length:v38};
                    const v41 = v37 in v40;
                }
                return v33;
            }
            const v42 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:1337,has:v29};
            const v44 = new Proxy(v28,v42);
            v44[1] = "MIN_VALUE";
        }
    } catch(v45) {
        let v46 = v12;
        const v47 = [];
        const v48 = {a:v47};
        const v49 = {__proto__:v19,constructor:v48,length:v47};
        const v50 = v46 in v49;
    }
    const v55 = [1337];
    const v56 = {__proto__:v55,a:v55,constructor:Number,e:13.37,length:"number",b:13.37};
    const v57 = 13.37 && v56;
    let v59 = v57;
    const v60 = JSON.stringify();
}
const v61 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:1337,has:v15};
const v63 = new Proxy(v14,v61);
v63[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

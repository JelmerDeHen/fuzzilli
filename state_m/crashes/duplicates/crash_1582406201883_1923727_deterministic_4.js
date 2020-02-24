function main() {
const v4 = Object.preventExtensions(Object);
const v5 = v4.isFrozen();
const v6 = [13.37];
const v8 = [1337,1337];
const v9 = [v8];
const v10 = {length:v9,c:v8,valueOf:NaN,d:NaN};
const v11 = {toString:NaN,a:v6,length:v8};
let v12 = 13.37;
function v13(v14,v15,v16,v17) {
    'use strict'
}
let v18 = v13;
const v22 = [13.37,"DPtrqeeOKz"];
function v23(v24,v25) {
    let v27 = 0;
    const v28 = v27 + 1;
    const v31 = [13.37,13.37,13.37,13.37,13.37];
    const v32 = new Set();
    const v33 = v32.entries();
    let v35 = 0;
    for (const v36 of v33) {
    }
    const v37 = v35 + 1;
    let v39 = 0;
    const v40 = v39 + 1;
    const v43 = arguments + 1;
    const v45 = [1337,1337,"MIN_VALUE",1337,1337];
    function v46(v47,v48,v49,v50) {
        'use strict'
        try {
            let v53 = 0;
            while (v53 <= 4) {
                const v54 = v53 + 1;
                v53 = v54;
            }
            v50[3] = 0;
        } catch(v55) {
            let v56 = v43;
            const v57 = [];
            const v58 = {a:v57};
            const v59 = {__proto__:v50,constructor:v58,length:v57};
        }
        return v50;
    }
    const v60 = {deleteProperty:v46,set:v46,getPrototypeOf:v46,call:v46,preventExtensions:v46,isExtensible:v46,construct:v46,get:v46,ownKeys:v46,setPrototypeOf:1337,has:v46};
    const v62 = new Proxy(v45,v60);
    v62[1] = "MIN_VALUE";
    return v23;
}
const v63 = v23();
for (let v67 = 0; v67 < 100; v67++) {
    const v68 = v63(1337,v22);
}
}
%NeverOptimizeFunction(main);
main();

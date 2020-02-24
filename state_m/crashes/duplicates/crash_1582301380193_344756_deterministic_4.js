function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = [];
const v7 = {b:13.37,__proto__:v3,c:v5};
const v8 = {toString:v5,valueOf:v5,a:13.37,e:8,b:eval};
let v9 = 1337;
let v11 = 0;
const v14 = [13.37];
function v15(v16,v17,v18,v19) {
    'use strict'
    const v21 = [13.37,13.37,13.37];
    let v24 = 255;
    while (v24 < 1337) {
        const v25 = v24 + 1;
        v24 = v25;
    }
    for (const v27 in "object") {
        const v30 = [1337,1337,1337,1337,1337];
        function v31(v32,v33,v34,v35) {
            'use strict'
            try {
                v35[3] = v35;
            } catch(v36) {
                const v42 = Math.hypot(-1970853828,13.37,"boolean",DataView);
                const v46 = [v31];
                const v48 = [255,255,255];
                const v49 = {a:255,toString:arguments,c:v46,__proto__:v48,valueOf:DataView,constructor:"gM8oAednYn"};
            }
            return v30;
        }
        const v50 = {deleteProperty:v31,set:v31,getPrototypeOf:v31,call:v31,preventExtensions:v31,isExtensible:v31,construct:v31,get:v31,ownKeys:v31,setPrototypeOf:v31,has:v31};
        const v52 = new Proxy(v30,v50);
        v52[1] = "MIN_VALUE";
    }
}
const v53 = v15(v11,3,13.37);
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [];
const v6 = {valueOf:v2};
const v7 = {constructor:v6,length:v2,__proto__:1337,d:"slowAe05ui"};
let v8 = v4;
const v10 = [1337];
let v11 = v10;
let v13 = undefined;
for (const v15 in "boolean") {
    let v17 = 0;
    const v18 = v17 + 1;
    const v21 = [1337,1337,1337,1337,1337];
    function v22(v23,v24,v25,v26) {
        'use strict'
        const v30 = arguments + 1;
        const v32 = [1337,1337,"MIN_VALUE",1337,1337];
        function v33(v34,v35,v36,v37) {
            'use strict'
            try {
                let v39 = 0;
                v37[3] = 0;
            } catch(v40) {
                let v41 = v30;
                const v42 = [];
                const v43 = {a:v42};
                const v44 = {__proto__:v37,constructor:v43,length:v42};
                const v45 = v41 in v44;
            }
            return v37;
        }
        const v46 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:1337,has:v33};
        const v48 = new Proxy(v32,v46);
        v48[1] = "MIN_VALUE";
        const v49 = [-2331916614,-2331916614,-2331916614];
    }
    const v50 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
    const v52 = new Proxy(v21,v50);
    v52[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

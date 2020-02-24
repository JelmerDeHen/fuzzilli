function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [1337,13.37];
const v8 = {c:v6,toString:Symbol,b:"string"};
const v9 = {toString:5,valueOf:1337,c:v4};
let v10 = v7;
const v12 = [1337];
let v13 = v12;
let v15 = undefined;
for (const v17 in "boolean") {
    let v19 = 0;
    const v20 = v19 + 1;
    const v23 = [1337,1337,1337,1337,1337];
    function v24(v25,v26,v27,v28) {
        'use strict'
        const v30 = [-2331916614,-2331916614,-2331916614];
        const v33 = arguments + 1;
        const v35 = [1337,1337,"MIN_VALUE",1337,1337];
        function v36(v37,v38,v39,v40) {
            'use strict'
            try {
                let v42 = 0;
                v40[3] = 0;
            } catch(v43) {
                let v44 = v33;
                const v45 = [];
                const v46 = {a:v45};
                const v47 = {__proto__:v40,constructor:v46,length:v45};
                const v48 = v44 in v47;
            }
            return v40;
        }
        const v49 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:1337,has:v36};
        const v51 = new Proxy(v35,v49);
        v51[1] = "MIN_VALUE";
    }
    const v52 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
    const v54 = new Proxy(v23,v52);
    v54[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

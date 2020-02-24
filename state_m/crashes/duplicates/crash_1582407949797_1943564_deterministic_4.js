function main() {
const v2 = [1337,1337];
const v5 = new ArrayBuffer();
const v6 = v5.slice();
let v8 = undefined;
const v9 = new DataView(v6);
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337];
const v15 = [v14,13.37,-4294967295];
const v16 = {b:v14};
const v17 = {a:"matchAll",valueOf:v14};
const v20 = [1337,1337,1337,1337,1337];
function v21(v22,v23,v24,v25) {
    'use strict'
    for (const v27 in "prototype") {
        const v29 = [v22,1337];
        const v30 = v29.shift();
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
        const v52 = (1337).constructor;
    }
}
const v53 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,c:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v55 = new Proxy(v20,v53);
v55[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

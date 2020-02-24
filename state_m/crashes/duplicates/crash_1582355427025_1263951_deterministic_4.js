function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [v3,this,this,v3];
const v7 = {e:v5,toString:v5,c:13.37};
const v8 = {};
let v9 = 1176018139;
for (const v11 in "object") {
    const v14 = [1337,1337,1337,1337,1337];
    function v15(v16,v17,v18,v19) {
        'use strict'
        try {
            v19[3] = v19;
        } catch(v20) {
            let v22 = 0;
            const v23 = v22 + 1;
            const v26 = 2.2250738585072014e-308 / 3890419937;
            const v27 = [v26];
            let v28 = v27;
            const v30 = Math.acosh(v28);
        }
        return v14;
    }
    const v31 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
    const v33 = new Proxy(v14,v31);
    try {
        const v36 = [];
        const v37 = {length:1337,e:1337,c:v36,a:1337,toString:"symbol"};
        const v40 = [13.37];
        const v42 = [1337,1337];
        const v43 = [-4294967295,13.37,v40];
        const v46 = [];
        const v47 = {length:1337,e:1337,c:v46,a:1337,toString:"symbol"};
        function v48(v49,v50,v51,v52) {
            'use strict'
        }
        const v53 = {deleteProperty:v48,set:v48,getPrototypeOf:v48,call:v48,preventExtensions:v48,isExtensible:v48,construct:v48,get:v48,ownKeys:v48,setPrototypeOf:v48,has:v48};
        const v55 = Proxy();
        function v56(v57,v58,v59,v60) {
            'use strict'
        }
    } catch(v61) {
    }
    v33[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

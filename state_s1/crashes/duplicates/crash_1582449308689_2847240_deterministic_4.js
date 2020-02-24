function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [2987203353,2987203353];
const v8 = {length:v7,toString:1337,c:13.37};
const v9 = {a:"boolean",c:2987203353,e:Uint16Array,b:Uint16Array};
let v10 = Uint16Array;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        v23[3] = v23;
    } catch(v24) {
        const v29 = [-2331916614,-2331916614,-2331916614];
        const v30 = [3664180981,3664180981,"string","string"];
        const v31 = {valueOf:v30,length:v29,toString:parseFloat,constructor:"string",c:parseFloat};
        function v32(v33,v34) {
            const v38 = [1337,1337,1337,1337,1337];
            function v39(v40,v41,v42,v43) {
                'use strict'
                try {
                    const v44 = new Float64Array(v42);
                    function v46(v47,v48,v49,v50,v51) {
                        'use strict'
                        return v40;
                    }
                    const v52 = v46.toLocaleString();
                    const v54 = Object.defineProperty(this,1337,v43);
                } catch(v55) {
                    try {
                        const v56 = v40[3];
                    } catch(v57) {
                        v55.valueOf = v55;
                    }
                }
                return v39;
            }
            const v58 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v60 = new Proxy(v38,v58);
            v60[1] = "MIN_VALUE";
        }
        const v61 = v32();
    }
}
const v62 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v64 = new Proxy(v18,v62);
v64[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

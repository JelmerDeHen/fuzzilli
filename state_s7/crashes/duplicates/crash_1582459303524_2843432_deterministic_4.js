function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337];
const v6 = [v5,"9WKx4rZjkq"];
const v7 = {toString:13.37,c:Number,length:v6,e:Number,valueOf:Number,constructor:13.37,a:v3};
const v8 = {toString:"9WKx4rZjkq",b:Number,constructor:Number,length:v7,c:Number};
let v9 = v8;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    const v27 = [-2331916614,-2331916614,-2331916614];
    const v28 = [3664180981,3664180981,"string","string"];
    const v29 = {valueOf:v28,length:v27,toString:parseFloat,constructor:"string",c:parseFloat};
    function v30(v31,v32) {
        const v36 = [1337,1337,1337,1337,1337];
        function v37(v38,v39,v40,v41) {
            'use strict'
            try {
                const v42 = new Float64Array(v40);
                function v44(v45,v46,v47,v48,v49) {
                    'use strict'
                }
                const v50 = v44.toLocaleString();
                const v52 = [];
                const v53 = {a:v52};
                const v54 = {__proto__:eval,constructor:v53,length:v52};
                const v55 = v54.__proto__();
                const v57 = Object.defineProperty(this,1337,v41);
                const v58 = {setPrototypeOf:v39,apply:v55,ownKeys:v31,call:v44};
            } catch(v59) {
                try {
                    const v60 = v38[3];
                } catch(v61) {
                    v59.valueOf = v59;
                }
            }
            return v37;
        }
        const v62 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
        const v64 = new Proxy(v36,v62);
        v64[1] = "MIN_VALUE";
    }
    const v65 = v30();
}
const v66 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v68 = new Proxy(v17,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

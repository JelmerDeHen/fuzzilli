function main() {
const v2 = new Int32Array();
const v4 = [13.37];
const v7 = Symbol.species;
const v8 = v7[v7];
const v9 = [1337,1337,1337];
const v10 = [v4,13.37,v4];
const v11 = {constructor:v10,c:13.37,d:1337,valueOf:"Q/lNni563J",e:"Q/lNni563J",__proto__:"Q/lNni563J"};
const v12 = {toString:1337,length:"Q/lNni563J",constructor:v11,d:13.37,e:v9,__proto__:v4};
let v13 = v4;
const v15 = [13.37,13.37,13.37,13.37];
const v17 = [1337,1337,1337,1337];
const v18 = [];
const v19 = {b:1337,c:v15,d:13.37,a:v17,length:v18,valueOf:1337};
const v26 = [1337];
const v27 = {__proto__:v26,a:v26,constructor:Number,e:13.37,length:"number",b:13.37};
const v28 = 13.37 && v27;
let v30 = 127;
const v32 = String.fromCharCode();
const v34 = [1337,1337,1337,1337,1337];
function v35(v36,v37,v38,v39) {
    'use strict'
    try {
        v39[3] = v39;
    } catch(v40) {
        const v45 = [-2331916614,-2331916614,-2331916614];
        const v46 = [3664180981,3664180981,"string","string"];
        const v47 = {valueOf:v46,length:v45,toString:parseFloat,constructor:"string",c:parseFloat};
        function v48(v49,v50) {
            const v54 = [1337,1337,1337,1337,1337];
            function v55(v56,v57,v58,v59) {
                'use strict'
                try {
                    const v60 = new Float64Array(v58);
                    function v62(v63,v64,v65,v66,v67) {
                        'use strict'
                    }
                    const v68 = v62.toLocaleString();
                    const v70 = [];
                    const v71 = {a:v70};
                    const v72 = {__proto__:eval,constructor:v71,length:v70};
                    const v73 = v72.__proto__(v68);
                    const v75 = Object.defineProperty(this,1337,v59);
                } catch(v76) {
                    try {
                        const v77 = v56[3];
                    } catch(v78) {
                        v76.valueOf = v76;
                    }
                }
                return v55;
            }
            const v79 = {deleteProperty:v55,set:v55,getPrototypeOf:v55,call:v55,preventExtensions:v55,isExtensible:v55,construct:v55,get:v55,ownKeys:v55,setPrototypeOf:v55,has:v55};
            const v81 = new Proxy(v54,v79);
            v81[1] = "MIN_VALUE";
        }
        const v82 = v48();
    }
}
const v83 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
const v85 = new Proxy(v34,v83);
v85[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

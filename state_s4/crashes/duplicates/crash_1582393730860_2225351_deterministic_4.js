function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [v4,13.37];
const v6 = {a:v2,__proto__:WeakMap,toString:v4,e:v4,length:13.37};
const v7 = {};
let v8 = v5;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        const v27 = [-2331916614,-2331916614,-2331916614];
        const v28 = [3664180981,3664180981,"string","string"];
        function v29(v30,v31) {
            const v35 = [1337,1337,1337,1337,1337];
            function v36(v37,v38,v39,v40) {
                'use strict'
                try {
                    const v41 = new Float64Array(v39);
                    function v44(v45,v46,v47,v48,v49) {
                        'use strict'
                    }
                    const v50 = v44.toLocaleString();
                    const v52 = [];
                    const v53 = {a:v52};
                    const v54 = {__proto__:eval,constructor:v53,length:v52};
                    let v57 = 0;
                    const v58 = v54.__proto__(v50,v57,19873,Symbol);
                    const v60 = Object.defineProperty(this,1337,v40);
                } catch(v61) {
                    try {
                        const v62 = v37[3];
                    } catch(v63) {
                        v61.valueOf = v61;
                    }
                }
                return v36;
            }
            const v64 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
            const v66 = new Proxy(v35,v64);
            v66[1] = "MIN_VALUE";
        }
        const v67 = v29();
    }
}
const v68 = [v5,...v12,13.37,...v5];
const v69 = v18();
}
%NeverOptimizeFunction(main);
main();

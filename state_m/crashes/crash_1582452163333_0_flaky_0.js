function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337];
const v5 = [v2];
const v6 = {c:3172427856};
const v7 = {};
let v8 = 3172427856;
const v12 = 2.2250738585072014e-308 / 1024;
const v13 = [v8];
let v14 = v13;
const v15 = new Uint32Array();
const v17 = [13.37,13.37,13.37,13.37];
const v19 = [1337,1337,1337,1337];
const v20 = [];
const v21 = {b:1337,c:v17,d:13.37,a:v19,length:v20,valueOf:1337};
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        v27[3] = v27;
    } catch(v28) {
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
            const v64 = {deleteProperty:v35,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
            const v66 = new Proxy(v35,v64);
            v66[1] = "MIN_VALUE";
        }
        const v67 = v29();
    }
}
const v68 = v23(v8,v6,v12);
}
%NeverOptimizeFunction(main);
main();

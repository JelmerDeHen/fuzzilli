function main() {
const v3 = [1337,1337];
const v4 = [v3,1337];
const v5 = {length:13.37};
const v6 = {b:v4,c:this,toString:v5,length:v4};
let v7 = v6;
const v9 = [13.37,13.37,13.37,13.37];
const v11 = [1337,1337,1337,1337];
const v12 = [];
const v13 = {b:1337,c:v9,d:13.37,a:v11,length:v12,valueOf:1337};
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        v19[3] = v19;
    } catch(v20) {
        const v25 = [-2331916614,-2331916614,-2331916614];
        const v26 = [3664180981,3664180981,"string","string"];
        const v27 = {valueOf:v26,length:v25,toString:parseFloat,constructor:"string",c:parseFloat};
        function v28(v29,v30) {
            const v34 = [1337,1337,1337,1337,1337];
            function v35(v36,v37,v38,v39) {
                'use strict'
                try {
                    const v40 = new Float64Array(v38);
                    function v43(v44,v45,v46,v47,v48) {
                        'use strict'
                    }
                    const v49 = v43.toLocaleString();
                    const v51 = [];
                    const v52 = {a:v51};
                    const v53 = {__proto__:eval,constructor:v52,length:v51};
                    let v56 = 0;
                    const v57 = v53.__proto__(v49,v56,19873,Symbol);
                    const v59 = Object.defineProperty(this,1337,v39);
                } catch(v60) {
                    try {
                        const v61 = v36[3];
                    } catch(v62) {
                        v60.valueOf = v60;
                    }
                }
                return v35;
            }
            const v63 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
            const v65 = new Proxy(v34,v63);
            v65[1] = "MIN_VALUE";
        }
        const v66 = v28(v27);
    }
}
const v67 = {b:v3,constructor:Float64Array,a:v5,...1337,...v5,...1337,...v13};
const v68 = v15(v67,v7,1337);
}
%NeverOptimizeFunction(main);
main();
function main() {
const v3 = [13.37,13.37,13.37,16];
const v5 = [1337];
const v6 = [];
const v7 = {__proto__:v6,e:1337};
const v8 = {constructor:v5,toString:v7,e:"symbol",c:13.37};
let v9 = 16;
const v12 = Symbol.toStringTag;
const v13 = [13.37,13.37,13.37,13.37,13.37];
const v16 = [v13,null,v13,1337];
const v18 = v16 < Int32Array;
let v19 = v6;
const v20 = Symbol();
const v21 = typeof v19;
const v23 = v21 === "function";
const v24 = v19 + 1;
for (let v28 = 0; v28 < 5; v28++) {
}
const v32 = [1337,1337,1337,1337,1337];
function v33(v34,v35,v36,v37) {
    'use strict'
    try {
        v37[3] = v37;
    } catch(v38) {
        const v43 = [-2331916614,-2331916614,-2331916614];
        const v44 = [3664180981,3664180981,"string","string"];
        const v45 = {valueOf:v44,length:v43,toString:parseFloat,constructor:"string",c:parseFloat};
        function v46(v47,v48) {
            const v52 = [1337,1337,1337,1337,1337];
            function v53(v54,v55,v56,v57) {
                'use strict'
                try {
                    const v58 = new Float64Array(v56);
                    function v61(v62,v63,v64,v65,v66) {
                        'use strict'
                    }
                    const v67 = v61.toLocaleString();
                    const v69 = [];
                    const v70 = {a:v69};
                    const v71 = {__proto__:eval,constructor:v70,length:v69};
                    let v74 = 0;
                    const v75 = v71.__proto__(v67,v74,19873,Symbol);
                    const v77 = Object.defineProperty(this,1337,v57);
                } catch(v78) {
                    try {
                        const v79 = v54[3];
                    } catch(v80) {
                        v78.valueOf = v78;
                    }
                }
                return v53;
            }
            const v81 = {deleteProperty:v53,set:v53,getPrototypeOf:v53,call:v53,preventExtensions:v53,isExtensible:v53,construct:v53,get:v53,ownKeys:v53,setPrototypeOf:v53,has:v53};
            const v83 = new Proxy(v52,v81);
            v83[1] = "MIN_VALUE";
        }
        const v84 = v46();
    }
}
const v85 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
const v87 = new Proxy(v32,v85);
v87[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [Number,Number];
const v7 = {valueOf:13.37,length:v3,e:1337,a:"POSITIVE_INFINITY"};
const v8 = {length:"POSITIVE_INFINITY",__proto__:v7,constructor:13.37,toString:v5,b:Number,a:Number};
let v9 = 13.37;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
const v18 = new Int16Array();
const v19 = v18.slice();
const v21 = [1337,1337,1337,1337,1337];
function v22(v23,v24,v25,v26) {
    'use strict'
}
const v27 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
const v29 = new Proxy(v21,v27);
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

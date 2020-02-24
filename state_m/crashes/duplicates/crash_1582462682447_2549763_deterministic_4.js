function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = [];
const v8 = {valueOf:13.37,e:1337,b:v4,d:v7,constructor:NaN};
const v9 = {valueOf:"number",b:512,d:NaN,toString:"number",c:"number",constructor:v8};
let v10 = 13.37;
const v12 = new Float32Array();
const v13 = v12.slice();
const v15 = [13.37,13.37,13.37,13.37];
const v17 = [1337,1337,1337,1337];
const v18 = [];
const v19 = {b:1337,c:v15,d:13.37,a:v17,length:v18,valueOf:1337};
const v23 = [9007199254740992,9007199254740992,9007199254740992,9007199254740992,9007199254740992];
function v24(v25,v26,v27,v28) {
    'use strict'
    try {
        v28[3] = v28;
    } catch(v29) {
        const v34 = [-2331916614,-2331916614,-2331916614];
        const v35 = [3664180981,3664180981,"string","string"];
        const v36 = {valueOf:v35,length:v34,toString:parseFloat,constructor:"string",c:parseFloat};
        function v37(v38,v39) {
            const v44 = [1337,1337,1337,1337,1337];
            function v45(v46,v47,v48,v49) {
                'use strict'
                try {
                    const v50 = new Float64Array(v48);
                    function v53(v54,v55,v56,v57,v58) {
                        'use strict'
                    }
                    for (let v62 = 0; v62 < 100; v62++) {
                        const v63 = Symbol();
                    }
                    const v65 = Symbol.species;
                    const v66 = "ruHq55V2**"[v65];
                    const v67 = v53.toLocaleString();
                    const v69 = [];
                    const v70 = {a:v69};
                    const v71 = {__proto__:eval,constructor:v70,length:v69};
                    let v74 = 0;
                    const v75 = v71.__proto__(v67,v74,19873,Symbol);
                    const v77 = Object.defineProperty(this,1337,v49);
                } catch(v78) {
                    const v79 = v46[3];
                }
                return v45;
            }
            const v80 = {deleteProperty:v45,set:v45,getPrototypeOf:v45,call:v45,preventExtensions:v45,isExtensible:v45,construct:v45,get:v45,ownKeys:v45,setPrototypeOf:v45,has:v45};
            const v82 = new Proxy(v44,v80);
            v82[1] = "MIN_VALUE";
        }
        const v83 = v37();
    }
}
const v84 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
const v86 = new Proxy(v23,v84);
v86[1] = "NEGATIVE_INFINITY";
}
%NeverOptimizeFunction(main);
main();

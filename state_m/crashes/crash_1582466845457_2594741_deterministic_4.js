function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337];
const v5 = [Int8Array,v2];
const v6 = {};
const v7 = {__proto__:v6,c:v2};
let v8 = Int8Array;
const v11 = [1337,1337,1337];
const v15 = [13.37,13.37,13.37,13.37];
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
}
const v23 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v25 = new Proxy(v17,v23);
const v26 = v18();
for (const v28 in "boolean") {
    function v29(v30,v31) {
        const v32 = v30 in v29;
        return v28;
    }
    const v33 = v29();
    const v35 = new Int16Array();
    const v37 = {...null};
    const v38 = {set:v25,getPrototypeOf:v18,ownKeys:v25,preventExtensions:Number,get:Number,getOwnPropertyDescriptor:v29,call:Promise,construct:Promise,deleteProperty:v33};
}
const v39 = [13.37,13.37,13.37,13.37];
const v41 = [1337,1337,1337,1337];
const v45 = [1337,1337,1337,1337,1337];
function v46(v47,v48,v49,v50) {
    'use strict'
    try {
        v50[3] = v50;
    } catch(v51) {
        const v56 = [-2331916614,-2331916614,-2331916614];
        const v57 = [3664180981,3664180981,"string","string"];
        const v58 = {valueOf:v57,length:v56,toString:parseFloat,constructor:"string",c:parseFloat};
        function v59(v60,v61) {
            const v65 = [1337,1337,1337,1337,1337];
            function v66(v67,v68,v69,v70) {
                'use strict'
                try {
                    const v71 = new Float64Array(v69);
                    function v73(v74,v75,v76,v77,v78) {
                        'use strict'
                    }
                    const v79 = v73.toLocaleString();
                    const v81 = [];
                    const v82 = {a:v81};
                    const v83 = {__proto__:eval,constructor:v82,length:v81};
                    let v85 = 0;
                    const v86 = v83.__proto__(v79);
                    const v88 = Object.defineProperty(this,1337,v70);
                } catch(v89) {
                    try {
                        const v90 = v67[3];
                    } catch(v91) {
                        v89.valueOf = v89;
                    }
                }
                return v66;
            }
            const v92 = {deleteProperty:v66,set:v66,getPrototypeOf:v66,call:v66,preventExtensions:v66,isExtensible:v66,construct:v66,get:v66,ownKeys:v66,setPrototypeOf:v66,has:v66};
            const v94 = new Proxy(v65,v92);
            v94[1] = "MIN_VALUE";
        }
        const v95 = v59();
    }
}
const v96 = {deleteProperty:v46,set:v46,getPrototypeOf:v46,call:v46,preventExtensions:v46,isExtensible:v46,construct:v46,get:v46,ownKeys:v46,setPrototypeOf:v46,has:v46};
const v98 = new Proxy(v45,v96);
v98[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

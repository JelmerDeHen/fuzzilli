function main() {
const v4 = [13.37];
const v6 = [1337,1337];
const v7 = ["toString",255,"toString","toString"];
const v8 = {a:255,__proto__:v7,length:v6,b:1337,d:Infinity};
const v9 = {e:1337,constructor:v4,toString:v7,b:v8,c:"toString"};
let v10 = 1337;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
let v20 = 0;
const v27 = [1.7976931348623157e+308];
const v29 = [255,255,255];
const v30 = {a:255,toString:Math,c:v27,__proto__:v29,valueOf:"object",constructor:"gM8oAednYn"};
const v31 = {__proto__:v27,valueOf:v30,d:255,constructor:536870912};
const v32 = RegExp.apply();
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
                    function v63(v64,v65,v66,v67,v68) {
                        'use strict'
                    }
                    const v69 = v63.toLocaleString();
                    const v71 = [];
                    const v72 = {a:v71};
                    const v73 = {__proto__:eval,constructor:v72,length:v71};
                    let v76 = 0;
                    const v77 = v73.__proto__(v69,v76,19873,Symbol);
                    const v79 = Object.defineProperty(this,1337,v59);
                } catch(v80) {
                    try {
                        const v81 = v56[3];
                    } catch(v82) {
                        v80.valueOf = v80;
                    }
                }
                return v55;
            }
            const v83 = {deleteProperty:v55,set:v55,getPrototypeOf:v55,call:v55,preventExtensions:v55,isExtensible:v55,construct:v55,get:v55,ownKeys:v55,setPrototypeOf:v55,has:v55};
            const v85 = new Proxy(v54,v83);
            v85[1] = "MIN_VALUE";
        }
        const v86 = v48();
    }
}
const v87 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
const v89 = new Proxy(v34,v87);
v89[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

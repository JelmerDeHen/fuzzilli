function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [13.37];
const v6 = {constructor:13.37,a:13.37};
const v7 = {valueOf:v2,a:v4,length:13.37,constructor:"d",d:1337};
let v8 = "d";
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        v20[3] = v20;
    } catch(v21) {
        function v22(v23,v24) {
            const v28 = [1337,1337,1337,1337,1337];
            function v29(v30,v31,v32,v33) {
                'use strict'
                try {
                    const v34 = new Float64Array(v32);
                    function v37(v38,v39,v40,v41,v42) {
                        'use strict'
                    }
                    const v43 = v37.toLocaleString();
                    const v45 = [];
                    const v46 = {a:v45};
                    const v47 = {__proto__:eval,constructor:v46,length:v45};
                    let v50 = 0;
                    const v51 = v47.__proto__(v43,v50,19873,Symbol);
                    const v53 = Object.defineProperty(this,1337,v33);
                } catch(v54) {
                    try {
                        const v55 = v30[3];
                    } catch(v56) {
                        v54.valueOf = v54;
                    }
                }
                return v29;
            }
            const v57 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:v29,has:v29};
            const v59 = new Proxy(v28,v57);
            v59[1] = "MIN_VALUE";
        }
        const v60 = v22();
    }
}
const v62 = {get:v2,valueOf:v4,c:1337,d:v14,toString:13.37,...Proxy,...v7,...v12,...v16};
const v64 = [13.37];
const v66 = [1337];
const v67 = v2.__proto__;
const v68 = v16(v6,v4,13.37);
}
%NeverOptimizeFunction(main);
main();

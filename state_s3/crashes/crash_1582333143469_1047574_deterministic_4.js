function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [Array,Array];
const v7 = {valueOf:-598541760,a:v3,length:v5,toString:v3,c:Array,constructor:v3,b:v3};
const v8 = {valueOf:Array,toString:13.37,__proto__:v3,e:v6,constructor:1337,b:1337};
let v9 = 13.37;
const v12 = [13.37,13.37,13.37,13.37];
function v13(v14,v15) {
    function v17(v18,v19) {
        for (const v21 in "boolean") {
            let v24 = -128;
            while (v24 < 5) {
                const v25 = v24 + 1;
                v24 = v25;
            }
        }
        for (const v27 in "object") {
            const v30 = [1337,1337,1337,1337,1337];
            function v31(v32,v33,v34,v35) {
                'use strict'
                try {
                    v35[3] = v35;
                } catch(v36) {
                    let v38 = 0;
                    const v39 = v38 + 1;
                    const v42 = 2.2250738585072014e-308 / 3890419937;
                    const v43 = [v42];
                    let v44 = v43;
                    const v46 = Math.acosh(v44);
                }
                return v30;
            }
            const v47 = {deleteProperty:v31,set:v31,getPrototypeOf:v31,call:v31,preventExtensions:v31,isExtensible:v31,construct:v31,get:v31,ownKeys:v31,setPrototypeOf:v31,has:v31};
            const v49 = new Proxy(v30,v47);
            v49[1] = "MIN_VALUE";
        }
        return arguments;
    }
    const v52 = gc(...arguments);
    const v54 = [1337];
    let v55 = v54;
    const v56 = v17();
    const v57 = gc(...v54);
    const v58 = arguments + 1;
    let v60 = 0;
    const v61 = v60 + 1;
}
const v62 = v12.sort(v13);
}
%NeverOptimizeFunction(main);
main();

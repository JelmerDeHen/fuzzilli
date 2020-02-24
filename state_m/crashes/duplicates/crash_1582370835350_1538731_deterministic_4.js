function main() {
const v2 = [13.37,13.37,13.37];
function v3(v4,v5) {
}
const v6 = ["undefined",v2];
const v8 = new Int16Array();
const v9 = v3(...v6,...v8);
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14) {
    function v15(v16,v17) {
        const v20 = [1337,1337,"MIN_VALUE",1337,1337];
        function v21(v22,v23,v24,v25) {
            'use strict'
            try {
                let v28 = 0;
                while (v28 < 4) {
                    const v29 = v28 + 1;
                    v28 = v29;
                }
                v25[3] = v25;
            } catch(v30) {
                const v31 = [];
                const v32 = {a:v31};
                const v33 = {__proto__:v25,constructor:v32,length:v31};
            }
            return v25;
        }
        const v34 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:1337,has:v21};
        const v36 = new Proxy(v20,v34);
        v36[1] = "MIN_VALUE";
    }
    const v37 = v15();
}
const v38 = v11.forEach(v12);
}
%NeverOptimizeFunction(main);
main();

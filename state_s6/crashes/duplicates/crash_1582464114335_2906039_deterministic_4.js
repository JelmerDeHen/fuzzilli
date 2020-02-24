function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [1337,v5];
const v7 = {d:v5,__proto__:Reflect,toString:"object",a:Reflect};
try {
    const v10 = [13.37,13.37,13.37];
    function v11(v12,v13) {
        for (const v15 in v3) {
        }
        let v16 = v5;
        try {
            for (let v20 = 0; v20 < 100; v20++) {
                const v21 = v11();
            }
        } catch(v22) {
            const v23 = v22 && "MIN_VALUE";
        }
        const v24 = v13();
        let v26 = 0;
        const v27 = v26 + 1;
        function v29(v30,v31,v32,v33) {
            'use strict'
        }
        const v34 = {deleteProperty:v29,set:v29,getPrototypeOf:1337,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:v29,has:v29};
    }
    const v35 = ["undefined",v10];
    const v37 = new Int16Array();
    const v38 = v11(...v35,...v37);
} catch(v39) {
}
}
%NeverOptimizeFunction(main);
main();

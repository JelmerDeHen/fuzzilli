function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337];
const v7 = [13.37];
const v9 = [1337,1337,1337];
const v10 = ["N*d4*m/H0F","N*d4*m/H0F",v9];
const v11 = {constructor:v9,b:-1662380622,c:v7,a:v7,__proto__:1337,constructor:v10};
const v13 = [13.37,13.37,v11,13.37];
for (const v14 of v13) {
    function v15(v16,v17) {
        let v21 = 1;
        let v22 = v21;
        const v23 = v22 % v21;
        const v24 = ~v23;
        for (let v25 = 0; v25 < 512; v25++) {
            const v28 = [1337,1337,"MIN_VALUE",1337,1337];
            function v29(v30,v31,v32,v33) {
                'use strict'
                try {
                    let v36 = 0;
                    while (v36 < 4) {
                        const v37 = v36 + 1;
                        v36 = v37;
                    }
                    v33[3] = v33;
                } catch(v38) {
                    let v40 = eval;
                    const v41 = [];
                    const v42 = {a:v41};
                    const v43 = {__proto__:v33,constructor:v42,length:v41};
                    const v44 = v40 in v43;
                }
                return v33;
            }
            const v45 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:1337,has:v29};
            const v47 = new Proxy(v28,v45);
            v47[1] = "MIN_VALUE";
        }
    }
    const v48 = v15();
}
}
%NeverOptimizeFunction(main);
main();

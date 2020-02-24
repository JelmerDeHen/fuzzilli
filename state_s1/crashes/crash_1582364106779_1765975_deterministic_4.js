function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337];
const v7 = ["buffer",v6,1337,v4];
const v8 = {__proto__:Number,constructor:"buffer",b:v7,toString:v4,e:v7,a:-664905648,length:1337,d:13.37};
const v9 = {length:Number,constructor:v7,d:-664905648,e:13.37,a:-664905648,toString:v8};
let v10 = v9;
const v12 = [5.0,5.0,5.0,5.0];
function v13(v14,v15) {
    const v17 = [13.37,13.37,13.37,13.37,13.37];
    function v18(v19,v20,v21,v22) {
        'use strict'
        try {
            const v25 = [13.37,13.37,13.37,13.37,13.37];
            const v27 = [1337,v25,13.37,6];
            const v31 = Object.freeze(this,"a");
            const v35 = arguments + 1;
            const v37 = [1337,1337,"MIN_VALUE",1337,1337];
            function v38(v39,v40,v41,v42) {
                'use strict'
                try {
                    let v45 = 0;
                    while (v45 <= 4) {
                        const v46 = v45 + 1;
                        v45 = v46;
                    }
                    v42[3] = 0;
                } catch(v47) {
                    let v48 = v35;
                    const v49 = [];
                    const v50 = {a:v49};
                    const v51 = {__proto__:v42,constructor:v50,length:v49};
                    const v52 = v48 in v51;
                }
                return v42;
            }
            const v53 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:1337,has:v38};
            const v55 = new Proxy(v37,v53);
            v55[1] = "MIN_VALUE";
            const v57 = {get:Number,set:Number};
        } catch(v58) {
        }
        return v17;
    }
    const v59 = v17.filter(v18,v17);
    let v61 = 0;
}
const v62 = v12.sort(v13);
}
%NeverOptimizeFunction(main);
main();

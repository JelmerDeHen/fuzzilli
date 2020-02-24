function main() {
const v3 = [13.37];
const v5 = [1337];
const v6 = [v3,653485477,13.37];
const v7 = {length:653485477,d:v6,b:v6,c:Proxy};
const v8 = {c:653485477};
for (const v10 in "object") {
    const v13 = [1337,1337,1337,1337,1337];
    function v14(v15,v16,v17,v18) {
        'use strict'
        try {
            v18[3] = v18;
            const v19 = v16 <= v16;
            const v20 = typeof v15;
            const v22 = v20 === "object";
        } catch(v23) {
            let v25 = 0;
            const v27 = [13.37,13.37,13.37,13.37,13.37];
            function v28(v29,v30,v31,v32) {
                'use strict'
                const v35 = Object.freeze(this);
            }
            const v36 = v27.filter(v28,v27);
            const v37 = v25 + 1;
        }
        return v13;
    }
    const v38 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
    const v40 = new Proxy(v13,v38);
    v40[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [13.37,13.37];
const v4 = v3.length;
let v5 = v3;
const v7 = [1337,1337,1337,1337];
const v8 = [1337,v7];
const v9 = {d:v7,c:v7,constructor:1337,valueOf:v7,a:"YD59hX7THE"};
const v10 = {b:v8,length:v7,constructor:v9,valueOf:v8,__proto__:9};
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[3] = v20;
        } catch(v21) {
            let v23 = 0;
            const v25 = [13.37,13.37,13.37,13.37,13.37];
            function v26(v27,v28,v29,v30) {
                'use strict'
                const v33 = Object.freeze(this);
            }
            const v34 = v25.filter(v26,v25);
            const v35 = typeof v18;
            const v37 = v35 === "number";
            const v38 = v23 + 1;
        }
        return v15;
    }
    const v39 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v41 = new Proxy(v15,v39);
    v41[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

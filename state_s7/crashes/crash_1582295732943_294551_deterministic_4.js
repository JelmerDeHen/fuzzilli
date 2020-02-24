function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [-2147483649,-2147483649,-2147483649,-2147483649,-2147483649];
const v7 = ["c"];
const v8 = {a:-2147483649,__proto__:v4,c:13.37,b:Set,valueOf:"c"};
const v9 = {toString:"c",constructor:v6,d:13.37,e:1956253078,__proto__:v4,b:v8,c:-2147483649};
let v10 = v8;
const v14 = [13.37];
const v16 = [1337,1337];
const v17 = [-3132770439,1337,1337];
const v20 = [1337,1337,1337,1337,1337];
function v21(v22,v23,v24,v25) {
    'use strict'
    try {
        const v26 = {};
        let v27 = v26;
        const v30 = [1337,1337,1337,1337];
        const v31 = {valueOf:v30,length:eval};
        let v34 = 0;
        do {
            const v35 = v34 + 1;
            v34 = v35;
        } while (v34 < 7);
        const v36 = v21(v4);
        const v37 = Map();
        const v38 = v25();
        function v39(v40,v41,v42,v43) {
            'use strict'
        }
        const v44 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
        const v46 = Proxy();
    } catch(v47) {
    }
}
const v48 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v50 = new Proxy(v20,v48);
v50[1] = "MIN_VALUE";
for (let v54 = 0; v54 < 5; v54++) {
}
for (let v58 = 0; v58 < 9; v58++) {
}
}
%NeverOptimizeFunction(main);
main();

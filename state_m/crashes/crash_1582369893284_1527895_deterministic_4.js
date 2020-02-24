function main() {
for (const v1 in "object") {
    const v4 = [1337,v1,1337,1337,1337];
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            const v13 = [1337];
            let v14 = v13;
            const v15 = Math.pow(v14);
            const v17 = eval();
        }
        return v8;
    }
    const v18 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    const v20 = new Proxy(v4,v18);
    v20[-2019469843] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

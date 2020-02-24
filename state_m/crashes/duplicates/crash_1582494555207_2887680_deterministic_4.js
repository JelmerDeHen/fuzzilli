function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            const v11 = v4.reduceRight(v5);
        }
        return v6;
    }
    const v12 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:1337,has:v5};
    const v14 = new Proxy(v4,v12);
    v14[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

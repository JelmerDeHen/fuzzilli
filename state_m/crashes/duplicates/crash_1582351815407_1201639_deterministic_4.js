function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [Reflect,"unscopable",16,1337];
const v8 = {length:v4,constructor:13.37,toString:v7,c:16};
const v9 = {valueOf:16,e:16,b:Reflect,length:v6,c:v8,toString:13.37,__proto__:v4};
function v10(v11,v12) {
    for (const v14 of "number") {
        let v17 = 0;
        while (v17 < 1337) {
            const v18 = v17 + 1;
            v17 = v18;
        }
        const v19 = v10();
    }
}
const v20 = v10();
}
%NeverOptimizeFunction(main);
main();

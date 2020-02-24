function main() {
let v1 = "unscopable";
try {
    function v3(v4,v5,v6,v7) {
        let v10 = 0;
    }
    const v11 = Reflect.set(v1,v1,v3);
    // v11 = .boolean
} catch(v15) {
}
}
%NeverOptimizeFunction(main);
main();

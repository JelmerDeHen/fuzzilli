function main() {
let v5 = 1337;
for (const v8 in Array) {
    with (Array) {
        const v10 = hasInstance(v8,v8,v5,Array,"string");
        // v10 = .unknown
    }
}
}
%NeverOptimizeFunction(main);
main();

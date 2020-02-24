function main() {
let v4 = this;
let v5 = v4;
const v8 = new Proxy(v5,Object);
// v8 = .unknown
const v9 = Object.freeze(v8);
// v9 = .undefined
}
%NeverOptimizeFunction(main);
main();

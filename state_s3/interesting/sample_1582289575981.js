function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
let v6 = Promise;
let v7 = v6;
const v10 = new Proxy(v7,Object);
// v10 = .unknown
const v11 = Object.freeze(v10);
// v11 = .undefined
}
%NeverOptimizeFunction(main);
main();

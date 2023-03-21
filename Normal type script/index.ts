let x: {}[];
x = [{ name: "Ravi" }, { age: 23 }];

let c: string | number = 4;
c = "sdf";

function add(a: number, b: number): number | string {
  return `${a + b}`;
}

function addAtStart<T>(array: T[], item: T) {
  return [item, ...array];
}

const NewArray = addAtStart([1, 4, 2], 5);
const NewArray2 = addAtStart(['1', '4','fg'], 'jhg');

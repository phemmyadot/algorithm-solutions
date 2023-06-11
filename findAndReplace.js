let json = {
  user: {
    age: '16 years',
    name: 'Bill Gates',
    weight: '200 lbs',
    height: '72 in',
  },
  user2: {
    age: ['16 years'],
    name: 'Bill Gates',
    weight: { weight: '200 lbs' },
    height: '72 in',
  },
};
const input = ['age', 'weight'];

let findAndReplace = (ob, arr) => {
  let keys = Object.keys(ob);
  keys.map((key) => {
    if (Array.isArray(ob[key])) {
      if (arr.includes(key)) {
        for (let i = 0; i < ob[key].length; i++) {
          let value = ob[key][i];
          if (typeof value == 'string') {
            ob[key][i] = value.replace(new RegExp('[0-9]', 'g'), '#');
          }
        }
      }
    } else if (typeof ob[key] === 'object') {
      findAndReplace(ob[key], arr);
    } else {
      if (arr.includes(key)) {
        let value = ob[key];
        if (typeof value == 'string') {
          ob[key] = value.replace(new RegExp('[0-9]', 'g'), '#');
        }
      }
    }
  });
  return ob;
};
console.log(findAndReplace(json, input));

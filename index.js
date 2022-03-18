

// const arr = [ { id: 1, name: 'monica'}, { id: 2, name: 'emmanuel'}, {}];


// const newArr =[ ...arr];  // copia del arreglo arr 

// const refArr = newArr; // referecia a arr mas no es copia si cambio refArr afecta arr

//  refArr[0] = { ...refArr[0], name: 'isabella'}; // estamos editando el valor de la posicion 0
// // refArr[0].name = 'isabella'; // estamos editando el valor de la posicion 0


// console.log(' newArr: ',newArr);
// console.log(' arr: ' , arr); and 



// const array1 = [5, 12, 8, 130, 44];


// const found = array1.find(element => element > 40 && element < 43 );


// console.log(found);


// const find = (str, fn)=> {
//     console.log(str);

//     fn();
// }


// find('valen', ()=> console.log('hols') );

// const array1 = [1 ,2 , 3,  4];

// console.log(array1.reduce( (prev, current)=>  prev + current , 0));


// const array2 = [1 ,2 , 3,  4];

const result = array2.reduce( (prev, current, index)=>  ({...prev, [index + '-index']: current })  , {});
// // console.log(array2.reduce( (prev, current, index)=>  ({...prev, [index + '-index']: current })  , {}));

// console.log(result['0-index']);





const obj = {
    att: 1,
    name: 'nombre',
    last: 'zapata',
    name2: true,
    '3 3': 'slo',
    user: {
        name: 'monica',
        age: 4
    }
};

console.log(obj3  );
console.log(obj['3 3']  );



















// smallest number [45, 22, 34, 55,56];
// object array

const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 7, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 33, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'Xaomi', camera: 22, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'Oppo', camera: 6, storage: '32gb', price: 20000, color: 'silver' },
    { name: 'Nokia', camera: 8, storage: '32gb', price: 44000, color: 'silver' },
    { name: 'Htc', camera: 30, storage: '32gb', price: 62000, color: 'silver' },
]

// find chepest phone
    function cheapestPhone(phones){
        let cheapest = phones [0];
        for(let i = 0; i < phones.length; i++){
            const phone= phones[i];
            if(phone.price < cheapest. price){
                cheapest = phone;
            }
        }
        return cheapest;
    }
const mySelection = cheapestPhone(phones);
console.log('cheapest phone:', mySelection);

// find highest camera for phones


function highestCamera(phones){
    let highest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.camera > highest.camera){
            highest = phone;
        }
    }
    return highest;
}
const mySelectionCamera = highestCamera(phones)
console.log('highest camera', mySelectionCamera);

// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 
let positive = [22, 44, 66, -22, -34, 56, -89];
function onlyPosition(positive){
    
    let positiveNumber = [];
    for (let i = 0; i < positive.length; i++) {
        let isNagetive = positive[i];
        if (isNagetive >= 0) {
            positiveNumber.push(isNagetive);
        }
        else if (isNagetive < 0) {
            break;
        }

    }
    return positiveNumber;
}
const isPositive = onlyPosition(positive);
console.log(isPositive);
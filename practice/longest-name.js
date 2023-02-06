//  ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম(স্ট্রিং) রিটার্ন করতে হবে।
// function longestString(arr) {
// var long1 = arr[0];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i].length > long1.length) {
//         long1 = arr[i];
//     }
// }
// return long1;
// }

function bestFriend(friendsName) {
    const friends = ['rana', 'rina', 'treena'];
    let longName = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length > longName.length) {
            longName = friends[i];
            
        }
    }
    return longName;
}
const bestFriendName = bestFriend();
console.log('best friend:',bestFriendName);
// console.log(typeof bestFriendName);
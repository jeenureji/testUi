
function sentencee(){
var sentence = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
let ObjData = new Map;
for(let i = 0 ; i< sentence.length; i ++){
    let slicing = sentence[i].split(" ");
    var wordCount = slicing.length;
    //console.log(`${sentence[i]} contains number of words ${wordCount}`);
    //ObjData[sentence[i]] = wordCount;
    ObjData.set(sentence[i], wordCount);

}
console.log("the final object =", Object.fromEntries(ObjData));

}

sentencee();
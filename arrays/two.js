let players=["rahul","raina","dhawan","aswin",3.2,35]
console.log(players)
players.length==4?console.log("yes"):console.log("no");
for(let i=0;i<=players.length-1;i++){
    console.log(players[i]);
}
for(let x of players){
    console.log(x)
}
//players.foreach(k)
console.log(players.pop())
console.log(players.unshift("lionel messi"))
players.splice(0,2)
console.log(players)
console.log(players.indexOf(3.2)) // returns the position of the value in array

players.lastIndexOf();
console.log(players)
console.log(players[players.length-1])



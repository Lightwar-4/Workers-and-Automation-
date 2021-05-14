let money = 0
let worker = 0
let workerCost = 10
let enthusiasm = 0
let enthusiasmCost = 200
let moneyPerSecond = 0
const updateRate = 25
let lastTick = Date.now()

function increaseMoney() {
  money++
}
function increaseWorker() {
  if(money >= workerCost) {
    worker++
    money -= workerCost
    
  }
}
function increaseEnthusiam(){
  if (money >= enthusiasmCost) {
    enthusiasm++
    money -=enthusiasmCost
    workerCost = 10*(1.1**worker)
  }
}
function increaseEverything(a){
  moneyPerSecond = worker * (1+enthusiasm)
  workerCost = 10*(1.08**worker)
  enthusiasmCost = 200*(1.4**enthusiasm)
  money += moneyPerSecond * a
}
function updateDisplay(){
  document.getElementById("moneyText").innerHTML = "you have "+Math.floor(money).toLocaleString()+" money"
  document.getElementById("moneyPerSecond").innerHTML ="you gain "+moneyPerSecond.toLocaleString()+" per second "
  document.getElementById("workerCount").innerHTML = "Current Count:"+ worker.toLocaleString()
  document.getElementById("workerCost").innerHTML = "Cost:"+Math.floor(workerCost).toLocaleString()
  
} 
  function gameLoop(){ 
    diff = (Date.now() - lastTick)/1000
    lastTick = Date.now();
    updateDisplay();
    increaseEverything(diff);
}
setInterval(gameLoop,updateRate)
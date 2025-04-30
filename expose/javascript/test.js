function printNums() {
    console.log(1);               // 立即執行
    setTimeout(() => console.log(2), 1000); // 等 1 秒
    setTimeout(() => console.log(3), 0);    // 理論上馬上執行，但還是放入「任務佇列」
    console.log(4);               // 立即執行
  }
  printNums();
let display = <HTMLInputElement>document.getElementById("display") as HTMLInputElement;
let btn0: HTMLButtonElement[] = Array.from(document.getElementsByClassName("a")) as HTMLButtonElement[];
let btn1: HTMLButtonElement[] = Array.from(document.getElementsByClassName("abc")) as HTMLButtonElement[];
let buttons: HTMLButtonElement[] = Array.from(document.getElementsByClassName("button")) as HTMLButtonElement[];
btn0.map((a: HTMLButtonElement): void => {
  a.addEventListener("click", (q: MouseEvent) => {
    switch ((<HTMLElement>q.target).innerText) {
      case "M+":
        memory("m+", eval(display.innerText));
        break;
      case "M-":
        memory("m-", eval(display.innerText));
        break;
      case "MS":
        memory("ms", eval(display.innerText));
        break;
      case "MC":
        memory("mc", eval(display.innerText));
        break;
      case "MR":
        memory("mr", eval(display.innerText));
        break;
    }
  })
})
type Action = "m+" | "m-" | "mc" | "ms" | "mr";
var arrList: Number[] = [];
function memory(fun: Action, value: Number): void {

  if (fun == "m+") {
    console.log("m+");
    arrList.push(value);

    display.innerText = String(value);
  } else if (fun == "m-") {
    console.log("m-");
    arrList.push(eval("-" + value));
    display.innerText = String(value);

  } else if (fun == "mc") {
    console.log("mc");
    arrList = [];

  } else if (fun == "ms") {
    console.log("ms");
    arrList.push(value);
    display.innerText = String(value);
  } else {
    console.log("mr");
    let sum = 0;
    arrList.forEach((value: Number) => {
      sum += Number(value);
    });
    display.innerText = String(sum);
  }
}
btn1.map((abc: HTMLButtonElement) => {
  abc.addEventListener("click", (a: MouseEvent) => {
    // console.log(a.target.innerText);
    switch ((<HTMLElement>a.target).innerText) {
      case "sin":
        display.innerText = String(Math.sin(Number(display.innerText)));
        break;
      case "cos":
        display.innerText = String(Math.cos(Number(display.innerText)));
        break;
      case "tan":
        display.innerText = String(Math.tan(Number(display.innerText)));
        break;
      case "rand":
        display.innerText = String(Math.round(Number(display.innerText)));
        break;
      case "ceil":
        display.innerText = String(Math.ceil(Number(display.innerText)));
      case "floor":
        display.innerText = String(Math.floor(Number(display.innerText)));
      case "M+":
        console.log(display.innerHTML);
        break;
    }
  });
});
const fact = (num: Number): Number => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
const echeck = (): String => {
  let check: String = (display.innerText = String(Number(display.innerText) * 2.718281));
  return check;
}
const check = (value: String): Boolean | undefined => {
  let isvalid: Boolean;
  let chList: String[] = ["+", "-", "!", "e", "*", "/", "π", "%"];

  let lastchar: String = value.charAt(value.length - 1);

  if (chList.includes(lastchar)) {
    isvalid = false;
  } else {
    isvalid = true;
  }
  return isvalid;
}
buttons.map((button: HTMLButtonElement): void => {
  button.addEventListener("click", (e: MouseEvent): void => {
    switch ((<HTMLLIElement>e.target).innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "×":
        if (check(display.innerText)) {
          display.innerText = display.innerText + "*";
        }
        break;
      case "÷":
        if (check(display.innerText)) {
          display.innerText = display.innerText + "/";
        }
        break;

      case "π":
        if (check(display.innerText)) {
          display.innerText += "π";
        }
        break;
      case "in":
        display.innerText = String(Math.log(Number(display.innerText)));
        break;
      case "exp":
        display.innerText = String(Math.exp(Number(display.innerText)));

        break;

      case ".":
        if (display.innerText == null || display.innerText == "0") {
          display.innerText = ".";
        } else {
          display.innerText += ".";
        }
        break;
      case "mod":
        if (check(display.innerText)) {
          display.innerText += "%";
        }
        break;

      case "=":
        if (display.innerText.charAt(display.innerText.length - 1) == "!") {
          display.innerText = display.innerText.substring(
            0,
            display.innerText.length - 1
          );
          display.innerText = String(fact(Number(display.innerText)));
        }
        if (display.innerText.charAt(display.innerText.length - 1) == "e") {
          display.innerText = display.innerText.substring(
            0,
            display.innerText.length - 1
          );
          display.innerText = String(echeck());
        }
        if (display.innerText.charAt(display.innerText.length - 1) == "π") {
          display.innerText = display.innerText.substring(
            0,
            display.innerText.length - 1
          );
          display.innerText = String((Number(display.innerText) * Math.PI));
        }
        if (display.innerText.includes("←")) {
          let sign = display.innerText.indexOf("←");
          let a = display.innerText.substring(0, sign);
          let b = display.innerText.substring(
            sign + 1,
            display.innerText.length
          );
          display.innerText = String(Math.pow(Number(a), Number(b)));
        }

        display.innerText = eval(display.innerText);

        break;
      case "n!":
        if (check(display.innerText)) {
          display.innerText += "!";
        }
        break;
      case "e":
        if (check(display.innerText)) {
          display.innerText += "e";
        }
        break;
      case "+":
        if (check(display.innerText)) {
          display.innerText += "+";
        }
        break;
      case "-":
        if (check(display.innerText)) {
          display.innerText += "-";
        }
        break;
      case "∓":
        if (display.innerText.substring(0, 1) == "-")
          display.innerText = display.innerText.substring(
            1,
            display.innerText.length
          );
        else display.innerText = "-" + display.innerText;
        break;
      case "|x|":
        display.innerText = String(Math.abs(Number(display.innerText)));
        break;
      case "xy":
        display.innerText += "←";
        break;
      case "log":
        display.innerText = String(Math.log10(Number(display.innerText)));

        break;
      case "x2":
        display.innerText = String(Number(display.innerText) ** 2);
        break;
      case "2√x":
        display.innerText = String(Math.sqrt(Number(display.innerText)));
        break;
      case "10x":
        display.innerText = String(10 ** Number(display.innerText));
        break;
      case "1⁄x":
        display.innerText = "1/";
        break;
      case "ln":
        display.innerText = String(Math.log(Number(display.innerText)));
        break;
      default:
        display.innerText += (<HTMLElement>e.target).innerText;
    }
  });
});
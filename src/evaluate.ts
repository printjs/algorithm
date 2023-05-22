/**
 * Dijkstra 双栈算术
 */
export class Evaluate {
  private input: string = ''
  public operatorStack: string[] = []
  public valueStack: number[] = []
  constructor(str: string) {
    this.input = str
  }

  getResult() {
    for(let i = 0; i< this.input.length; i++) {
      const c = this.input[i]
      if(c === '(') {
        continue
      } else if(c === '+' || c ==='-' || c ==='*' || c==='/') {
        this.operatorStack.push(c)
      } else if(c === ')') {
        const operator = this.operatorStack.pop()
        let value: number = this.valueStack.pop() as number
        if(operator === '+') {
          value = (this.valueStack.pop() || 0) + value
        } else if(operator === '-') {
          value = (this.valueStack.pop() || 0) - value
        } else if(operator === '*') {
          value = (this.valueStack.pop() || 1) * value
        } else if(operator === '/') {
          value = (this.valueStack.pop() || value) / value
        }
        this.valueStack.push(value)
      } else {
        this.valueStack.push(parseInt(c))
      }
    }
    while (this.operatorStack.length > 0) {
      const operator = this.operatorStack.pop()
      let value = this.valueStack.pop() as number
      if(operator === '+') {
        value = (this.valueStack.pop() || 0) + value
      } else if(operator === '-') {
        value = (this.valueStack.pop() || 0) - value
      } else if(operator === '*') {
        value = (this.valueStack.pop() || 1) * value
      } else if(operator === '/') {
        value = (this.valueStack.pop() || value) / value
      }
      this.valueStack.push(value)
    }
    return this.valueStack.pop()
  }
}

console.log(new Evaluate('(1+(4+1+2)+(4*3))').getResult())


/**
 * Dijkstra 双栈算术
 * description 更贴近真实运算，会先算括号内部的
 */
export class Evaluate2 {
  private input: string = ''
  public operatorStack: string[] = []
  public valueStack: number[] = []
  constructor(str: string) {
    this.input = str
  }

  getResult() {
    for(let i = 0; i< this.input.length; i++) {
      const c = this.input[i]
      if(c === '(' || c === '+' || c ==='-' || c ==='*' || c==='/') {
        this.operatorStack.push(c)
      } else if(c === ')') {
        let operator = this.operatorStack.pop()
        while(operator !== '(') {
          let value: number = this.valueStack.pop() as number
          if(operator === '+') {
            value = (this.valueStack.pop() || 0) + value
          } else if(operator === '-') {
            value = (this.valueStack.pop() || 0) - value
          } else if(operator === '*') {
            value = (this.valueStack.pop() || 1) * value
          } else if(operator === '/') {
            value = (this.valueStack.pop() || value) / value
          }
          this.valueStack.push(value)
          operator = this.operatorStack.pop()
        }
      } else {
        this.valueStack.push(parseInt(c))
      }
    }

    while (this.operatorStack.length > 0) {
      const operator = this.operatorStack.pop()
      let value = this.valueStack.pop() as number
      if(operator === '+') {
        value = (this.valueStack.pop() || 0) + value
      } else if(operator === '-') {
        value = (this.valueStack.pop() || 0) - value
      } else if(operator === '*') {
        value = (this.valueStack.pop() || 1) * value
      } else if(operator === '/') {
        value = (this.valueStack.pop() || value) / value
      }
      this.valueStack.push(value)
    }
    return this.valueStack.pop()
  }
}

console.log(new Evaluate2('1+(4+1+2)+(4*3)').getResult())


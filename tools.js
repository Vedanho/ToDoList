function createTodoList() {
  const todoListObject = {
    items: [
      {
        text: "Завершить текущий челлендж",
        completed: false,
      },
      {
        text: "Отдохнуть во время перерыва",
        completed: false,
      },
      {
        text: "Помочь напарнику понять код",
        completed: false,
      },
      {
        text: "Выиграть в мафию",
        completed: true,
      },
    ],
    printAll() {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].completed === true) {
            console.log (`[x] ${this.items[i].text}`)
            } else {
                console.log (`[] ${this.items[i].text}`)
            }
      }
    },
    add(newTool) {
      this.items = [{text: newTool, completed: false}, ...this.items ]
      console.log(this.printAll())
    },
    remove (n) {
            this.items.splice(n, 1)
    },
    print (x) {
        if (this.items[x].completed === true) {
        console.log (`[x] ${this.items[x].text}`)
        } else { 
            console.log (`[] ${this.items[x].text}`)
        }
    },
    complete (n) {
      
      this.items[n].completed = true
  
    }
  };
  return todoListObject;
}

const todoList = createTodoList();

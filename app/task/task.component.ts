import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  courseForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  onClickSubmit() {
    // Since we have  access to the FormGroup instance we can directly output the same
    console.log(this.courseForm);
    console.log(this.courseForm.value.task);
  }

  private initForm() {
    this.courseForm = new FormGroup({
      task: new FormControl(null),
    });
  }

  todos = [];

  addTodo(newTodoTitle) {
    var newTodo = {
      title: newTodoTitle,
      // var k=++title.id,
    };

    this.todos.push(newTodo);
    console.log(newTodo);
  }
}

// ['First item', 'Second item', 'Third item', 'Fourth item']

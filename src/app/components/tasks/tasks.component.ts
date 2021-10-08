import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { TaskInterface } from '../../TaskInterface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: TaskInterface[] = TASKS;

  constructor() {}

  ngOnInit(): void {}
}

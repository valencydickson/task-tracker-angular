import { Component, OnInit, Input } from '@angular/core';
import { TaskInterface } from '../../TaskInterface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: TaskInterface;
  constructor() {}

  ngOnInit(): void {}
}

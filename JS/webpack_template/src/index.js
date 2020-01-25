import Task from './task'
import imgSource from './assets/img/javascript.jpg'
import moment from 'moment'
import '@/styles/base'

const task = new Task ('First task')

task.taskInfo()

// const root = document.querySelector('#root')
// const img = document.createElement('img');
// img.src = imgSource
// root.append(img)
console.log(moment());
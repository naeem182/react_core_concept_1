// export default function TToDDo({ task }) {
//     return (
//         <li>Task:{task} </li>
//     )
// }
///////////conditional vendaring option 1
// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     }
//     else {
//         return <li>Work on: {task}</li>
//     }
// }
//conditional vendaring option 2
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finished: {task}</li>
//     }
//     else {
//         return <li>Work on: {task}</li>
//     }
// }


// conditional rendering option 3: ternary operator
// export default function Todo({ task, isDone }) {
//     return (
//         <li> {isDone ? 'Finishe' : 'Work on'} : {task}</li>
//     )
// }



// // conditional rendering option 4: &&
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }
// conditional rendering option 5: ||
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task} {isDone || ': Do it'}{isDone && ': Done'}</li>
//     )
// }// conditional rendering option 6
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Finish: {task}</li>
    }
    else {
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}



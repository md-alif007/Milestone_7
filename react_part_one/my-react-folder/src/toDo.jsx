// export default function ToDo({task}) {
//     return (
//         <li>Task : {task}</li>
//     )
// }

export default function ToDo({task,isDone}) {
    if (isDone) {
        return <li>Done : {task}</li>
    }
    else {
        return <li>Do now : {task}</li>
    }
}
// import React from 'react';
// import * as IoIcons from 'react-icons/io5';
// import styles from './Detail.module.css';

// const Detail = ({ task }) => {
//   return (
//     <div className={styles.detail}>
//       <h2 className={styles.title}>{task.title}</h2>
//       <p className={styles.description}>{task.description}</p>
//       <div className={styles.todos}>
//         <h3 className={styles.type}>
//           <IoIcons.IoCheckboxOutline className={styles.icon} />
//           Tasks
//         </h3>
//         {task.todos.map((todo, i) => {
//           return (
//             <p
//               key={i}
//               className={`${styles.text} ${
//                 todo.todoChecked ? styles.checked : null
//               }`}
//             >
//               &mdash; {todo.value}
//             </p>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Detail;

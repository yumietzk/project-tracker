// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { connect } from 'react-redux';
// import * as AiIcons from 'react-icons/ai';
// import { fetchTask, clearEditError } from '../../actions';
// import Overlay from './Overlay';
// import FormEdit from './Edit';
// import styles from './ModalEdit.module.css';

// const ModalEdit = ({
//   match,
//   fetchTask,
//   clearEditError,
//   task,
//   isFetching,
//   isError,
// }) => {
//   const { id } = match.params;

//   useEffect(() => {
//     fetchTask(id);
//   }, []);

//   const handleError = () => {
//     clearEditError(id);
//   };

//   const renderFormEdit = () => {
//     if (isFetching || !task) {
//       return (
//         <div className={styles.loading}>
//           <AiIcons.AiOutlineLoading3Quarters className={styles.icon} />
//         </div>
//       );
//     }

//     if (isError?.status) {
//       return (
//         <div className={styles.form}>
//           <p className={styles.error}>{isError.errorMessage}</p>
//           <button className={styles.errorbtn} onClick={handleError}>
//             Update again
//           </button>
//         </div>
//       );
//     }

//     if (task && task.length === 0) {
//       return <div className={styles.message}>No data yet.</div>;
//     }

//     return <FormEdit id={id} task={task} />;
//   };

//   return (
//     <React.Fragment>
//       {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay'))}
//       {ReactDOM.createPortal(
//         renderFormEdit(),
//         document.getElementById('modal')
//       )}
//     </React.Fragment>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     task: state.data.selectedTask,
//     isFetching: state.data.isFetching,
//     isError: state.error.isError,
//   };
// };

// export default connect(mapStateToProps, {
//   fetchTask,
//   clearEditError,
// })(ModalEdit);

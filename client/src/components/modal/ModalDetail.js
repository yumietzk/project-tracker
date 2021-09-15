// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { connect } from 'react-redux';
// import * as AiIcons from 'react-icons/ai';
// import { fetchTask } from '../../actions';
// import OverlayDetail from './OverlayDetail';
// import Detail from './Detail';
// import styles from './ModalDetail.module.css';

// const ModalDetail = ({ match, fetchTask, task, isFetching, isError }) => {
//   const { id } = match.params;

//   useEffect(() => {
//     fetchTask(id);
//   }, []);

//   const renderDetail = () => {
//     if (isFetching || !task) {
//       return (
//         <div className={styles.loading}>
//           <AiIcons.AiOutlineLoading3Quarters className={styles.icon} />
//         </div>
//       );
//     }

//     if (isError?.status) {
//       return <p>{isError.errorMessage}</p>;
//     }

//     if (task && task.length === 0) {
//       return <p className={styles.message}>No data yet.</p>;
//     }

//     return <Detail task={task} />;
//   };

//   return (
//     <React.Fragment>
//       {ReactDOM.createPortal(
//         <OverlayDetail />,
//         document.getElementById('overlay')
//       )}
//       {ReactDOM.createPortal(renderDetail(), document.getElementById('modal'))}
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
// })(ModalDetail);

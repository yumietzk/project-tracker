import React from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';
import styles from './Create.module.css';

const Create = ({ todos, setTodos, isError }) => {
  // fetching中の記載はどこ？
  // if (isError?.status) {
  //   return (
  //     <div className={styles.form}>
  //       <p className={styles.error}>{isError.errorMessage}</p>
  //       <button className={styles.errorbtn}>Create again</button>
  //     </div>
  //   );
  // }

  return (
    <React.Fragment>
      <ToDo todos={todos} setTodos={setTodos} />
      <button type="submit" className={styles.btn}>
        Create
      </button>
    </React.Fragment>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     isError: state.error.isError,
//   };
// };

// export default connect(mapStateToProps, {
//   createTask,
//   createError,
//   clearError,
// })(Create);

export default Create;

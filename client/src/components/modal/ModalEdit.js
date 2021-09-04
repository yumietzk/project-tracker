import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as AiIcons from 'react-icons/ai';
import { fetchTask } from '../../actions';
import Overlay from './Overlay';
import FormEdit from './FormEdit';
import styles from './ModalEdit.module.css';

const ModalEdit = ({ match, fetchTask, task, isFetching, isError }) => {
  const { id } = match.params;

  useEffect(() => {
    fetchTask(id);
  }, []);

  const renderFormEdit = () => {
    if (isFetching || !task) {
      return (
        <div className={styles.loading}>
          <AiIcons.AiOutlineLoading3Quarters className={styles.icon} />
        </div>
      );
    }

    if (isError?.status) {
      return <p>{isError.error}</p>;
    }

    if (task && task.length === 0) {
      return <div className={styles.message}>No data yet.</div>;
    }

    return <FormEdit id={id} task={task} />;
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay'))}
      {ReactDOM.createPortal(
        renderFormEdit(),
        document.getElementById('modal')
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    task: state.data.selectedTask,
    isFetching: state.data.isFetching,
    isError: state.error.isError,
  };
};

export default connect(mapStateToProps, {
  fetchTask,
})(ModalEdit);

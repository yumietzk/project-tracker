import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchTask } from '../../actions';
import Overlay from './Overlay';
import FormEdit from './FormEdit';

const ModalEdit = ({ match, fetchTask, task, isFetching, isError }) => {
  const { id } = match.params;

  useEffect(() => {
    console.log(id);
    fetchTask(id);
  }, []);

  const renderFormEdit = () => {
    if (isFetching || !task) {
      return <div>Now loading...</div>;
    }

    if (isError?.status) {
      return <p>{isError.error}</p>;
    }

    if (task && task.length === 0) {
      return <p>No data.</p>;
    }

    return <FormEdit task={task} />;
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

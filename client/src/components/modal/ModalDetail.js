import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchTask } from '../../actions';
import OverlayDetail from './OverlayDetail';
import Detail from './Detail';

const ModalDetail = ({ match, fetchTask, task, isFetching, isError }) => {
  const { id } = match.params;

  useEffect(() => {
    fetchTask(id);
  }, []);

  const renderDetail = () => {
    if (isFetching || !task) {
      return <div>Now loading...</div>;
    }

    if (isError?.status) {
      return <p>{isError.error}</p>;
    }

    if (task && task.length === 0) {
      return <p>No data.</p>;
    }

    return <Detail task={task} />;
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <OverlayDetail />,
        document.getElementById('overlay')
      )}
      {ReactDOM.createPortal(renderDetail(), document.getElementById('modal'))}
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
})(ModalDetail);

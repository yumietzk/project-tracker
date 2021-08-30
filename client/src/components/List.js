import React from 'react';
// import { connect } from 'react-redux';
import Card from './Card';
// import { fetchTasks } from '../actions';
import styles from './List.module.css';

const List = ({ label, data, isFetching, isError }) => {
  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  const renderCard = () => {
    if (isFetching || !data) {
      return <div>Now loading...</div>;
    }

    if (isError?.status) {
      return <p>{isError.error}</p>;
    }

    if (data.length === 0) {
      return <p>No data.</p>;
    }

    return data.map((item) => {
      return (
        <Card
          id={item._id}
          title={item.title}
          date={item.date}
          status={item.status}
          description={item.description}
          duedate={item.duedate}
          key={item._id}
        />
      );
    });
  };

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>{label} 3</h2>
      <div className={styles.cards}>{renderCard()}</div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     tasks: state.data.tasks,
//     isFetching: state.data.isFetching,
//     isError: state.error.isError,
//   };
// };

export default List;

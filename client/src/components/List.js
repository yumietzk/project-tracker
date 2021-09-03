import React from 'react';
import Card from './Card';
import styles from './List.module.css';

const List = ({ label, data }) => {
  const renderCard = () => {
    // if (isFetching || !data) {
    //   return <div>Now loading...</div>;
    // }

    // if (isError?.status) {
    //   return <p>{isError.error}</p>;
    // }

    // if (data.length === 0) {
    //   return <p>No data.</p>;
    // }

    return data?.map((item) => {
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
      <h2 className={styles.title}>
        {label} ({data.length})
      </h2>
      <div className={styles.cards}>{renderCard()}</div>
    </div>
  );
};

export default List;

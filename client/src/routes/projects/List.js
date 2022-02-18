import React from 'react';
import Card from './Card';
import styles from './List.module.css';

const List = ({ handleFormEdit, label, data }) => {
  const renderCard = () => {
    return data?.map((item) => {
      return (
        <Card
          handleFormEdit={handleFormEdit}
          id={item._id}
          title={item.title}
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

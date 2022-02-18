import React from 'react';
import Card from './Card';
import styles from './List.module.css';

const List = ({ handleFormEdit, label, data }) => {
  const renderCard = () => {
    if (data.length === 0) {
      return null;
    } else {
      return data.map((item) => {
        return (
          <Card
            handleFormEdit={handleFormEdit}
            // id={item._id}
            // title={item.title}
            // description={item.description}
            // duedate={item.duedate}
            key={item._id}
            item={item}
          />
        );
      });
    }
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

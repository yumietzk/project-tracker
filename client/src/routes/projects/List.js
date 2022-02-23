import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import styles from './List.module.css';

const List = ({ handleFormEdit, label, data }) => {
  const renderCard = () => {
    if (data.length === 0) {
      return null;
    } else {
      return data.map((item, i) => {
        return (
          <Card
            handleFormEdit={handleFormEdit}
            key={item._id}
            item={item}
            index={i}
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
      <Droppable droppableId={label}>
        {(provided, snapshot) => (
          <div
            className={`${styles.cards} ${
              snapshot.isDraggingOver && styles['cards-draggedOver']
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {renderCard()}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default List;

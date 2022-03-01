import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions';
import TimelineCalendar from './TimelineCalendar';
import TimeManageList from './TimeManageList';
import LoadingIndicator from '../../helpers/LoadingIndicator';
import styles from './TimeManage.module.css';

const TimeManage = ({
  showDetail,
  setIsDetail,
  isDarkMode,
  width,
  fetchTasks,
  tasks,
  isFetching,
  isError,
}) => {
  const [sort, setSort] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const calcDate = (date) => {
    const targetdate = new Date(date);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const calcDays = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

    const days = calcDays(+today, +targetdate);
    return days;
  };

  const renderContent = () => {
    if (isFetching || !tasks) {
      return <LoadingIndicator />;
    }

    if (isError?.status) {
      return <p>{isError.errorMessage}</p>;
    }

    if (tasks) {
      if (tasks.length === 0) {
        return (
          <p className={styles.message}>
            No data yet. Create a new project by clicking add button on top
            right :)
          </p>
        );
      } else {
        if (tasks.every((task) => task.status === 'Completed')) {
          return (
            <p className={styles.message}>
              All projects are finished :) No more new projects now.
            </p>
          );
        } else {
          let sortedTask = [...tasks];
          if (sort) {
            sortedTask.sort((task1, task2) => {
              const calcdate1 = new Date(task1.duedate);
              const calcdate2 = new Date(task2.duedate);
              return calcdate1 - calcdate2;
            });
          }

          const targettasks = sort ? sortedTask : tasks;

          return (
            <div className={styles.timemanage}>
              <TimelineCalendar
                tasks={tasks}
                calcDate={calcDate}
                isDarkMode={isDarkMode}
                width={width}
              />

              <div className={styles.reference}>
                <div className={styles.type}>
                  <div
                    className={`${styles.nostatus} ${
                      isDarkMode && styles['nostatus-dark']
                    }`}
                  >
                    No Status
                  </div>
                  <div
                    className={`${styles.inprogress} ${
                      isDarkMode && styles['inprogress-dark']
                    }`}
                  >
                    In Progress
                  </div>
                </div>
                <button
                  className={`${styles.btnsort} ${
                    isDarkMode && styles['btnsort-dark']
                  }`}
                  onClick={() => setSort(!sort)}
                >
                  {sort ? 'Clear Sort' : 'Sort by Due Date'}
                </button>
              </div>

              <div
                className={`${styles.example} ${
                  isDarkMode && styles['example-dark']
                }`}
              >
                <div
                  className={`${styles.title} ${
                    isDarkMode && styles['title-dark']
                  }`}
                >
                  Title
                </div>
                <div
                  className={`${styles.tasks} ${
                    isDarkMode && styles['tasks-dark']
                  }`}
                >
                  Tasks
                </div>
                <div
                  className={`${styles.date} ${
                    isDarkMode && styles['date-dark']
                  }`}
                >
                  Due Date
                </div>
              </div>

              {targettasks.map((task, i) => {
                if (task.status === 'Completed') return null;

                return (
                  <TimeManageList
                    showDetail={showDetail}
                    setIsDetail={setIsDetail}
                    isDarkMode={isDarkMode}
                    task={task}
                    calcDate={calcDate}
                    key={i}
                  />
                );
              })}
            </div>
          );
        }
      }
    }
  };

  return renderContent();
};

const mapStateToProps = (state) => {
  return {
    tasks: state.data.tasks,
    isFetching: state.data.isFetching,
    isError: state.error.isError,
  };
};

export default connect(mapStateToProps, {
  fetchTasks,
})(TimeManage);

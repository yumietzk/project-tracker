import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import * as GoIcons from 'react-icons/go';
import * as IoIcons from 'react-icons/io5';
import { fetchTasks } from '../../actions';
import TimeManageList from './TimeManageList';
import LoadingIndicator from '../../helpers/LoadingIndicator';
import styles from './TimeManage.module.css';

const TimeManage = ({
  showDetail,
  setIsDetail,
  fetchTasks,
  tasks,
  isFetching,
  isError,
}) => {
  const [sort, setSort] = useState(false);
  const [groups, setGroups] = useState([]);
  const [items, setItems] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (tasks) {
      if (
        tasks.length !== 0 &&
        !tasks.every((task) => task.status === 'Completed')
      ) {
        let groupData = [];
        let itemData = [];

        tasks.map((task, i) => {
          if (task.status === 'Completed') return;

          groupData.push({
            id: i + 1,
            title: task.title,
          });
          itemData.push({
            id: i + 1,
            group: i + 1,
            title: task.title,
            start_time: moment().add(calcDate(task.date), 'days'),
            end_time: moment().add(calcDate(task.duedate), 'days'),
            canMove: false,
            canResize: false,
            canChangeGroup: false,
            itemProps: {
              style: {
                background: '#adc8c8',
                border: 'none',
              },
            },
          });
        });

        setGroups(groupData);
        setItems(itemData);
      }
    }
  }, [tasks]);

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
              <div className={styles.calendar}>
                Timeline Calendar
                <button className={styles.togglebtn} onClick={handleDisplay}>
                  {isDisplayed ? (
                    <GoIcons.GoTriangleUp className={styles.toggleicon} />
                  ) : (
                    <IoIcons.IoCalendarOutline className={styles.toggleicon} />
                  )}
                </button>
              </div>

              {isDisplayed && (
                <div className={styles.timeline}>
                  <Timeline
                    groups={groups}
                    items={items}
                    // これは多分デフォルトで画面上に表示されている期間の設定
                    // innerwidthによって変える
                    defaultTimeStart={moment().add(-1, 'days')}
                    defaultTimeEnd={moment().add(45, 'days')}
                  >
                    <TimelineHeaders style={{ background: 'none' }}>
                      <SidebarHeader
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        {({ getRootProps }) => {
                          return (
                            <div
                              {...getRootProps()}
                              className={styles['timeline-title']}
                            ></div>
                          );
                        }}
                      </SidebarHeader>
                      {/* innerwidthによってunitをyear, monthとかにする */}
                      <DateHeader
                        unit="month"
                        style={{ color: '#274c4b', fontWeight: 'bold' }}
                      ></DateHeader>
                      <DateHeader unit="day"></DateHeader>
                    </TimelineHeaders>
                  </Timeline>
                </div>
              )}

              <div className={styles.reference}>
                <div className={styles.type}>
                  <div className={styles.nostatus}>No Status</div>
                  <div className={styles.inprogress}>In Progress</div>
                </div>
                <button
                  className={styles.btnsort}
                  onClick={() => setSort(!sort)}
                >
                  {sort ? 'Clear Sort' : 'Sort by Due Date'}
                </button>
              </div>

              <div className={styles.example}>
                <div className={styles.title}>Title</div>
                <div className={styles.tasks}>Tasks</div>
                <div className={styles.date}>Due Date</div>
              </div>

              {targettasks.map((task, i) => {
                if (task.status === 'Completed') return null;

                return (
                  <TimeManageList
                    showDetail={showDetail}
                    setIsDetail={setIsDetail}
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

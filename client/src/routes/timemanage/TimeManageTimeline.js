import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions';
import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import TimeManageList from './TimeManageList';
import LoadingIndicator from '../../helpers/LoadingIndicator';
import styles from './TimeManage.module.css';

// const groups = [
//   { id: 1, title: 'group 1', rightTitle: 'title in the right sidebar' },
//   { id: 2, title: 'group 2' },
// ];

// const items = [
//   {
//     id: 1,
//     group: 1,
//     title: 'item 1',
//     start_time: moment(),
//     end_time: moment().add(1, 'hour'),
//   },
//   {
//     id: 2,
//     group: 2,
//     title: 'item 2',
//     start_time: moment().add(-0.5, 'hour'),
//     end_time: moment().add(0.5, 'hour'),
//   },
//   // {
//   //   id: 3,
//   //   group: 1,
//   //   title: 'item 3',
//   //   start_time: moment().add(2, 'hour'),
//   //   end_time: moment().add(3, 'hour'),
//   // },
// ];

const TimeManageTimeline = ({ fetchTasks, tasks, isFetching, isError }) => {
  const [sort, setSort] = useState(false);
  const [groups, setGroups] = useState([]);
  const [items, setItems] = useState([]);

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

  const renderDueDate = (date) => {
    const daysLeft = calcDate(date);

    if (daysLeft < -1) return `${Math.abs(daysLeft)} days ago`;
    if (daysLeft === -1) return 'Yesterday';
    if (daysLeft === 0) return 'Today';
    if (daysLeft === 1) return 'Tomorrow';
    if (daysLeft <= 7) return `${daysLeft} days left`;
    else {
      return date;
    }
  };

  const handleFire = (date) => {
    const daysLeft = calcDate(date);

    if (daysLeft <= 2) return true;
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
              <Timeline
                groups={groups}
                items={items}
                // これは多分デフォルトで画面上に表示されている期間の設定
                // innerwidthによって変える
                defaultTimeStart={moment().add(-1, 'days')}
                defaultTimeEnd={moment().add(45, 'days')}
              >
                <TimelineHeaders>
                  <SidebarHeader>
                    {({ getRootProps }) => {
                      return <div {...getRootProps()}>Timeline</div>;
                    }}
                  </SidebarHeader>
                  <DateHeader
                    unit="primaryHeader"
                    style={{ backgroundColor: '#274c4b' }}
                  ></DateHeader>
                  <DateHeader unit="day"></DateHeader>
                </TimelineHeaders>
              </Timeline>

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
                <p className={styles.title}>Title</p>
                <p className={styles.date}>Due Date</p>
              </div>

              {targettasks.map((task, i) => {
                if (task.status === 'Completed') return null;

                return (
                  <TimeManageList
                    task={task}
                    renderDueDate={renderDueDate}
                    handleFire={handleFire}
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
})(TimeManageTimeline);

// import Timeline from 'react-calendar-timeline';
// // make sure you include the timeline stylesheet or the timeline will not be styled
// import 'react-calendar-timeline/lib/Timeline.css';
// import moment from 'moment';

// const groups = [
//   { id: 1, title: 'group 1' },
//   { id: 2, title: 'group 2' },
// ];

// const items = [
//   {
//     id: 1,
//     group: 1,
//     title: 'item 1',
//     start_time: moment(),
//     end_time: moment().add(1, 'hour'),
//   },
//   {
//     id: 2,
//     group: 2,
//     title: 'item 2',
//     start_time: moment().add(-0.5, 'hour'),
//     end_time: moment().add(0.5, 'hour'),
//   },
//   {
//     id: 3,
//     group: 1,
//     title: 'item 3',
//     start_time: moment().add(2, 'hour'),
//     end_time: moment().add(3, 'hour'),
//   },
// ];

// const TimeManageTimeline = () => {
//   return (
//     <div>
//       Rendered by react!
//       <Timeline
//         groups={groups}
//         items={items}
//         defaultTimeStart={moment().add(-12, 'hour')}
//         defaultTimeEnd={moment().add(12, 'hour')}
//       />
//     </div>
//   );
// };

// export default TimeManageTimeline;

import React, { useState, useEffect } from 'react';
import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import * as GoIcons from 'react-icons/go';
import * as IoIcons from 'react-icons/io5';
import styles from './TimelineCalendar.module.css';

const TimelineCalendar = ({ tasks, calcDate, isDarkMode, width }) => {
  const [timeEnd, setTimeEnd] = useState(null);
  const [dateHeaderMain, setDateHeaderMain] = useState('');
  const [dateHeaderSub, setDateHeaderSub] = useState('');
  const [groups, setGroups] = useState([]);
  const [items, setItems] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (width > 600 && width <= 1200) {
      setTimeEnd(21);
    } else if (width > 1200) {
      setTimeEnd(45);
    }

    if (width > 600 && width <= 800) {
      setDateHeaderMain('year');
      setDateHeaderSub('month');
    } else if (width > 800) {
      setDateHeaderMain('month');
      setDateHeaderSub('day');
    }
  }, [width]);

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
            sidebarWidth: '10',
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
                background: `${isDarkMode ? '#3A579E' : '#adc8c8'}`,
                border: 'none',
              },
            },
          });
        });

        setGroups(groupData);
        setItems(itemData);
      }
    }
  }, [tasks, isDarkMode]);

  const handleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };

  return (
    width > 600 && (
      <React.Fragment>
        <div
          className={`${styles.calendar} ${
            isDarkMode && styles['calendar-dark']
          }`}
        >
          Timeline Calendar
          <button className={styles.togglebtn} onClick={handleDisplay}>
            {isDisplayed ? (
              <GoIcons.GoTriangleUp
                className={`${styles.toggleicon} ${
                  isDarkMode && styles['toggleicon-dark']
                }`}
              />
            ) : (
              <IoIcons.IoCalendarOutline
                className={`${styles.toggleicon} ${
                  isDarkMode && styles['toggleicon-dark']
                }`}
              />
            )}
          </button>
        </div>

        {isDisplayed && (
          <div className={styles.timeline}>
            <Timeline
              groups={groups}
              items={items}
              defaultTimeStart={moment().add(-1, 'days')}
              defaultTimeEnd={moment().add(timeEnd, 'days')}
            >
              <TimelineHeaders style={{ background: 'none' }}>
                <SidebarHeader
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  {({ getRootProps }) => {
                    return <div {...getRootProps()}></div>;
                  }}
                </SidebarHeader>
                <DateHeader
                  unit={dateHeaderMain}
                  className={styles['date-header']}
                  style={{
                    color: '#274c4b',
                    fontWeight: 'bold',
                  }}
                ></DateHeader>
                <DateHeader
                  unit={dateHeaderSub}
                  className={styles['date-header-sub']}
                ></DateHeader>
              </TimelineHeaders>
            </Timeline>
          </div>
        )}
      </React.Fragment>
    )
  );
};

export default TimelineCalendar;

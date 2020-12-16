import React, {useState} from 'react';
import Calendar from 'react-calendar';

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="col-3" id="calendarComponent">
      <div id="rightComponent" className="row">
        <div className="col-12">
          <Calendar
            onChange={onChange}
            value={value}
          />
        </div>
        <div id="footer">
          <div className="footer-copyright text-center py-3">© 2020 Joanna Biała
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarComponent;
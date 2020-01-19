import React, {useState} from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {useSelector} from "react-redux";

// export class CalendarComponent extends React.Component {
//   static defaultProps = {
//     numberOfMonths: 1,
//   };
//
//   constructor(props) {
//     super(props);
//     this.handleDayClick = this.handleDayClick.bind(this);
//     this.handleResetClick = this.handleResetClick.bind(this);
//     this.state = this.getInitialState();
//   }
//
//   getInitialState() {
//     return {
//       from: undefined,
//       to: new Date(),
//     };
//   }
//
//   handleDayClick(day) {
//     const range = DateUtils.addDayToRange(day, this.state);
//     this.setState(range);
//   }
//
//   handleResetClick() {
//     this.setState(this.getInitialState());
//   }
//
//   render() {
//     const { from, to } = this.state;
//     const modifiers = { start: from, end: to };
//     return (
//       <div className="RangeExample">
//         <p>
//           {!from && !to && 'Please select the first day.'}
//           {from && !to && 'Please select the last day.'}
//           {from &&
//             to &&
//             `Selected from ${from.toLocaleDateString()} to
//                 ${to.toLocaleDateString()}`}{' '}
//           {from && to && (
//             <button className="link" onClick={this.handleResetClick}>
//               Reset
//             </button>
//           )}
//         </p>
//         <DayPicker
//           className="Selectable"
//           numberOfMonths={this.props.numberOfMonths}
//           selectedDays={[from, { from, to }]}
//           modifiers={modifiers}
//           onDayClick={this.handleDayClick}
//         />
//         <Helmet>
//           <style>{`
//   .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
//     background-color: #f0f8ff !important;
//     color: #4a90e2;
//   }
//   .Selectable .DayPicker-Day {
//     border-radius: 0 !important;
//   }
//   .Selectable .DayPicker-Day--start {
//     border-top-left-radius: 50% !important;
//     border-bottom-left-radius: 50% !important;
//   }
//   .Selectable .DayPicker-Day--end {
//     border-top-right-radius: 50% !important;
//     border-bottom-right-radius: 50% !important;
//   }
// `}</style>
//         </Helmet>
//       </div>
//     );
//   }
// }

export const CalendarComponent = () => {

  const initialFrom = useSelector(state => state.from);
  const [from, setFrom] = useState(initialFrom);

  const initialUntil = useSelector(state => state.until);
  const [until, setUntil] = useState(initialUntil);

  let state = {
    from: from,
    until: until
  };

  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, state);
    this.setState(range);
  };

  const handleResetClick = () => {
    setFrom(initialFrom);
    setUntil(initialUntil);
  };


  const modifiers = { start: from, end: until };

    return (
      <div className="RangeExample">
        <p>
          {!from && !until && 'Please select the first day.'}
          {from && !until && 'Please select the last day.'}
          {from &&
            until &&
            `Selected from ${from.toLocaleDateString()} to
                ${until.toLocaleDateString()}`}{' '}
          {from && until && (
            <button className="link" onClick={handleResetClick}>
              Reset
            </button>
          )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={1}
          selectedDays={[from, { from, until }]}
          modifiers={modifiers}
          onDayClick={handleDayClick}
        />
        <Helmet>
          <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>
      </div>
    );

}
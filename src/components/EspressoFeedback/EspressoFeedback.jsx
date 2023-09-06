import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Statistics/Notification';
import { EspressoFeedbackWrapper } from './EspressoFeedback.styled';

export const EspressoFeedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((item, acc) => acc + item, 0);
  };
  const handlerClick = key => {
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('Error');
    }
  };

  return (
    <>
      <EspressoFeedbackWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={handlerClick}
          />
        </Section>
        <Section title="Statistics">
          {!countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countTotalFeedback()}
            />
          )}
        </Section>
      </EspressoFeedbackWrapper>
    </>
  );
};
// export class OldEspressoFeedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((item, acc) => acc + item, 0);
//   };

//   countPositiveFeedbackPercentage = () => {};
//   handlerClick = evt => {
//     this.setState(prevState => ({
//       [evt.target.value]: prevState[evt.target.value] + 1,
//     }));
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <EspressoFeedbackWrapper>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={this.state}
//               onLeaveFeedback={this.handlerClick}
//             />
//           </Section>
//           <Section title="Statistics">
//             {!this.countTotalFeedback() ? (
//               <Notification message="There is no feedback" />
//             ) : (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={this.countTotalFeedback()}
//                 positivePercentage={this.countTotalFeedback()}
//               />
//             )}
//           </Section>
//         </EspressoFeedbackWrapper>
//       </>
//     );
//   }
// }

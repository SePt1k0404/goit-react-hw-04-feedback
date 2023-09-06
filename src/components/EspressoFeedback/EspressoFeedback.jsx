import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Statistics/Notification';
import { EspressoFeedbackWrapper } from './EspressoFeedback.styled';

export class EspressoFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((item, acc) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {};
  handlerClick = evt => {
    this.setState(prevState => ({
      [evt.target.value]: prevState[evt.target.value] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <EspressoFeedbackWrapper>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handlerClick}
            />
          </Section>
          <Section title="Statistics">
            {!this.countTotalFeedback() ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countTotalFeedback()}
              />
            )}
          </Section>
        </EspressoFeedbackWrapper>
      </>
    );
  }
}

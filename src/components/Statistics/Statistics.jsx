import { nanoid } from 'nanoid';

import {
  FeedbackStatisticsWrapper,
  FeedbackStatisticsItem,
} from './Statistics.styled';

export const Statistics = props => {
  const good = props.good;
  const optionsArr = Object.entries(props).map(el => {
    const keyId = nanoid();
    if (el[0] !== 'positivePercentage') {
      return (
        <FeedbackStatisticsItem key={keyId} value={el[0]}>
          <p>
            {el[0][0].toUpperCase() + el[0].slice(1, el[0].length)}: {el[1]}
          </p>
        </FeedbackStatisticsItem>
      );
    }
    return (
      <FeedbackStatisticsItem key={keyId} value={el[0]}>
        <p>
          Positive feedback: {!good ? 0 : ((good / el[1]) * 100).toFixed(0)}%
        </p>
      </FeedbackStatisticsItem>
    );
  });

  return (
    <>
      <FeedbackStatisticsWrapper>{optionsArr}</FeedbackStatisticsWrapper>
    </>
  );
};

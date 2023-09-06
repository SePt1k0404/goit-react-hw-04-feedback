import { nanoid } from 'nanoid';

import {
  FeedbackOptionsWrapper,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options).map(el => {
    const keyId = nanoid();
    return (
      <li key={keyId}>
        <FeedbackOptionsButton
          type="button"
          value={el}
          onClick={onLeaveFeedback}
        >
          {el[0].toUpperCase() + el.slice(1, el.length)}
        </FeedbackOptionsButton>
      </li>
    );
  });
  return (
    <>
      <FeedbackOptionsWrapper>{optionsKeys}</FeedbackOptionsWrapper>
    </>
  );
};

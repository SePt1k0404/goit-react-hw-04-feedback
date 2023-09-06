import styled from 'styled-components';
import {
  getValue,
  getColorFromValue,
} from '../FeedbackOptions/FeedbackOptions.styled';

export const FeedbackStatisticsWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
`;

export const FeedbackStatisticsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 25px;
  background-color: ${getValue};
  color: ${getColorFromValue};
`;

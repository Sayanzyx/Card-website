import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: calc(100% + 4rem);
  padding: 1rem;
  margin-left: -2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textHover};
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Header = styled.div`
  margin: 0;
  margin-bottom: 10px;
`;

export const Activity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ActivityImageWrapper = styled.div`
  position: relative;
  height: 50px;
  margin-right: 12px;
`;

export const ActivityLargeImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const ActivitySmallImage = styled.img`
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const ActivityInfo = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

export const ActivityTitle = styled.h5`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ActivityParagraph = styled.p`
  font-size: 0.875rem;
  line-height: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

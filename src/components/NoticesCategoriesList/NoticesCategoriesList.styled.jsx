import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[3] * 3 + 'px'};

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${({ theme }) => theme.space[5] + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ListItem = styled.li`
  border-radius: 0px 0px 40px 40px;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  transition: box-shadow 300ms ${({ theme }) => theme.transition.main};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  background-image: url(${({ bgi }) => bgi});
  background-position: center;
  background-size: cover;

  max-width: 100%;
  height: 288px;
`;

export const Category = styled.p`
  position: absolute;
  top: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 126px;
  max-height: 32px;
  padding: ${({ theme }) => theme.space[3] + 3 + 'px'} 0;

  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: inherit;
  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0px 16px 16px 0px;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: ${({ theme, inFavorite }) =>
    inFavorite ? theme.colors.blue : theme.colors.lightBlue};
  border: none;
  border-radius: 50%;

  transition: background-color 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  & svg {
    stroke: ${({ theme, inFavorite }) =>
      inFavorite ? '#fff' : theme.colors.blue};

    transition: stroke 300ms ${({ theme }) => theme.transition.main};
  }

  &:hover svg,
  &:focus svg {
    stroke: #fff;
  }
`;

export const DeleteBtn = styled(FavoriteBtn)`
  top: 68px;
  right: 12px;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-bottom: ${({ theme }) => theme.space[2] * 3 + 'px'};
`;

export const Info = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2] + 'px'};

  min-width: 80px;
  padding: ${({ theme }) => `${theme.space[1]}px ${theme.space[3]}px`};

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  border-radius: 16px;

  & svg {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

export const AgeInfo = styled(Info)`
  color: ${({ theme, inRange }) =>
    inRange ? theme.colors.white : theme.colors.black};

  background-color: ${({ theme, inRange }) =>
    inRange ? theme.colors.blue : theme.colors.lightBlue};

  & svg {
    stroke: ${({ theme, inRange }) =>
      inRange ? theme.colors.white : theme.colors.blue};
  }
`;

export const GenderInfo = styled(Info)`
  color: ${({ theme, inRange }) =>
    inRange ? theme.colors.white : theme.colors.black};

  background-color: ${({ theme, inRange }) =>
    inRange ? theme.colors.blue : theme.colors.lightBlue};

  & svg {
    stroke: ${({ theme, inRange }) =>
      inRange ? theme.colors.white : theme.colors.blue};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[4] + 4 + 'px'};

  padding: ${({ theme }) => theme.space[4] + 4 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[3] * 3 + 'px'};

  background-color: #fff;
  border-radius: 0px 0px 40px 40px;
`;

export const Comments = styled.h3`
  width: 100%;
  height: 66px;

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-align: left;

  overflow: hidden;
`;


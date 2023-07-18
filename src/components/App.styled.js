import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Ul = styled.ul`
  margin-top: 24px;
  list-style-type: none;
  padding-left: 16px;
`;

export const Li = styled.li`
  margin-block: 8px;
  font-size: 1.2em;
  transition: 0.2s;

  &:hover {
    transform: translateX(10px);
  }

  & a {
    text-decoration: none;
    color: black;
    transition: 0.2s;

    &:hover,
    &:active {
      color: orangered;
    }
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  margin-left: 12px;
  padding: 10px 20px;
  background-color: rgb(255, 69, 0);
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Button = styled.button`
  display: inline-block;
  margin-bottom: 20px;
  margin-right: 12px;
  padding: 8px 16px;
  background-color: rgb(255, 69, 0);
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  transition: 0.2s;
  color: white;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 10px 10px;
  background-color: rgba(255, 69, 0, 0.1);
  border-radius: 10px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const GridList = styled.ul`
  margin-top: 28px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  list-style-type: none;

  & li img {
    display: block;
    width: 100%;
  }
`;

export const BoldParagraph = styled.p`
  font-weight: bold;
  color: orangered;
  font-size: 1.2em;
`;

export const BoldText = styled.span`
  font-weight: bold;
  font-size: 1.1em;
  color: orangered;
`;

import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      color: #ffffff;
      font-size: 18px;
      font-weight: bold;
    }

    input {
      background: rgba(255, 255, 255, 0.1);
      border: 0.664234px solid #ffffff;
      border-radius: 100px;
      color: #ffffff;
      line-height: 17px;
      margin-top: 35px;
      padding: 0 20px;
      vertical-align: middle;
      height: 45px;
      width: 315px;

      ::placeholder {
        color: #ffffff;
      }

      + span {
        font-size: 10px;
        color: #ed047c;
      }
    }

    button {
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 30px;
      border: none;
      background-color: #ed047c;
      color: #ffffff;
      margin-top: 23px;
      padding: 9px 44px;
      text-transform: uppercase;
      text-align: center;
      transition: all 0.8s ease;

      &:hover {
        background-color: ${darken(0.08, '#ed047c')};
      }
    }
  }
`;

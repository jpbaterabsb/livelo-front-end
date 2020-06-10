import styled from 'styled-components';

export const Container = styled.div`
  a {
    background: #ffffff;
    border: 2px solid #150958;
    border: none;
    color: #ff0095;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    padding: 5px 10px;
    width: 250px;
    height: 100px;
    transition: all 0.2s linear;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.2);
      transform: translateY(-3px);
    }

    .name {
      font-size: 16px;
      font-weight: bold;
    }

    .infos {
      display: flex;
      margin-top: -5px;

      .info {
        display: flex;
        align-items: baseline;
        margin-right: 10px;

        .value {
          font-size: 16px;
          font-weight: bold;
          margin-left: 5px;
        }
      }
    }
  }
`;

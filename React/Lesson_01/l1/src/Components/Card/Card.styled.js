import styled from "styled-components";

export const CardItem = styled.div`
  width: 25%;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid #eee;
  }
`;

export const CardThumb = styled.div`
  & img {
    width: 100%;
  }
`;

export const CardTitle = styled.p`
  position: relative;
  padding: 0 20px;
  height: 45px;
  &:before {
    content: "";
    width: 20px;
    height: 2px;
    background-color: #eabf00;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }
`;

export const CardPrice = styled.div`
  padding: 10px 0;
`;

export const BuyBtn = styled.button`
  display: block;
  width: 100%;
  background-color: ${(props) => (props.outlined ? "#fff" : "#1b1a20")};
  color: ${(props) => (props.outlined ? "#1b1a20" : "#fff")};
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 16px;
  border: ${(props) => (props.outlined ? "2px solid #1b1a20" : "none")};

  &:hover {
    background-color: #eabf00;
  }
`;

export const CardStopper = styled.div`
  position: absolute;
  color: #ececec;
  top: 10px;
  right: 10px;
  padding: 5px;
  font-size: 0.6em;
  background-color: #1b1a20;
  cursor: default;
`;

// export const BuyBtn = styled.button`
//   display: block;
//   width: 100%;
//   background-color: "#1b1a20";
//   color: "#fff";
//   padding: 15px 0;
//   margin-top: 10px;
//   cursor: pointer;
//   transition: background-color 0.2s;
//   font-size: 16px;
//   border: "none";

//   &.primary {
//     color: #fff;
//     background: #337ab7;
//     border-color: #2e6da4;
//   }
//   &.success {
//     color: #fff;
//     background-color: #5cb85c;
//     border-color: #4cae4c;
//   }

//   &.large {
//     font-size: 1.2em;
//     padding: 10px 16px;
//     border-radius: 6px;
//   }
//   &.disabled {
//     color: #ddd;
//     background-color: #aaa;
//     border: 1px solid #aaa;
//   }

//   &:hover {
//     background-color: #eabf00;
//   }
// `;

export const BuyBtnPrimary = styled(BuyBtn)`
  color: ${(props) => (props.outlined ? "#2e6da4" : "#fff")};
  background: ${(props) => (props.outlined ? "#fff" : "#337ab7")};
  border-color: #2e6da4;
`;

export const BuyBtnSuccess = styled(BuyBtn)`
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
`;

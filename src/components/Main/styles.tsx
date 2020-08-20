import styled from "styled-components";

export const Title = styled.div`
   font-size: 3rem;
   font-weight: 600;
   color: #fff;
   text-align: center;
   background-color: #7754f8;
`;

export const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

   background: #ffffff;
   border-radius: 4px;
   box-sizing: border-box;

   -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
   -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
   box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledCardBody = styled.div`
   margin-bottom: 1rem;
`;

export const StyledCardPhotoContainer = styled.div`
   align-items: center;
   background-color: #ecf1f5;
   border-radius: 4px 4px 0 0;
   display: flex;
   height: 110px;
   justify-content: center;
`;

export const StyledName = styled.p`
   color: #090f34;
   font-size: 24px;
   font-weight: bold;
   margin: 0;
   text-align: center;
   text-transform: capitalize;
   border-radius: 2px;
   padding: 0.5rem;
`;

export const SearchContainer = styled.div`
   display: flex;
   align-content: center;
   justify-content: center;
   margin-top: 2rem;
`;

export const Button = styled.button`
   background-color: #090f34;
   border-radius: 3px;
   border: none;
   color: #fff;
   padding: 1rem;
   cursor: pointer;
   outline: none;
   margin-top: 0.5rem;
`;

export const Input = styled.input`
   width: 10rem;
   margin-top: 1rem;
`;

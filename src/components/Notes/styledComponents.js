import styled from 'styled-components'

export const BgCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   min-height: 100vh;
`

export const NoteCon = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   width: 80%;
  //   max-width: 800px;
  //   //   border : 1px solid red
  //   margin-top: 35px;
  //   margin-bottom: 35px;

  display: flex;
  flex-direction: column;
  width: 80vw;
  margin-top: 48px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`
export const Title = styled.h1`
  font-family: 'Bree Serif';
  font-size: 30px;
  color: #4c63b6;
  margin-bottom: 40px;
`
export const TextCon = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  min-width: 550px;
  min-height: 200px;
  margin-bottom: 30px;
`
export const TitleInput = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  color: #1e293b;
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 10px;
  margin-bottom: 30px;
`
export const TextArea = styled.textarea`
  font-family: 'Roboto';
  font-size: 14px;
  color: #1e293b;
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 10px;
`
export const AddButton = styled.button`
  height: 30px;
  width: 60px;
  background-color: #4c63b6;
  color: #ffff;
  font-family: 'Roboto';
  font-size: 14px;
  align-self: flex-end;
  margin-right: 35px;
  cursor: pointer;
`
export const UnOrderListCon = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  //   margin-top: 32px;
  //   padding-left: 0;
  list-style-type: none;
`

export const NoResultCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const Image = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 15px;
`
export const NoResultTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: #334155;
  font-weight: 700;
`
export const NoResultSubTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  font-weight: 500;
`

import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 65%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  align-items: center;
`
export const Option = styled.h1`
  font-size: 16px;
  font-family: 'Bree Serif';
  font-weight: 700;
  color: #ffffff;
`
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
`
export const ScorePhrase = styled.p`
  font-size: 16px;
  font-family: 'Bree Serif';
  font-weight: 700;
  color: #223a5f;
`
export const ScoreNumber = styled.p`
  font-size: 28px;
  font-family: 'Bree Serif';
  font-weight: 700;
  color: #223a5f;
`
export const GameViewContainer = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GameOptionsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 0px;
  margin-left: 0px;
  max-width: 480px;
  flex-wrap: wrap;
`
export const TriggerButton = styled.button`
  font-size: 16px;
  font-family: 'Bree Serif';
  font-weight: 400;
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
export const PopUpImage = styled.img`
  width: 90%;
  align-self: center;
`
export const PopUpBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`
export const GameResultViewContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 560px;
  flex-direction: column;
`
export const SelectedOptionsContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  max-width: 600px;
`
export const GameUserOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const GameParticipantText = styled.p`
  font-size: 20px;
  font-family: 'Bree Serif';
  font-weight: 700;
  color: #ffffff;
`
export const GameParticipantChoiceImage = styled.img`
  width: 170px;
  height: 170px;
`
export const ResultText = styled.p`
  font-size: 24px;
  font-family: 'Bree Serif';
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`
export const PlayAgainButton = styled.button`
  font-size: 16px;
  font-family: 'Bree Serif';
  font-weight: 400;
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
`

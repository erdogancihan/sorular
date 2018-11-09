import React from "react";

const ViewQuestion = ({question, handleQuestionEdit}) => {
    return (
      <React.Fragment>
    <tr>      
      <td>{question.topic}</td>
      <td>{question.timesAsked}</td>
      <td>{question.point}</td>
      <td>{question.correctAnswerRatio} %</td>
      <td><button onClick={()=>{handleQuestionEdit(question.id)}}>Düzenle</button></td>     
    </tr>
    </React.Fragment>
     
    
  );
};

export default ViewQuestion;

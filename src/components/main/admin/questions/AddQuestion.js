import React from "react";

//unchecks the radio buttons according to selected question for edit.
let radioButtons = document.getElementsByName("cevap");
const resetRadioButtons = () => {
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
};

const AddQuestion = ({
  formControl,
  question,
  handleView,
  handleChange,
  handleSubmit,
  handleQuestionDelete
}) => {

  
  //checks the radio button according to selected question for edit.
  if (formControl.buttonText === "Düzenle") {
    let correctAnswer = question.correctAnswer;

    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = radioButtons[i].value === correctAnswer;
    }
  }

  return (
    <div className="container">
      <button
        className={formControl.addQuestionButton}
        onClick={e => {
          handleView(e);
          resetRadioButtons();
        }}
      >
        Soru Ekle
      </button>
      <div className={formControl.visible}>
        <form>
          <div className="form-group">
            <label htmlFor="Textarea1">Konu Seçiniz.</label>
            <select
              className="form-control"
              id="topic"
              onChange={handleChange}
              value={question.topic}
            >
              <option value="">Seçiniz</option>
              <option value="tarih">Tarih</option>
              <option value="matematik">Matematik</option>
              <option value="cografya">Coğrafya</option>
            </select>
          </div>
          <div className="form-group inline-form">
            <label htmlFor="puan">Soru Puanı Giriniz.</label>
            <input
              type="number"
              step="5"
              id="point"
              className="form-control"
              placeholder="Puan"
              value={question.point}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Textarea1">Soruyu Giriniz.</label>
            <textarea
              className="form-control"
              id="questionText"
              rows="2"
              placeholder="Soruyu giriniz."
              value={question.questionText}
              onChange={handleChange}
            />
          </div>
          <label className="form-control">Seçenekleri Giriniz.</label>
          <div className="form-group inline-form">
            <div className="inline-form">
              <input
                type="text"
                id="answer1"
                className="form-control"
                placeholder="Seçenek 1"
                value={question.answer1}
                onChange={handleChange}
              />
            </div>
            <div className="inline-form">
              <label className="form-check-label" htmlFor="cevap">
                Doğru mu?
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="cevap"
                id="correctAnswer"
                value="answer1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group inline-form">
            <div className="inline-form">
              <input
                type="text"
                id="answer2"
                className="form-control"
                placeholder="Seçenek 2"
                value={question.answer2}
                onChange={handleChange}
              />
            </div>
            <div className="inline-form">
              <label className="form-check-label" htmlFor="cevap">
                Doğru mu?
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="cevap"
                id="correctAnswer"
                value="answer2"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group inline-form">
            <div className="inline-form">
              <input
                type="text"
                id="answer3"
                className="form-control"
                placeholder="Seçenek 3"
                value={question.answer3}
                onChange={handleChange}
              />
            </div>
            <div className="inline-form">
              <label className="form-check-label" htmlFor="cevap">
                Doğru mu?
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="cevap"
                id="correctAnswer"
                value="answer3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group inline-form">
            <div className="inline-form">
              <input
                type="text"
                id="answer4"
                className="form-control"
                placeholder="Seçenek 4"
                value={question.answer4}
                onChange={handleChange}
              />
            </div>
            <div className="inline-form">
              <label className="form-check-label" htmlFor="cevap">
                Doğru mu?
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="cevap"
                id="correctAnswer"
                value="answer4"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <div className="inline-form">
          <button className="button" onClick={handleSubmit}>
            {formControl.buttonText}
          </button>
          <button
            className={formControl.deleteButton}
            onClick={() => {
              handleQuestionDelete(question.id);
            }}
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;

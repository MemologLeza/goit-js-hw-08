import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form");
const feedbackFormState = {
        email:"",
        message:""
};
 onUpdatePage();
 feedbackForm.addEventListener('input', throttle(OnFormInput, 500));
 feedbackForm.addEventListener('submit', OnFormSubmit);

function OnFormInput(evt) {
    
    feedbackFormState.email = feedbackForm.email.value;
    feedbackFormState.message = feedbackForm.message.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
};
   
function OnFormSubmit(evt) {
    evt.preventDefault();
    console.log(feedbackFormState);
    feedbackForm.reset();
    localStorage.removeItem("feedback-form-state");
}

function onUpdatePage() {
    const saveFeedbackFormState = localStorage.getItem("feedback-form-state");
    let parseSaveFeedbackFormState = "";
    try {
        parseSaveFeedbackFormState = JSON.parse(saveFeedbackFormState);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    };
    if (parseSaveFeedbackFormState) {
         feedbackForm.email.value = parseSaveFeedbackFormState.email? parseSaveFeedbackFormState.email:"";
         feedbackForm.message.value = parseSaveFeedbackFormState.message? parseSaveFeedbackFormState.message:"";
    };

};
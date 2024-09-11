const contactFormWrapper = document.querySelector('.contact-form__inner');
const contactFormSection = document.querySelector('.contact-form__form');

contactFormSection.style.opacity = '0';
contactFormSection.style.display = 'none';

const ctaSection = document.createElement('div');
ctaSection.classList.add('cta-section');
ctaSection.innerHTML = `<div>
      <h2>Hello Conversion!</h2>
      <p>Click on the button below to Contact Us!</p>
      <div>
        <button id="modalControl"> <span>Click Here</span></button>
      </div>
    </div>`;

contactFormWrapper.appendChild(ctaSection);

// Get the button that opens the modal
var modalBtn = document.getElementById('modalControl');

// When the user clicks the button, open the modal
modalBtn.onclick = function () {
  fadeOut(ctaSection);
  contactFormSection.style.display = 'block';
  fadeIn(contactFormSection);
};

//Fade In Animation
window.onload = fadeIn(ctaSection);

function fadeIn(element) {
  var fade = element;
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.3;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 50);
}

//Fade Out Animation
function fadeOut(element) {
  var fade = element;
  var opacity = 1;
  var intervalID = setInterval(function () {
    if (opacity > 0) {
      opacity = opacity - 0.2;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 50);
}

const closeBtn = document.createElement('span');
closeBtn.classList.add('close');
closeBtn.innerHTML = '&times;';

contactFormSection.prepend(closeBtn);

// When the user clicks on x, close the modal
closeBtn.onclick = function () {
  fadeOut(contactFormSection);
  contactFormSection.style.display = 'none';
  fadeIn(ctaSection);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == document.body) {
    fadeOut(contactFormSection);
    contactFormSection.style.display = 'none';
    fadeIn(ctaSection);
  }
};

setTimeout(() => {
  // Reformulating Form to Steps
  const contactForm = document.querySelector(
    '#hsForm_e259701f-aa68-4328-8ebf-013c47468869'
  );

  const formFieldsFull = document.querySelectorAll(
    '#hsForm_e259701f-aa68-4328-8ebf-013c47468869 fieldset'
  );

  const formBtnWrapper = document.querySelector(
    '#hsForm_e259701f-aa68-4328-8ebf-013c47468869 .hs_submit'
  );

  const formBtn = document.querySelector(
    '#hsForm_e259701f-aa68-4328-8ebf-013c47468869 input'
  );

  const formWrapper = document.querySelector('.hbspt-form');

  formFieldsFull[2].style.display = 'none';
  formFieldsFull[3].style.display = 'none';
  formFieldsFull[4].style.display = 'none';
  formBtnWrapper.style.display = 'none';

  const firstStepBtn = document.createElement('div');
  firstStepBtn.classList.add('stepBtn');

  firstStepBtn.innerHTML = `<div class="stepsWrapper">
        <button id="prevStep"> Prev</button>
        <button id="nextStep"> Next</button>
    </div>`;

  const stepsTop = document.createElement('div');
  stepsTop.classList.add('stepsTop');
  stepsTop.innerHTML = `<div class="step1 active">1</div>
  <div class="step2">2</div>
  <div class="step3">3</div>`;

  formWrapper.appendChild(firstStepBtn);
  formWrapper.prepend(stepsTop);

  if (formFieldsFull[2].style.display == 'none') {
    document.getElementById('prevStep').style.display = 'none';
  }

  const firstNameInput = document.getElementById(
    'firstname-e259701f-aa68-4328-8ebf-013c47468869'
  );
  const emailNameInput = document.getElementById(
    'email-e259701f-aa68-4328-8ebf-013c47468869'
  );

  const nextStepBtn = document.getElementById('nextStep');
  const prevStepBtn = document.getElementById('prevStep');

  //form Check Input
  function isEmpty(str) {
    return !str.trim().length;
  }

  var firstNameEmpty;
  var EmailEmpty;

  //Set boolean on load
  if (isEmpty(firstNameInput.value)) {
    firstNameEmpty = true;
    nextStepBtn.setAttribute('disabled', 'true');
  } else {
    firstNameEmpty = false;
    nextStepBtn.removeAttribute('disabled');
  }

  if (isEmpty(emailNameInput.value)) {
    EmailEmpty = true;
    nextStepBtn.setAttribute('disabled', 'true');
  } else {
    EmailEmpty = false;
    nextStepBtn.removeAttribute('disabled');
  }

  //Check Required Fields on first Step
  firstNameInput.addEventListener('input', function () {
    if (isEmpty(this.value)) {
      firstNameEmpty = true;
      if (firstNameEmpty || EmailEmpty) {
        nextStepBtn.setAttribute('disabled', 'true');
      }
    } else {
      firstNameEmpty = false;
      if (!firstNameEmpty && !EmailEmpty) {
        nextStepBtn.removeAttribute('disabled');
      }
    }
  });

  emailNameInput.addEventListener('input', function () {
    console.log(this.value);
    if (isEmpty(this.value)) {
      EmailEmpty = true;
      if (firstNameEmpty || EmailEmpty) {
        nextStepBtn.setAttribute('disabled', 'true');
      }
    } else {
      EmailEmpty = false;
      if (!firstNameEmpty && !EmailEmpty) {
        nextStepBtn.removeAttribute('disabled');
      }
    }
  });

  //Bar Animation Up
  function barGrow(element) {
    var barSize = 0;
    var barInterval = setInterval(function () {
      if (barSize < 40) {
        barSize = barSize + 5;
        element.style.setProperty('--barWidth', barSize + '%');
      } else {
        clearInterval(barInterval);
      }
    }, 50);
  }

  //Bar Animation Return
  function barReturn(element) {
    var barSize = 40;
    var barInterval = setInterval(function () {
      if (barSize > 0) {
        barSize = barSize - 5;
        element.style.setProperty('--barWidth', barSize + '%');
      } else {
        clearInterval(barInterval);
        element.classList.remove('active');
      }
    }, 50);
  }

  nextStepBtn.addEventListener('click', function () {
    prevStepBtn.style.display = 'block';
    nextStepBtn.innerHTML = 'Submit';
    document.querySelector('.step2').classList.add('active');
    document.querySelector('.step1').innerHTML =
      '1<span class="checkMark">✔</span>';

    barGrow(document.querySelector('.step2'));

    formFieldsFull[0].style.display = 'none';
    formFieldsFull[1].style.display = 'none';
    formFieldsFull[2].style.display = 'block';
    formFieldsFull[3].style.display = 'block';
    formFieldsFull[4].style.display = 'block';
  });

  prevStepBtn.addEventListener('click', function () {
    prevStepBtn.style.display = 'none';
    nextStepBtn.innerHTML = 'Next';
    document.querySelector('.step1').innerHTML = '1';

    barReturn(document.querySelector('.step2.active'));

    formFieldsFull[2].style.display = 'none';
    formFieldsFull[3].style.display = 'none';
    formFieldsFull[4].style.display = 'none';
    formFieldsFull[0].style.display = 'block';
    formFieldsFull[1].style.display = 'block';
  });
}, 1500);

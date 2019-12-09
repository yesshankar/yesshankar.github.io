const contactForm = document.getElementById("contact-form");
const submitButton = contactForm.querySelector("button[type=submit]");
const messageStatus = document.getElementById("message-status");
const apiUrl = "https://api-skhatri-xyz.herokuapp.com/email/contact-form";
// const apiUrl = "http://localhost:3333/email/contact-form";

contactForm.addEventListener("submit", async e => {
  e.preventDefault();
  submitButton.setAttribute("disabled", "");
  messageStatus.innerText = "Sending message........";

  const formData = new FormData(contactForm);
  const formDataObj = {};

  for (const pair of formData.entries()) {
    formDataObj[pair[0]] = pair[1];
  }

  const response = await sendFormData(formDataObj, apiUrl);

  if (response.Status === "success") {
    messageStatus.innerText = "Message sent successfully!!";
    messageStatus.style.color = "green";
  } else {
    messageStatus.innerText =
      "Sorry! Unable to send message. Someting went wrong, please contact via other method";
    messageStatus.style.color = "red";
  }

  submitButton.removeAttribute("disabled");

  setTimeout(() => {
    messageStatus.style.visibility = "hidden";
  }, 10000);
});

async function sendFormData(data, url) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return await response.json();
}

let typingP = document.getElementById("typing");

typeWord(typingP, "{Software_Developer}");

setInterval(() => {
  typeWord(typingP, "{Software_Developer}");
}, 5000);

function typeWord(elem, word) {
  elem.innerText = word.charAt(0);

  for (let index = 1; index < word.length; index++) {
    setTimeout(() => {
      elem.innerText += word.charAt(index);
    }, (index + 1) * 100);
  }
}

function openAlert(message) {
  message ? alert(message) : alert("Clicked!");
}

function buttonClickedAlert(buttonName = null) {
  let message = "Clicked!";
  message = buttonName ? `Clicked on the '${buttonName}' button` : "Clicked!";
  openAlert(message);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1).toString();
}

function updateAttributeValue() {
  const btn = document.getElementById("reload_data");
  const existingId = btn.getAttribute("id");
  btn.setAttribute("id", existingId + "_" + getRandomNumber());
}

function showPrompt(message = null) {
  var message = message || "Input Text";
  while (true) {
    const userInput = prompt(message);
    if (userInput.trim()) {
      const promptTextElement = document.getElementById("prompt-text");
      if (promptTextElement) {
        promptTextElement.innerText = `\`${userInput}\``;
        return;
      }
      $("#test-prompt").after(`&nbsp;
      <p style="margin-left: 50px">
        Prompt input:
        <span id="prompt-text">\`${userInput}\`</span>
      </p>`);
      return;
    }
    message = "Hey! Enter some text";
  }
}

function showFileUploadAlert() {
  const fileUpload = document.getElementById("uploadFile");
  console.log(fileUpload);
  const isFileUploaded = fileUpload.value != "";
  console.log(isFileUploaded);
  const message = isFileUploaded ? "Uploaded successfully" : "Upload aborted";
  console.log(message);
  openAlert(message);
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function createDynamicButton() {
  await delay(5000);
  $("button[id^='reload_data']").after(
    `&nbsp; <button id="dynamic_btn" onclick="buttonClickedAlert('Dynamic')">Dynamic Button</button>`
  );
}

function handleRightClick() {
  alert("Right click");
  event.preventDefault();
}

async function enableSendSmsButton() {
  const SEND_SMS = document.getElementById("send-sms");
  const ACTUAL_TEXT = SEND_SMS.innerText;
  for (let index = 10; index >= 0; index--) {
    await delay(1000);
    SEND_SMS.innerText = `${ACTUAL_TEXT} (${index})`;
  }
  SEND_SMS.innerText = ACTUAL_TEXT;
  SEND_SMS.removeAttribute("disabled");
}

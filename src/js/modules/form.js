const sendForm = (formBlock, inputBlock, content) => {
  const form = document.querySelector(formBlock);
  const inputs = document.querySelectorAll(inputBlock);
  const contentBlock = document.querySelector(content);

  const message = {
    success: "Спасибо, скоро свяжемся",
    loading: "Отправляю...",
    failed: "Что-то пошло не так"
  }

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
      body: data
    })
    return await res.text()
  }

  function clearInputs() {
    inputs.forEach(el => {
      el.value = '';
    })
  }

  const resultMessage = document.createElement('h2');
  resultMessage.classList.add('result-title');
  resultMessage.style.cssText = `
    font-size: 32px;
    line-height: 100%;
    font-weight: 700;
    max-width: 400px;
    margin-top: 40px;
    color: #333;
  `;


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    form.remove();

    contentBlock.append(resultMessage);
    resultMessage.textContent = message.loading;

    postData('server.php', formData)
      .then(res => {
        console.log(formData);
        resultMessage.textContent = message.success;
      })
      .catch(err => {
        console.log(err);
        resultMessage.textContent = message.failed;
      })
      .finally(() => {
        setTimeout(() => {
          clearInputs();
          resultMessage.remove();
          contentBlock.append(form)
        }, 3000)
      })

  })

}
export default sendForm;
// 创建登录用户列表,自动填写账号密码并登录
createLoginItem('test_buttonArea1', '页面button显示名1')
$("#test_buttonArea1").click(() => {
    setValue("#IAMAccountInputId", "租户名");
    setValue("#IAMUsernameInputId", "IAM用户名");
    setValue("#IAMPasswordInputId", "IAM用户密码");
    $("#loginBtn").click();
})

// 创建登录用户列表,自动填写账号密码并登录
createLoginItem('test_buttonArea2', '页面button显示名2')
$("#test_buttonArea2").click(() => {
    setValue("#IAMAccountInputId", "租户名");
    setValue("#IAMUsernameInputId", "IAM用户名");
    setValue("#IAMPasswordInputId", "IAM用户密码");
    $("#loginBtn").click();
})

// 创建登录用户列表,自动填写账号密码并登录
createLoginItem('test_buttonArea3', '页面button显示名3')
$("#test_buttonArea3").click(() => {
    setValue("#IAMAccountInputId", "租户名");
    setValue("#IAMUsernameInputId", "IAM用户名");
    setValue("#IAMPasswordInputId", "IAM用户密码");
    $("#loginBtn").click();
})

function setValue(selector, text) {
    const inputElement = document.querySelector(selector);
    inputElement.focus();
    var ev = new Event('input', { bubbles: true});
    ev.simulated = true;
    inputElement.value = text;
    inputElement.dispatchEvent(ev);
}

function createLoginItem(id, label_name) {
    const loginFormDiv = document.querySelector('.loginFormDiv');
    const buttonAreaDiv = document.createElement('div');
    buttonAreaDiv.classList.add('buttonAreaDiv');
    const test_buttonArea = document.createElement('div');
    test_buttonArea.id = id;
    const loginBtnDiv = document.createElement('div');
    loginBtnDiv.classList.add('loginBtn');
    const loginBtnSpan = document.createElement('span');
    loginBtnSpan.textContent = label_name;
    loginBtnDiv.appendChild(loginBtnSpan);
    test_buttonArea.appendChild(loginBtnDiv);
    buttonAreaDiv.appendChild(test_buttonArea);
    loginFormDiv.appendChild(buttonAreaDiv);
}

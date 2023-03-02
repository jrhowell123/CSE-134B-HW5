export function showDialog() {
    alertDialog.showModal();
  }

export function showConfirmDialog() {
    confirmDialog.showModal();
}
export function showPromptDialog() {
    promptDialog.showModal();
}

export function confirmed() {
    const result = true
    document.getElementById('change').innerHTML = `The value returned by the confirm method is: ${result}`;
}

export function notConfirmed() {
    const result = false
    document.getElementById('change').innerHTML = `The value returned by the confirm method is: ${result}`;
}

export function promptInput(param,param1) {
    param1.innerHTML = param.value;
}

export function promptCancel(param) {
    param.innerHTML = 'No Input!';
}
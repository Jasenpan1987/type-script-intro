
function getInputValue (elementId: string): string {
    let inputElement = <HTMLInputElement>document.getElementById(elementId);
    
    return inputElement.value;
}

function addListener (elemId: string, callback: ()=>void) {
    document.getElementById(elemId)!.addEventListener("click", callback);
}

function logger (message: string): void {
    console.log(message);
}

export { getInputValue as getValue, logger, addListener };
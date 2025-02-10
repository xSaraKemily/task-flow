export function getCurrentTheme(): void {
   
console.log("Tema atual:",  document.querySelector('html')?.getAttribute('data-theme'));
    
}
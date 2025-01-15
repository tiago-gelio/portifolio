import '../app/app.js'

const main = document.querySelector('body')

const copyright = ' &copy; ' + new Date().getFullYear() + ' Copyright' + 
                  ' Todos os direitos reservados  <div>Desenvolvido por <a href="https://github.com/tiago-gelio" target="_blank"> ' + 
                  ' &lt; Tiago_Gélio /&gt;</a> </div>' 

main.innerHTML = `<div id="layout"> </div>`

// <div id="copyright">${copyright}</div>


async function loadPartial(url, elementId) {
  try { 
  const response = await fetch(url)
  const data = await response.text()
  document.getElementById(elementId).innerHTML = data;
    } catch (error) {
    console.error('Erro ao carregar o partial:', error)
  }
}

loadPartial('page/layout/layout.html', 'layout')

loadPartial('page/partials/Header/header.html', 'header')
loadPartial('page/partials/Section-Profile/section-profile.html', 'sessao-perfil')
//loadPartial('./page/partials/Footer/footer.html', 'footer')


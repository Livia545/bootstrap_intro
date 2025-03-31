// Referência para o botão de alternância
const toggleModeButton = document.getElementById('toggle-mode');

// Função para alternar entre os modos claro e escuro
const toggleMode = () => {
  // Alterna a classe "dark-mode" no body
  document.body.classList.toggle('dark-mode');
  
  // Verifica se o modo escuro está ativado
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Salva a preferência do tema no localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  
  // Atualiza o texto do botão conforme o modo
  toggleModeButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
};

// Verifica o tema salvo no localStorage e aplica ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  // Aplica o modo escuro ao body
  document.body.classList.add('dark-mode');
  toggleModeButton.textContent = 'Modo Claro';
} else {
  // Caso o tema seja claro, o botão estará configurado para alternar para o modo escuro
  toggleModeButton.textContent = 'Modo Escuro';
}

// Adiciona o ouvinte de evento ao botão de alternância
toggleModeButton.addEventListener('click', toggleMode);

const API_URL = 'http://localhost:3000/users';

// Detecta a página atual
const currentPage = window.location.pathname;

// Função para buscar usuários e preencher a tabela
async function fetchUsers() {
  const tbody = document.querySelector('tbody'); // Seleciona o corpo da tabela

  try {
    const response = await fetch(API_URL);
    const users = await response.json();

    tbody.innerHTML = ''; // Limpa a tabela antes de preencher

    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone || '-'}</td>
        <td>${user.profession || '-'}</td>
        <td>
          <button class="btn-delete" data-id="${user.id}">Excluir</button>
        </td>
      `;
      tbody.appendChild(row);
    });

    // Adiciona eventos para excluir usuários
    document.querySelectorAll('.btn-delete').forEach(button => {
      button.addEventListener('click', handleDelete);
    });
  } catch (error) {
    console.error('Erro ao carregar usuários:', error);
  }
}


// aqui----------------

// Função para enviar dados do formulário
async function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const user = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    profession: form.profession.value,
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      alert('Usuário cadastrado com sucesso!');
      form.reset();

      // Redireciona para a página de usuários
      window.location.href = 'users.html';
    } else {
      alert('Erro ao cadastrar usuário.');
    }
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
  }
}
// -----------------------
// Função para excluir usuários com confirmação
async function handleDelete(event) {
  const userId = event.target.getAttribute('data-id');

  // Mostra a mensagem de confirmação
  const confirmation = confirm('Tem certeza que deseja excluir este usuário?');

  
  // Se o usuário cancelar, não faz nada
  if (!confirmation) {
    return;
  }

    try {
      const response = await fetch(`${API_URL}/${userId}`, { method: 'DELETE' });

      if (response.ok) {
        alert('Usuário excluído com sucesso!');
        fetchUsers(); // Recarrega a lista de usuários
      } else {
        alert('Erro ao excluir usuário.');
      }
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  }

// Inicializa a lógica de cada página
if (currentPage.endsWith('users.html')) {
    fetchUsers(); // Carrega os usuários na tabela
  } else if (currentPage.endsWith('index.html')) {
    const form = document.getElementById('user-form');
    form.addEventListener('submit', handleFormSubmit);
  }

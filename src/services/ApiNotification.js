async function handleRequest(request, successMessage, errorMessage) {
    try {
      const response = await request();
     
      showNotification(successMessage, 'success');
      return response.data;
    } catch (error) {
      console.error(errorMessage, error);
      showNotification(errorMessage, 'danger');
      throw error;
    }
  }
  
 
  function showNotification(message, type) {
    // Criar o contêiner se não existir
    let notificationContainer = document.querySelector('.notification-container');
    if (!notificationContainer) {
      notificationContainer = document.createElement('div');
      notificationContainer.classList.add('notification-container');
      document.body.appendChild(notificationContainer);
    }
  
    // Criar a notificação
    const notification = document.createElement('div');
    notification.classList.add('alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show');
    notification.role = 'alert';
    notification.innerHTML = `
      <strong>${type === 'success' ? 'Sucesso!' : 'Erro!'}</strong> ${message}
     
    `;
  
    // Adicionar a notificação ao contêiner
    notificationContainer.appendChild(notification);
  
    // Remover a notificação após 5 segundos
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }
  
export default handleRequest
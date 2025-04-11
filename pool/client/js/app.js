document.addEventListener('DOMContentLoaded', () => {

    const baseUrl = 'http://localhost:3000/api/proyectos';
    
    const btnListar = document.getElementById('btn-listar');

    const btnCrear = document.getElementById('btn-crear');
    const btnActualizar = document.getElementById('btn-actualizar');
    const btnEliminar = document.getElementById('btn-eliminar');
    const usuarioForm = document.getElementById('usuario-form');
    const statusCodeElement = document.getElementById('status-code');
    const responseMessageElement = document.getElementById('response-message');
  
    // Función para mostrar respuesta
    function showResponse(statusCode, message) {
      statusCodeElement.textContent = statusCode;
      
      // Colores según el código de estado
      if (statusCode >= 200 && statusCode < 300) {
        statusCodeElement.style.color = 'green';
      } else if (statusCode >= 400 && statusCode < 500) {
        statusCodeElement.style.color = 'orange';
      } else if (statusCode >= 500) {
        statusCodeElement.style.color = 'red';
      } else {
        statusCodeElement.style.color = 'black';
      }
      
      responseMessageElement.textContent = typeof message === 'object' 
        ? JSON.stringify(message, null, 2) 
        : message;
    }
  
    // Listar tipo de proyectos (GET)
    btnListar.addEventListener('click', async () => {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        showResponse(response.status, data);
      } catch (error) {
        showResponse(500, { error: error.message });
      }
    });
  
    // Crear usuario (POST)
    btnCrear.addEventListener('click', async () => {
      const formData = new FormData(usuarioForm);
      const usuario = {
        nombre: formData.get('codigo'),
        documento: formData.get('descripcion')
      };
  
      try {
        const response = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        });
        const data = await response.json();
        showResponse(response.status, data);
      } catch (error) {
        showResponse(500, { error: error.message });
      }
    });
  
    // Actualizar usuario (PUT)
    btnActualizar.addEventListener('click', async () => {
      const formData = new FormData(usuarioForm);
      const id = formData.get('codigo');
      
      if (!id) {
        showResponse(400, { error: 'Se requiere un codigo para actualizar' });
        return;
      }
  
      const usuario = {
        nombre: formData.get('codigo'),
        documento: formData.get('descripcion')
      };
  
      try {
        const response = await fetch(`${baseUrl}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        });
        const data = await response.json();
        showResponse(response.status, data);
      } catch (error) {
        showResponse(500, { error: error.message });
      }
    });
  
    // Eliminar usuario (DELETE)
    btnEliminar.addEventListener('click', async () => {
      const id = document.getElementById('codigo').value;
      
      if (!id) {
        showResponse(400, { error: 'Se requiere un codigo para eliminar' });
        return;
      }
  
      if (!confirm('¿Está seguro de eliminar este proyecto?')) return;
  
      try {
        const response = await fetch(`${baseUrl}/${id}`, {
          method: 'DELETE'
        });
        const data = await response.json();
        showResponse(response.status, data);
      } catch (error) {
        showResponse(500, { error: error.message });
      }
    });

    const forms = {
      formGET: document.getElementById('formGET'),
      formPOST: document.getElementById('formPOST'),
      formPUT: document.getElementById('formPUT'),
      formDELETE: document.getElementById('formDELETE')
    };
  
    function ocultarTodos() {
      Object.values(forms).forEach(form => form.style.display = 'none');
    }
  
    document.getElementById('btn-listar').addEventListener('click', () => {
      ocultarTodos();
      forms.formGET.style.display = 'block';
    });
  
    document.getElementById('btn-crear').addEventListener('click', () => {
      ocultarTodos();
      forms.formPOST.style.display = 'block';
    });
  
    document.getElementById('btn-actualizar').addEventListener('click', () => {
      ocultarTodos();
      forms.formPUT.style.display = 'block';
    });
  
    document.getElementById('btn-eliminar').addEventListener('click', () => {
      ocultarTodos();
      forms.formDELETE.style.display = 'block';
    });
  });
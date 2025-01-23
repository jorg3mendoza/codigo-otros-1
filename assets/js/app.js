async function fetchUser(username) {
  try {
    // Indicamos al usuario que estamos cargando los datos
    $n.textContent = 'Cargando...';

    // Realizamos la solicitud a la API de GitHub para obtener información del usuario
    const response = await fetch(`${baseEndpoint}/users/${username}`);

    // Verificamos si la solicitud fue exitosa
    if (!response.ok) {
      // Si hubo un error, lanzamos una excepción con un mensaje descriptivo
      throw new Error(`Error al obtener datos del usuario: ${response.status}`);
    }

    // Convertimos la respuesta a formato JSON para poder trabajar con los datos
    const data = await response.json();

    // Actualizamos los elementos HTML con los datos del usuario
    $n.textContent = data.name;
    $b.textContent = data.blog || 'No se encontró blog'; // Manejamos el caso donde no haya blog
    $l.textContent = data.location || 'No se encontró ubicación'; // Manejamos el caso donde no haya ubicación

  } catch (error) {
    // Si ocurre algún error durante el proceso, lo capturamos aquí
    console.error('Error al obtener información del usuario:', error);

    // Mostramos un mensaje de error amigable al usuario
    $n.textContent = 'Error al obtener datos del usuario.';
  }
}

fetchUser('stolinski');
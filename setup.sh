#!/bin/bash

# Comprobar si NVM está instalado
if ! command -v nvm &> /dev/null; then
    echo "NVM no está instalado. Instalando NVM..."

    # Instalar NVM
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

    # Configurar NVM en el script actual
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

    # Comprobar nuevamente si NVM está instalado
    if ! command -v nvm &> /dev/null; then
        echo "NVM no se pudo instalar. Por favor, verifica la instalación manualmente."
        exit 1
    fi

    echo "NVM se ha instalado correctamente."
fi

# Instalar la versión v14.21.3 de Node.js
echo "Instalando Node.js v14.21.3..."
nvm install v14.21.3

# Establecer la versión recién instalada como predeterminada
nvm alias default v14.21.3

echo "La instalación de Node.js v14.21.3 se ha completado correctamente."

npm install
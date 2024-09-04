# Utiliser une image Node.js officielle comme base
FROM node

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposer le port que l'application va utiliser
EXPOSE 5000

# Définir la commande pour démarrer l'application
CMD ["npm", "run", "dev"]

# Menggunakan image Node.js resmi dari Docker Hub
FROM node:18-alpine

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN apk add --no-cache openssl3

# Menyalin semua file proyek ke dalam container
COPY . .

# Mengatur environment variables (bisa juga melalui docker-compose)
ENV PORT=3000
ENV NODE_ENV=development
ENV DATABASE_URL=postgresql://postgres:admin123@34.128.111.131:5432/express-ktp?schema=public
ENV SECRET_KEY=ktpsecretkey12345

# Expose port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Menjalankan aplikasi Node.js
CMD ["npm", "start"]

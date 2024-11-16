Here's the updated version of the `README.md` with the **Team Members** section in a table format and additional styling to make it even more engaging:

```markdown
# 📚 Academic Information System for Informatics Students - Universitas Diponegoro

Welcome to the **Academic Information System (SIA) Undip** project for the **Komputasi Tersebar dan Paralel**. This system allows academic advisors (dosen wali) to view and verify IRS (Individu Rencana Studi) submissions from students. The backend is designed to provide seamless interaction for the verification process.

## 🚀 Project Overview

The system enables academic advisors to:
- View all IRS submissions from students under their supervision.
- Verify IRS requests by either accepting or rejecting them.

### 🛠 Backend Technology Stack

| Technology               | Description                                                                                           |
|--------------------------|-------------------------------------------------------------------------------------------------------|
| **Express.js**            | Framework for building RESTful APIs.                                                                  |
| **Prisma ORM**            | An ORM used for database interaction with PostgreSQL.                                                 |
| **PostgreSQL v17**        | CloudSQL PostgreSQL for storing IRS data on Google Cloud.                                             |
| **Docker**                | Containerization of the backend application for efficient deployment.                                |
| **NGINX**                 | Load balancing to ensure high availability and scalability.                                          |
| **Google Cloud Platform** | Hosting on Google Cloud VM instances (Asia-Jakarta region) for deployment.                           |
| **Postman**               | API testing tool for validating the functionality of the backend.                                     |

## 🌟 Features

- **IRS Verification**: Academic advisors (dosen wali) can view and verify the IRS submissions of students.
- **RESTful API**: Exposes API endpoints to interact with the system using Express.js.
- **Cloud Database**: Uses Google Cloud's CloudSQL with PostgreSQL for persistent data storage.
- **Dockerized Deployment**: The backend is containerized for easy deployment and scaling.
- **Load Balancing**: Powered by NGINX to handle traffic and ensure the system remains available.
- **Postman API Testing**: Postman is used to test and validate the backend APIs.

## 💻 API Endpoints

### 🔐 Authentication

- **POST /api/auth/login**  
  Login for both mahasiswa and dosen. Accepts credentials and returns an authentication token.

### 👨‍🎓 Mahasiswa (Student)

- **GET /api/mahasiswa**  
  Check the login status of mahasiswa.

### 👩‍🏫 Dosen (Academic Advisor)

- **GET /api/dosen**  
  Check the login status of dosen (academic advisor).

### 📄 IRS (Individu Rencana Studi)

- **POST /api/irs/upload**  
  Upload IRS data for a mahasiswa. Requires authentication.

- **GET /api/irs**  
  Fetch all IRS submissions from students.

- **GET /api/irs/mahasiswa**  
  Fetch IRS submissions for a specific mahasiswa under an academic advisor.

- **PUT /api/irs/verify-bulk**  
  Verify IRS submissions for multiple mahasiswa at once.

## 👥 Team Members

Here’s the amazing team behind the development of this system:

| 🧑‍💻 **Name**                      | 🎓 **Student ID**        | 🛠️ **Role**                |
|-----------------------------------|--------------------------|----------------------------|
| **Emerio Kevin Aryaputra**        | 24060121120012           | Backend Engineer           |
| **Erlan Irhab Ghalib**            | 24060121140166           | Backend Engineer           |
| **Fadhail Athaillah Bima**       | 24060121140172           | Backend Engineer           |

## ⚙️ Technologies Used

- **Node.js** with **Express.js**: Backend framework and API creation.
- **Prisma ORM**: For smooth interaction with the PostgreSQL database.
- **PostgreSQL v17 (CloudSQL)**: Cloud database hosted on Google Cloud.
- **Docker**: Containerizing the backend application.
- **NGINX**: For efficient load balancing in production.
- **Google Cloud Platform (GCP)**: Virtual Machine instances deployed in the Asia-Jakarta region.
- **Postman**: For testing and validating the API endpoints.

## 🛠️ Setup Instructions

### Prerequisites

- Docker (for local containerized environment)
- Google Cloud Platform account (for deployment)
- Postman (for API testing)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/project-repository.git
cd project-repository
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and configure the following:

```
NODE_ENV=development
DATABASE_URL=your_database_connection_url
PORT=3000

SECRET_KEY=your_secret_key
```

### 4. Run the Application Locally

```bash
npm start
```

This will start the backend server at `http://localhost:3000`.

### 5. Testing the API with Postman

1. Open Postman.
2. Import the API collection or manually test the endpoints using the provided API documentation.

### 6. Docker Setup

To build and run the application in Docker:

```bash
docker-compose up --build
```

This will create and run a Docker container with the application.

### 7. Deployment on Google Cloud

For deployment, ensure you have Docker images and NGINX configured for load balancing. The deployment is done through Google Cloud VM instances in the Asia-Jakarta region.

## 📑 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### Key Changes:
- **Team Members Table**: The **Team Members** section is now presented in a table format, making it more visually appealing and easy to read.
- **Team Member Emojis**: Added emojis for roles and names for a more engaging and fun presentation.
- **Consistent Style**: Enhanced consistency in the section titles and use of markdown for headers, tables, and code blocks.

This should make the **Team Members** section look more polished and engaging while keeping the overall layout of the README appealing and easy to navigate.
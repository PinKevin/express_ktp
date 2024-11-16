Here is an updated `README.md` file incorporating the API endpoints you've provided:

```markdown
# Academic Information System for Informatics Students - Universitas Diponegoro

This project is an Academic Information System (SIA) for the Informatics Department at Universitas Diponegoro. The main focus of the project is to develop the **backend for IRS (Individu Rencana Studi)** verification by academic advisors (dosen wali). This system allows academic advisors to view and verify the IRS requests submitted by students.

## Project Overview

The system provides an API for academic advisors to:

- View all IRS submissions from students under their supervision.
- Verify the IRS requests by either accepting or rejecting them.

The backend for this system is built using:

- **Express.js**: For creating RESTful API routes.
- **Prisma ORM**: For database interactions with PostgreSQL.
- **PostgreSQL (CloudSQL v17)**: As the database used for storing IRS data.
- **Docker**: To containerize the backend application for easier deployment.
- **NGINX**: Used for load balancing in a production environment.
- **Google Cloud Platform (GCP)**: For deploying the system with Virtual Machine instances in the Asia-Jakarta region.
- **Postman**: For API testing.

## Features

- **IRS Verification**: Dosen Wali (Academic Advisor) can view and verify the IRS submissions of students.
- **Express.js API**: The backend exposes API endpoints to interact with the system.
- **Cloud Database**: The system uses Google Cloud's CloudSQL PostgreSQL for persistent data storage.
- **Containerized Deployment**: The system is containerized with Docker for efficient deployment and scaling.
- **Load Balancing**: Using NGINX for distributing requests to ensure high availability and reliability.
- **API Testing with Postman**: Postman is used to test and validate the API functionality.

## API Endpoints

### Authentication

- **POST /api/auth/login**  
  Login for both mahasiswa and dosen. Accepts credentials and returns an authentication token.

### Mahasiswa

- **GET /api/mahasiswa**  
  Check login status for mahasiswa.

### Dosen

- **GET /api/dosen**  
  Check login status for dosen (academic advisor).

### IRS (Individu Rencana Studi)

- **POST /api/irs/upload**  
  Upload IRS data for a mahasiswa. Requires authentication.
  
- **GET /api/irs**  
  Fetch IRS submissions for all mahasiswa.

- **GET /api/irs/mahasiswa**  
  Fetch IRS submissions for a specific mahasiswa based on their academic advisor.

- **PUT /api/irs/verify-bulk**  
  Verify IRS submissions for multiple mahasiswa.

## Team Members

- **Backend Engineer**:  
  - Emerio Kevin Aryaputra - 24060121120012
  - Erlan Irhab Ghalib - 24060121140166
  - Fadhail Athaillah Bima - 24060121140172

## Technologies Used

- **Node.js** with **Express.js**
- **Prisma ORM**
- **PostgreSQL v17 (CloudSQL on GCP)**
- **Docker**
- **NGINX** (for load balancing)
- **Google Cloud Platform (GCP)** - VM instances (Asia-Jakarta region)
- **Postman** for API testing

## Setup Instructions

### Prerequisites

- Docker (for local containerized environment)
- Google Cloud Platform account (for deployment)
- Postman (for API testing)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/project-repository.git
cd project-repository
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the environment variables

Create a `.env` file in the root directory and configure the following:

```
DATABASE_URL=your_database_connection_url
PORT=3000
```

### 4. Run the application locally

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Changes:
- Added your API endpoints in the **API Endpoints** section.
- Described the functionality of each endpoint to make it clear for users on how to use the system.

Feel free to copy this content into your `README.md` file in your GitHub project!
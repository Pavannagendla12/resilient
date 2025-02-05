# Resilient E-Commerce Platform using AWS Services

## Overview
This is a robust E-Commerce web application built with **Node.js** and **Express.js**, leveraging **AWS EC2, S3, and GitHub Actions** for seamless deployment and scalability.

## File Structure
```
resilient-ecommerce/
│── .github/
│   ├── workflows/
│   │   ├── deploy.yml
│── src/
│   ├── routes/
│   │   ├── productRoutes.js
│   ├── controllers/
│   │   ├── productController.js
│── config/
│   ├── awsConfig.js
│── uploads/   # (For temporary image storage)
│── package.json
│── server.js
│── README.md
│── .gitignore
```

## Installation
### Prerequisites
- **Node.js & npm** installed
- AWS account with an **S3 bucket**
- **EC2 instance** for deployment
- **GitHub repository**

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/resilient-ecommerce.git
   cd resilient-ecommerce
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node server.js
   ```

## Deployment with GitHub Actions
### Configure AWS Credentials
1. Create an **IAM user** in AWS with access to EC2 & S3.
2. Save credentials in GitHub **Secrets**:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`
   - `EC2_HOST`

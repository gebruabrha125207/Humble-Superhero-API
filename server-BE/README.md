
Humble Superhero API:-
Humble Superhero API is a simple Node.js and Express-based API that allows users to store and retrieve superheroes, ranked by their humility.


Features
Add superheroes with a name, superpower, and humility score (1-10).
Retrieve a list of superheroes sorted by humility score (highest first).


Setup & Installation
Clone the Repository

Prerequisites

Node.js (>=14.x)

npm or yarn

Installation
Clone the repository:

git clone https://github.com/your-repo/humble-superhero-api.git
cd humble-superhero-api

git clone https://github.com/your-repo/humble-superhero-api.git
cd humble-superhero-api


Install Dependencies
npm install


Start the Server
npm start
The API will run on http://localhost:5000.



Endpoints with Manual Testing Using Postman or cURL to send requests.

1️⃣ Add a Superhero
POST /superheroes

Request Body (JSON):

Edit
{
  "name": "Superhumble",
  "superpower": "Invisibility",
  "humilityScore": 9
}

![image](https://github.com/user-attachments/assets/8c24a7e0-9597-4acf-902f-75eb414593c8)


Response: Returns the added superhero.
2️⃣ Get Superheroes
GET /superheroes

Response: Returns an array of superheroes sorted by humility score in descending order.

![image](https://github.com/user-attachments/assets/6758f92f-f446-45d4-a8bb-9b6c2a72937a)


✅ Unit Testing 
Jest test using Supertest to verify that your Humble Superhero API correctly sorts superheroes by humility score in descending order (highest humility first).

Run Jest tests using:
npm test

what  did the code do:-


1️⃣ Clears the Superhero Database Before Each Test
The test won't be affected by previous data, preventing false positives or failures due to leftover data.


2️⃣ Adds Two Superheroes to the API (POST /superheroes)
If you want to test with more than two superheroes, simply add more POST requests:


3️⃣ Retrieves All Superheroes (GET /superheroes)
   Calls the API to fetch all superheroes.

Expected to return superheroes sorted by humility score in descending order.
4️⃣ Validates the Response
expect(res.status).toBe(200);


✅ Ensures the request was successful (HTTP 200 OK).

✅ Confirms that exactly two superheroes exist in the response.

✅ Verifies sorting by humility score:

![image](https://github.com/user-attachments/assets/8720cbb7-a840-48a4-b0ed-4fc4361143fe)

If I had more time, I would:

1.Database Integration: Replace in-memory storage with a robust database like MongoDB or PostgreSQL for better scalability and persistence.

2.Pagination: Implement efficient pagination to handle large superhero lists and improve performance.

3.Authentication & Security: Secure the API using JWT-based authentication, ensuring safe access control and user verification.

4.Caching: Integrate caching mechanisms (e.g., Redis) to enhance response times and reduce database load.

5.Logging & Monitoring: Implement proper logging and monitoring tools (e.g., Winston, Prometheus) for debugging and system health tracking.

6.Rate Limiting: Prevent abuse by adding rate limiting to API endpoints.

7.Testing: Write comprehensive unit and integration tests to ensure reliability and maintainability.

8.API Documentation: Provide clear and structured API documentation using Swagger or Postman for easy adoption.

9.Input Sanitization:- Use escape() from express-validator to prevent XSS attacks and ensure safe user input handling.

10.Use express.json() Instead of body-parser:-Since Express 4.16+, express.json() can be used instead of body-parser.json() for handling JSON payloads, reducing dependencies and improving efficiency.

11.Expand Test Coverage
Add edge case tests, such as:
✅ Handling missing fields in requests
✅ Testing invalid humilityScore values
✅ Ensuring empty lists return 200 instead of 500
✅ Checking if duplicate superheroes are handled correctly

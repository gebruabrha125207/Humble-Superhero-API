
Humble Superhero API
Overview
Humble Superhero API is a simple Node.js and Express-based API that allows users to store and retrieve superheroes, ranked by their humility.

Features
Add superheroes with a name, superpower, and humility score (1-10).
Retrieve a list of superheroes sorted by humility score (highest first).
Endpoints
1️⃣ Add a Superhero
POST /superheroes

Request Body (JSON):
json
Copy
Edit
{
  "name": "Superhumble",
  "superpower": "Invisibility",
  "humilityScore": 9
}
Response: Returns the added superhero.
2️⃣ Get Superheroes
GET /superheroes

Response: Returns an array of superheroes sorted by humility score in descending order.


Setup & Installation
Clone the Repository

git clone https://github.com/your-repo/humble-superhero-api.git
cd humble-superhero-api
Install Dependencies

npm install
Start the Server


npm start
The API will run on http://localhost:5000.

Testing
🛠️ Manual Testing
Use Postman or cURL to send requests.

✅ Unit Testing
Run Jest tests using:
npm test



Future Enhancements
Database Integration: Replace in-memory storage with MongoDB or PostgreSQL.
Pagination: Support large superhero lists.
Authentication: Secure API with JWT-based authentication.



Fronend :-

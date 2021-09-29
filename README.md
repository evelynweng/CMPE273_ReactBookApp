# CMPE273 React book app

### Demo video :  https://youtu.be/f0GkrmUVccE 

## how to run the application
1. Frontend
```
cd Frontend
npm install
npm start
```
2. Backend
```
cd Backend
npm install
node index.js
```
3. manipulate the book app via browser started in step 1, or access the web application via localhost/3000
```
http://localhost:3000/
``` 
## Assignment requirement
1. If the user tries to access Home/Add Book/Delete Book page (either by clicking Menu or by changing URL) without Login, he should be redirected to Login page.
2. After Logout, user should not be able to access any other page other than Login page.
3. Display error on Login page if user enters incorrect credentials.
4. All the input fields should have proper validations.
5. Home page should display the list of Books and should get updated if a book gets added or deleted.
6. Add a Book: 
- User should be able to add a book using Book ID, Book Title, Book Author. All are required fields.
- Book ID should be unique. Display an error if book with existing Book ID is added.
- Redirect to Home after successfully addition of new book.
7. Delete a Book:
- User should be able to delete a book using Book ID.
- Display an error if Book ID does not exist.
- Redirect to Home after successfully deletion of book.
# Booking Page Update TODO

## Steps to Complete:

1. **Update Frontend Files**
   - [x] Edit index.html: Add footer, update prices to LKR (halls: 50000, 30000, 40000; food: 2000, 5000, 3000), move summary to modal structure with close button.
   - [x] Edit styles.css: Add styles for modal (fixed center, overlay), footer.
   - [x] Edit script.js: Update data-price attributes to LKR values, display "LKR ", show/hide modal on checkout, add fetch POST to /api/bookings with booking data, handle success/error.

2. **Create Backend Spring Boot Project**
   - [x] Create backend/pom.xml with Spring Boot dependencies (web, jpa, mysql).
   - [x] Create backend/src/main/java/com/booking/BookingApplication.java (main class).
   - [x] Create backend/src/main/java/com/booking/entity/Details.java (@Entity for booking details).
   - [x] Create backend/src/main/java/com/booking/repository/DetailsRepository.java (JpaRepository).
   - [x] Create backend/src/main/java/com/booking/controller/BookingController.java (POST /api/bookings to save).
   - [x] Create backend/src/main/resources/application.properties (MySQL config: url=jdbc:mysql://localhost:3306/booking, username=root, password=, jpa ddl-auto=update).

3. **Setup and Run Backend**
   - [x] Execute: cd backend && mvn clean install
   - [x] Execute: mvn spring-boot:run (start server on port 8080)
   - [x] Verify server starts without errors (check logs for MySQL connection).

4. **Testing**
   - [x] Launch browser to index.html, test selections, checkout (modal displays, POST sent, success alert).
   - [x] Query DB: mysql -u root -e "USE booking; SELECT * FROM details;" to verify insert.
   - [x] Edge cases: No selections, multiple halls, change people count.

5. **Completion**
   - [x] All steps done, update TODO.md with [x] marks.

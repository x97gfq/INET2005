
-- Create the Users table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lastname VARCHAR(50),
    firstname VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(100)
);

-- Insert 10 fake rows into the Users table
INSERT INTO Users (lastname, firstname, email, password) VALUES
('Smith', 'John', 'john.smith@example.com', 'password123'),
('Doe', 'Jane', 'jane.doe@example.com', 'password456'),
('Brown', 'Charlie', 'charlie.brown@example.com', 'password789'),
('Johnson', 'Emily', 'emily.johnson@example.com', 'password101'),
('Williams', 'Michael', 'michael.williams@example.com', 'password102'),
('Jones', 'Sarah', 'sarah.jones@example.com', 'password103'),
('Garcia', 'David', 'david.garcia@example.com', 'password104'),
('Miller', 'Laura', 'laura.miller@example.com', 'password105'),
('Davis', 'James', 'james.davis@example.com', 'password106'),
('Martinez', 'Maria', 'maria.martinez@example.com', 'password107');


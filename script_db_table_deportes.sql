/* CREATE DATABASE centro_deportivo; */

USE centro_deportivo; 

INSERT INTO deportes
    (nombre, profesor, precioMensual, categoria, createdAt, updatedAt)
VALUES
    ('Fútbol', 'Carlos Fernández', 25000.00, 'Niños', NOW(), NOW()),
    ('Básquet', 'Mariana López', 28000.00, 'Jóvenes', NOW(), NOW()),
    ('Vóley', 'Laura Martínez', 24000.00, 'Adultos', NOW(), NOW()),
    ('Natación', 'Roberto Gómez', 35000.00, 'Niños', NOW(), NOW()),
    ('Tenis', 'Sofía Rodríguez', 40000.00, 'Jóvenes', NOW(), NOW()),
    ('Hockey', 'Daniel Pérez', 30000.00, 'Adultos', NOW(), NOW()),
    ('Karate', 'Miguel Sánchez', 27000.00, 'Niños', NOW(), NOW()),
    ('Atletismo', 'Valentina Díaz', 22000.00, 'Jóvenes', NOW(), NOW()),
    ('Boxeo', 'Fernando Romero', 32000.00, 'Adultos', NOW(), NOW()),
    ('Gimnasia artística', 'Camila Torres', 29000.00, 'Niños', NOW(), NOW());
    
    
SELECT * FROM deportes;
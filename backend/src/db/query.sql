CREATE DATABASE projects_db;

CREATE TABLE autores (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
autor VARCHAR(100) NOT NULL,
job VARCHAR(100) NOT NULL, 
photo LONGTEXT NOT NULL
);


CREATE TABLE project (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
slogan VARCHAR(200) NOT NULL, 
repo VARCHAR(200) NOT NULL,
demo VARCHAR(200) NOT NULL, 
technologies VARCHAR(200) NOT NULL, 
description TEXT NOT NULL,
image LONGTEXT NOT NULL,
autor_id INT NOT NULL,
FOREIGN KEY (autor_id) REFERENCES autores(id)
);

INSERT INTO autores (id, autor, job, photo) VALUES
(1, 'Lucia Gomez', 'Frontend Developer', 'https://placecats.com/300/300'),
(2, 'Carla Ruiz', 'Backend Developer', 'https://placecats.com/300/300'),
(3, 'Elena Torres', 'Full Stack Developer', 'https://placecats.com/300/300');

INSERT INTO project (
    id, name, slogan, repo, demo, technologies, description, image, autor_id
) VALUES
(1, 'EcoFinder', 'Encuentra puntos de reciclaje cerca de ti', 
 'https://github.com/luciagomez/ecofinder', 'https://ecofinder.example.com', 
 'React, Node.js, MongoDB', 
 'Una aplicación web que permite localizar centros de reciclaje según tu ubicación.', 
 'https://placecats.com/400/300', 1),

(2, 'TaskManager', 'Organiza tu día con eficiencia', 
 'https://github.com/carlaruiz/taskmanager', 'https://taskmanager.example.com', 
 'Vue.js, Firebase', 
 'Gestor de tareas en tiempo real para mejorar tu productividad personal.', 
 'https://placecats.com/400/350', 2),

(3, 'FitTrack', 'Tu progreso fitness en un solo lugar', 
 'https://github.com/elenatorres/fittrack', 'https://fittrack.example.com', 
 'Angular, Express.js, MySQL', 
 'Aplicación para el seguimiento de entrenamientos y nutrición.', 
 'https://placecats.com/400/250', 3);








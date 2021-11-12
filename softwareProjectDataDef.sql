DROP TABLE IF EXISTS Teams;
CREATE TABLE Teams (
    team_id int NOT NULL AUTO_INCREMENT, 
    team_name varchar(255) NOT NULL,
    team_year int NOT NULL,
    title_won varchar(255) NOT NULL,
    finish_position int NOT NULL,
    player_of_year varchar(255) NOT NULL,
    young_player_of_year varchar(255) NOT NULL,
    PRIMARY KEY (team_id)
);

DROP TABLE IF EXISTS Players;
CREATE TABLE Players (
    player_id int NOT NULL AUTO_INCREMENT, 
    player_name varchar(255) NOT NULL,
    appearances int NOT NULL,
    goals varchar(255) NOT NULL,
    position int NOT NULL,
    PRIMARY KEY (player_id)
);

INSERT INTO Players (player_name, appearances, goals, position)
VALUES
('Steven Gerrard', 504, 120, 'Central Midfield'),
('Frank Lampard', 609, 177, 'Central Midfield'),
('Paul Scholes', 499, 107, 'Central Midfield');

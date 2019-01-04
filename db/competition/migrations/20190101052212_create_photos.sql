-- migrate:up

CREATE TABLE photos (
	id	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	title	VARCHAR(50) NOT NULL,
  description	TEXT NOT NULL,
	file_name	VARCHAR(50) NOT NULL,
  employee_id	INT NOT NULL,
	created	DATETIME NOT NULL,
  CONSTRAINT fk_photo_employee FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- migrate:down

ALTER TABLE photos DROP FOREIGN KEY fk_photo_employee;
DROP TABLE IF EXISTS photos;

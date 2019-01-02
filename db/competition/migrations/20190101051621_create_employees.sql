-- migrate:up

CREATE TABLE employees (
	id	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name	VARCHAR(50) NOT NULL,
  dni	VARCHAR(8) NOT NULL,
  address	VARCHAR(100),
  phone	VARCHAR(15),
  email	VARCHAR(50),
  branch_id	INT,
  CONSTRAINT fk_employee_branch FOREIGN KEY (branch_id) REFERENCES branches(id)
);

-- migrate:down

ALTER TABLE employees DROP FOREIGN KEY fk_employee_branch;
DROP TABLE IF EXISTS employees;

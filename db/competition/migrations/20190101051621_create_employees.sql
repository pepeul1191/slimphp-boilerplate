-- migrate:up

CREATE TABLE employees (
	id	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name	VARCHAR(50) NOT NULL,
  dni	VARCHAR(8) NOT NULL,
  address	VARCHAR(100) NOT NULL,
  phone	VARCHAR(15) NOT NULL,
  email	VARCHAR(30) NOT NULL,
  branch_id	INT NOT NULL,
  CONSTRAINT fk_employee_branch FOREIGN KEY (branch_id) REFERENCES branches(id)
);

-- migrate:down

ALTER TABLE employees DROP FOREIGN KEY fk_employee_branch;
DROP TABLE IF EXISTS employees;

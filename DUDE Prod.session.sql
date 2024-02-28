-- @block
CREATE TABLE Vendors(
	id INT PRIMARY KEY AUTO_INCREMENT,
	city VARCHAR(255) NOT NULL,
	category VARCHAR(255) NOT NULL,
	vendorName VARCHAR(255) NOT NULL,
	rating INT,
	pros TEXT,
	cons TEXT,
	GmapsLink TEXT,
	dateCreated DATE
);
-- @block
INSERT INTO Vendors (
		city,
		category,
		vendorName,
		rating,
		pros,
		cons,
		GmapsLink,
		dateCreated
	)
VALUES (
		'Berlin',
		'Döner',
		'First Kebap',
		7,
		'24/7 offen, stabile Jungs, jagen dich mit Zitronensaft',
		'Döner selbst nur OK',
		'https://maps.app.goo.gl/BwyHZJHEgCGq86Ju5',
		'2024-02-11'
	),
	(
		'Berlin',
		'Döner',
		'Pia Bistro',
		6,
		'24/7 offen, beste Soßen EU',
		'Brot zu knusprig',
		'https://maps.app.goo.gl/KiDGNgLwKiBwnZLa8',
		'2024-02-04'
	);
-- @block
INSERT INTO Vendors (
		city,
		category,
		vendorName,
		rating,
		pros,
		cons,
		GmapsLink,
		dateCreated
	)
VALUES (
		'Wien',
		'Döner',
		'Berliner Döner Wien',
		8,
		'Für Wien ganz OK Preise, süße Bude in Fancy Area, nimmt Karte',
		'Schmeckt nicht wirklich wie in Berlin, Verkäufer zu nett',
		'https://maps.app.goo.gl/6c6D8YbDqK8pAMfAA',
		'2024-02-22'
	),
	(
		'Wien',
		'Döner',
		'Dr. Döner',
		9,
		'Döner kostet 4,30€ (bruh), nimmt Karte,  direkt am Park',
		'Name ist bissl cringe tbh',
		'https://maps.app.goo.gl/dmYYWjQeVYQHfUeB7',
		'2024-02-08'
	);
-- @block
INSERT INTO Vendors (
		city,
		category,
		vendorName,
		rating,
		pros,
		cons,
		GmapsLink,
		dateCreated
	)
VALUES (
		'Berlin',
		'Späti',
		'SODA all in one',
		8,
		'Korrekte Atzen, Ist auch ein Paketshop, Hat Zubr, macht auch guten Kaffee',
		'Bisschen teuer',
		'https://maps.app.goo.gl/9RGqTSTXRFXTWXQb9',
		'2024-02-17'
	);
-- @block
SELECT *
FROM Vendors
ORDER BY rating DESC;
-- @block
DROP TABLE Vendors;
-- @block
DELETE FROM Vendors
WHERE dateCreated IS NULL;
-- @block
CREATE TABLE Rules(
	category VARCHAR(255) NOT NULL PRIMARY KEY,
	ruleText TEXT
);
-- @block
INSERT INTO Rules (category, ruleText)
VALUES (
		'Döner',
		'- immer alles komplett nehmen  - wenn "Rambo" vorhanden, immer bisschen draufstreuen um Respekt zu gewinnen  - Ayran dazu nehmen, oder Uludag Gazos, wenn du auf Ghetto machen willst'
	),
	(
		'Späti',
		'- Kartenzahlung meist erst ab 10€ (wenn überhaupt)  - Wenn Sterni mehr als 1,20€ kostet bitte an den Admin wenden, damit der Laden rausgenommen werden kann  - akzeptable Begrüßungen: "Moin", oder "Jo, was geht chef"'
	);
-- @block
SELECT *
FROM Rules;
-- @block
SELECT V.*,
	R.ruleText
FROM Vendors V
	JOIN Rules R ON V.category = R.category
WHERE V.category = 'Döner';
-- @block
SELECT V.*,
	R.ruleText
FROM Vendors V
	JOIN Rules R ON V.category = R.category
WHERE V.category = "Späti";
-- @block
CREATE TABLE Vendors(
	id INT PRIMARY KEY AUTO_INCREMENT,
	city VARCHAR(255) NOT NULL,
	category VARCHAR(255) NOT NULL,
	vendorName VARCHAR(255) NOT NULL,
	rating INT,
	pros TEXT,
	cons TEXT,
	GmapsLink TEXT,
	dateCreated DATE,
	address VARCHAR(255)
);
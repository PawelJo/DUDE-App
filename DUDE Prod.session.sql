-- @block
CREATE TABLE Vendors(
	id INT PRIMARY KEY AUTO_INCREMENT,
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
		category,
		vendorName,
		rating,
		pros,
		cons,
		GmapsLink,
		dateCreated
	)
VALUES (
		'Döner',
		'First Kebap',
		7,
		'24/7 offen, stabile Jungs, jagen dich mit Zitronensaft',
		'Döner selbst nur OK',
		'https://maps.app.goo.gl/BwyHZJHEgCGq86Ju5',
		'2024-02-11'
	),
	(
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
		category,
		vendorName,
		rating,
		pros,
		cons,
		GmapsLink,
		dateCreated
	)
VALUES (
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
WHERE category = 'Späti'
ORDER BY rating DESC;
-- @block
DROP TABLE Vendors;
-- @block
DELETE FROM Vendors
WHERE dateCreated IS NULL
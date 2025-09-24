IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'portfolio_db')
BEGIN
    CREATE DATABASE portfolio_db;
END
GO
USE portfolio_db;
GO

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'contact_messages')
BEGIN
    CREATE TABLE contact_messages (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        submitted_at DATETIME DEFAULT GETDATE()
    );
END



